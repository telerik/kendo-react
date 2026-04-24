import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridToolbar,
    SmartBox,
    GridToolbarSpacer,
    GridSmartBoxSearchEvent,
    GridCustomCellProps
} from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import { ProgressBar } from '@progress/kendo-react-progressbars';
import { arrowRotateCcwIcon, filterIcon } from '@progress/kendo-svg-icons';
import { saveGridPDF } from '@progress/kendo-react-pdf';
import { products, Product, StockStatus } from './data';
import { SemanticSearchService } from './semantic-search';
import { ColumnMenu } from './columnMenu';
import './styles.css';

interface EmbeddedProduct extends Product {
    embedding?: number[];
    similarity?: number;
}

const BATCH_SIZE = 5;

const getStockStatusBadgeColor = (stockStatus: StockStatus): 'success' | 'warning' | 'error' | 'info' | 'primary' => {
    switch (stockStatus) {
        case StockStatus.InStock:
            return 'success';
        case StockStatus.LowStock:
            return 'warning';
        case StockStatus.OutOfStock:
        case StockStatus.Discontinued:
            return 'error';
        case StockStatus.PreOrder:
        case StockStatus.BackOrder:
            return 'info';
        default:
            return 'primary';
    }
};

const StatusCell = (props: GridCustomCellProps) => {
    const { dataItem } = props;
    return (
        <td>
            <div style={{ textAlign: 'center' }}>
                <BadgeContainer>
                    <Badge rounded="medium" themeColor={getStockStatusBadgeColor(dataItem.stockStatus)}>
                        {dataItem.stockStatus}
                    </Badge>
                </BadgeContainer>
            </div>
        </td>
    );
};

const RatingCell = (props: GridCustomCellProps) => {
    const { dataItem } = props;
    const ratingPercentage = Math.round((dataItem.rating / 5) * 100 * 100) / 100;
    return (
        <td>
            <ProgressBar value={ratingPercentage} labelVisible={true} label={(p) => `${p.value?.toFixed(1)}%`} />
        </td>
    );
};

const App = () => {
    const [loading, setLoading] = React.useState(true);
    const [gridData, setGridData] = React.useState<EmbeddedProduct[]>(products);
    const [embeddedData, setEmbeddedData] = React.useState<EmbeddedProduct[]>([]);
    const [hasChanges, setHasChanges] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');

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

    const checkStateChanges = React.useCallback(() => {
        const hasDataChanges = gridData.length !== products.length;
        const hasSearchChanges = searchValue.trim().length > 0;

        setHasChanges(hasDataChanges || hasSearchChanges);
    }, [gridData.length, searchValue]);

    React.useEffect(() => {
        checkStateChanges();
    }, [checkStateChanges]);

    const performSemanticSearch = React.useCallback(async () => {
        const query = lastSearchQueryRef.current;
        if (!query || embeddedData.length === 0) {
            return;
        }

        const queryEmbedding = await semanticService.current.embed(query);

        const results = embeddedData
            .map((item) => {
                const similarity = semanticService.current.cosineSimilarity(queryEmbedding, item.embedding || []);
                return {
                    ...item,
                    similarity
                };
            })
            .filter((x) => x.similarity > 0.78)
            .sort((a, b) => b.similarity - a.similarity);

        setGridData(results);
    }, [embeddedData]);

    const handleSemanticSearch = React.useCallback(
        (event: GridSmartBoxSearchEvent) => {
            const value = event.searchValue;
            lastSearchQueryRef.current = value.trim();
            setSearchValue(value);

            if (!lastSearchQueryRef.current) {
                setGridData([...products]);
                return;
            }

            performSemanticSearch();
        },
        [performSemanticSearch]
    );

    const handleSearch = React.useCallback((event: GridSmartBoxSearchEvent) => {
        const value = event.searchValue;
        setSearchValue(value);

        if (!value.trim()) {
            setGridData([...products]);
        }
    }, []);

    const handleReset = React.useCallback(() => {
        setGridData([...products]);
        setSearchValue('');
        lastSearchQueryRef.current = '';
        setHasChanges(false);
    }, []);

    const handlePdfExport = async (event: { target: HTMLDivElement }): Promise<void> => {
        saveGridPDF(event.target, { fileName: 'Products.pdf' });
    };

    return (
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
            pdf={true}
            onPdfExport={handlePdfExport}
            columnMenuIcon={filterIcon}
            columnMenu={ColumnMenu}
            style={{ height: '600px' }}
        >
            <GridToolbar>
                <GridToolbarSpacer />
                <GridToolbarSpacer />
                <SmartBox
                    activeMode="aiAssistant"
                    searchConfig={{
                        enabled: true,
                        fields: ['name', 'category', 'description', 'brand', 'stockStatus', 'countryOfOrigin'],
                        placeholder: 'Search products...',
                        delay: 300
                    }}
                    semanticSearchConfig={{
                        enabled: true,
                        placeholder: loading ? 'Loading embeddings...' : 'Semantic search...',
                        delay: 500,
                        history: {
                            size: 5,
                            timestampFormat: 'HH:mm'
                        }
                    }}
                    aiAssistantConfig={{
                        enabled: true,
                        requestUrl: 'https://demos.telerik.com/service/v2/ai/grid/smart-state',
                        promptSuggestions: [
                            'Show in stock products',
                            'Group by category',
                            'Highlight products over $100',
                            'Export to PDF',
                            'Move price column to first position'
                        ],
                        speechToTextButton: true,
                        history: {
                            size: 5,
                            timestampFormat: 'HH:mm'
                        }
                    }}
                    onSearch={handleSearch}
                    onSemanticSearch={handleSemanticSearch}
                />
                <GridToolbarSpacer />
                <Button
                    svgIcon={arrowRotateCcwIcon}
                    title="Reset Changes"
                    themeColor="base"
                    fillMode="flat"
                    rounded="full"
                    disabled={!hasChanges}
                    onClick={handleReset}
                >
                    Reset Changes
                </Button>
            </GridToolbar>
            {loading && <div className="k-loading-mask" />}
            <Column field="name" title="Product Name" width={200} />
            <Column field="category" title="Category" width={140} />
            <Column field="stockStatus" title="Status" width={100} cells={{ data: StatusCell }} />
            <Column field="price" title="Price" width={100} filter="numeric" format="{0:c2}" />
            <Column field="countryOfOrigin" title="Country" width={110} />
            <Column field="rating" title="Rating" width={100} filter="numeric" cells={{ data: RatingCell }} />
            <Column field="description" title="Description" width={360} />
        </Grid>
    );
};

export default App;
