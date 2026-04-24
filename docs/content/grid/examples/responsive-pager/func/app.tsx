import * as React from 'react';
import { PagerTargetEvent } from '@progress/kendo-react-data-tools';
import { Grid, GridColumn, GridPageChangeEvent } from '@progress/kendo-react-grid';
import { Slider, SliderLabel, SliderChangeEvent } from '@progress/kendo-react-inputs';
import { Checkbox } from '@progress/kendo-react-inputs';
import products from './gd-products';

interface PageState {
    skip: number;
    take: number;
}

const initialDataState: PageState = { skip: 0, take: 10 };

const App = () => {
    const [value, setValue] = React.useState(7);
    const [responsive, setResponsive] = React.useState(true);
    const [page, setPage] = React.useState<PageState>(initialDataState);
    const [checkboxValue, setCheckboxValue] = React.useState<boolean | null | undefined>(true);
    const [pageSizeValue, setPageSizeValue] = React.useState<number | string | undefined>();
    const [gridWidth, setGridWidth] = React.useState(700);
    const pageChange = (event: GridPageChangeEvent) => {
        const targetEvent = event.targetEvent as PagerTargetEvent;
        const take = targetEvent.value === 'All' ? products.length : event.page.take;

        if (targetEvent.value) {
            setPageSizeValue(targetEvent.value);
        }
        setPage({
            ...event.page,
            take
        });
    };

    const handleSliderChange = (e: SliderChangeEvent) => {
        setValue(e.value);
        const newGridWidth = e.value * 100;
        setGridWidth(newGridWidth);
        console.log(newGridWidth);
    };
    const handleCheckboxChange = () => {
        const newCheckboxValue = !checkboxValue;
        setCheckboxValue(newCheckboxValue);
        setResponsive(newCheckboxValue);
    };

    return (
        <div>
            <div>
                <div className="example-config row">
                    <Checkbox checked={checkboxValue} onChange={handleCheckboxChange} label={'Responsive Pager'} />
                </div>
                <Slider
                    buttons={true}
                    step={2}
                    defaultValue={7}
                    min={1}
                    max={10}
                    onChange={handleSliderChange}
                    value={value}
                >
                    <SliderLabel position={1}>300</SliderLabel>
                    <SliderLabel position={3}>400</SliderLabel>
                    <SliderLabel position={5}>500</SliderLabel>
                    <SliderLabel position={7}>600</SliderLabel>
                    <SliderLabel position={10}>700</SliderLabel>
                </Slider>
                <br />
                <br />
            </div>

            <Grid
                key={gridWidth}
                style={{ height: '400px', width: `${gridWidth}px` }}
                data={products.slice(page.skip, page.take + page.skip)}
                skip={page.skip}
                take={page.take}
                total={products.length}
                pageable={{
                    buttonCount: 4,
                    pageSizes: [5, 10, 15, 'All'],
                    pageSizeValue: pageSizeValue,
                    responsive: responsive
                }}
                onPageChange={pageChange}
            >
                <GridColumn field="ProductID" />
                <GridColumn field="ProductName" title="Product Name" />
                <GridColumn field="UnitPrice" title="Unit Price" />
            </Grid>
        </div>
    );
};
export default App;
