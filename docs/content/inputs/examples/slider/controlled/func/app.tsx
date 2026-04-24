import * as React from 'react';
import { Slider, SliderChangeEvent, SliderLabel } from '@progress/kendo-react-inputs';

const categories = [{ label: 'Rent' }, { label: 'Food' }, { label: 'Savings' }, { label: 'Entertainment' }];

const BudgetSlider = () => {
    const [allocations, setAllocations] = React.useState<number[]>([30, 20, 30, 20]);

    const handleChange = (index: number) => (event: SliderChangeEvent) => {
        const newAllocations = [...allocations];
        newAllocations[index] = Math.round(event.value);
        setAllocations(newAllocations);
    };

    return (
        <div className="p-6 space-y-4 max-w-lg mx-auto">
            <h2 className="text-xl font-bold text-center">Budget Allocation</h2>
            <div className="border rounded-lg shadow p-4 bg-white">
                {categories.map((category, index) => (
                    <div key={index} className="mb-4">
                        <Slider min={0} max={100} step={5} value={allocations[index]} onChange={handleChange(index)}>
                            <SliderLabel title={category.label} position={allocations[index]} />
                        </Slider>
                        <div className="text-right text-sm font-medium">
                            {category.label}: {Math.round(allocations[index])}%
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BudgetSlider;
