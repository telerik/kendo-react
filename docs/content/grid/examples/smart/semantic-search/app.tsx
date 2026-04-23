import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridToolbar,
    SmartBox,
    GridToolbarSpacer,
    GridSmartBoxSearchEvent
} from '@progress/kendo-react-grid';
import { Slider, SliderChangeEvent } from '@progress/kendo-react-inputs';
import { filterIcon } from '@progress/kendo-svg-icons';
import { products, Product } from './data';
import { SemanticSearchService } from './semantic-search';
import { ColumnMenu } from './columnMenu';
import './styles.css';

interface EmbeddedProduct extends Product {
    embedding?: number[];
    similarity?: number;
}

const BATCH_SIZE = 5;

const App = () => {
    const [loading, setLoading] = React.useState(true);
    const [similarityThreshold, setSimilarityThreshold] = React.useState(78);
    const [gridData, setGridData] = React.useState<EmbeddedProduct[]>(products);
    const [embeddedData, setEmbeddedData] = React.useState<EmbeddedProduct[]>([]);
    const lastSearchQueryRef = React.useRef('');
    const semanticService = React.useRef(new SemanticSearchService());

    React.useEffect(() => {
        const initializeEmbeddings = async () => {
            setGridData([...products]);

            const texts = products.map(
                (item) =>
                    `Product: ${item.name}. Category: ${item.category}. Description: ${item.description}. Brand: ${
                        item.brand
                    }. Price: ${item.price}. Status: ${item.stockStatus}. Country: ${item.countryOfOrigin}. Rating: ${
                        item.rating
                    }. Tags: ${item.tags.join(', ')}.`
            );

            const embeddings = await semanticService.current.embedBatch(texts, BATCH_SIZE);

            const embedded = products.map((item, i) => ({
                ...item,
                embedding: embeddings[i]
            }));

            setEmbeddedData(embedded);
            setLoading(false);
        };

        initializeEmbeddings();
    }, []);

    const performSearch = React.useCallback(async () => {
        const query = lastSearchQueryRef.current;
        if (!query || embeddedData.length === 0) {
            return;
        }

        const queryEmbedding = await semanticService.current.embed(query);
        const thresholdDecimal = similarityThreshold / 100;

        const results = embeddedData
            .map((item) => {
                const similarity = semanticService.current.cosineSimilarity(queryEmbedding, item.embedding || []);
                return {
                    ...item,
                    similarity
                };
            })
            .filter((x) => x.similarity > thresholdDecimal)
            .sort((a, b) => b.similarity - a.similarity);

        setGridData(results);
    }, [embeddedData, similarityThreshold]);

    const handleSemanticSearch = React.useCallback(
        (event: GridSmartBoxSearchEvent) => {
            const value = event.searchValue;
            lastSearchQueryRef.current = value.trim();

            if (!lastSearchQueryRef.current) {
                setGridData([...products]);
                return;
            }

            performSearch();
        },
        [performSearch]
    );

    const handleThresholdChange = (event: SliderChangeEvent) => {
        setSimilarityThreshold(event.value);
    };

    React.useEffect(() => {
        if (lastSearchQueryRef.current) {
            performSearch();
        }
    }, [similarityThreshold, performSearch]);

    return (
        <div>
            <div className="example-config">
                <p>Similarity Threshold: {similarityThreshold}%</p>
                <Slider min={75} max={85} step={1} value={similarityThreshold} onChange={handleThresholdChange} />
                <p>
                    Adjust the threshold to control how closely search results must match your query. Higher values
                    return more similar items.
                </p>
            </div>

            <Grid
                data={gridData}
                dataItemKey="id"
                autoProcessData={true}
                groupable={true}
                sortable={{ mode: 'multiple' }}
                reorderable={true}
                resizable={true}
                pageable={{ pageSizes: true }}
                pageSize={10}
                columnMenuIcon={filterIcon}
                columnMenu={ColumnMenu}
                style={{ height: '600px' }}
            >
                <GridToolbar>
                    <SmartBox
                        searchConfig={false}
                        semanticSearchConfig={{
                            enabled: true,
                            placeholder: loading ? 'Loading embeddings...' : 'Semantic search...',
                            delay: 300,
                            history: {
                                size: 5,
                                timestampFormat: 'HH:mm'
                            }
                        }}
                        aiAssistantConfig={false}
                        onSemanticSearch={handleSemanticSearch}
                    />
                    <GridToolbarSpacer />
                </GridToolbar>
                {loading && <div className="k-loading-mask" />}
                <Column field="name" title="Product Name" width={200} />
                <Column field="category" title="Category" width={140} />
                <Column field="stockStatus" title="Status" width={120} />
                <Column field="price" title="Price" width={100} />
                <Column field="countryOfOrigin" title="Country" width={110} />
                <Column field="rating" title="Rating" width={150} />
                <Column field="description" title="Description" width={360} />
            </Grid>
        </div>
    );
};

export default App;
