import * as React from 'react';
import { Button, ButtonGroup, ChipList } from '@progress/kendo-react-buttons';
import './styles.css';

interface Meal {
    name: string;
    icon: string;
}

const meals: Meal[] = [
    { name: 'Pizza', icon: '🍕' },
    { name: 'Sushi', icon: '🍣' },
    { name: 'Burger', icon: '🍔' }
];

const additionsMap: Record<string, Array<{ text: string; value: string }>> = {
    Pizza: [
        { text: 'Ketchup', value: 'ketchup' },
        { text: 'Mustard', value: 'mustard' },
        { text: 'Mayonnaise', value: 'mayonnaise' }
    ],
    Sushi: [
        { text: 'Wasabi', value: 'wasabi' },
        { text: 'Ginger', value: 'ginger' },
        { text: 'Soy sauce', value: 'soy-sauce' }
    ],
    Burger: [
        { text: 'Onions', value: 'onions' },
        { text: 'Avocado', value: 'avocado' },
        { text: 'Eggs', value: 'eggs' }
    ]
};

const App = () => {
    const [selectedMeal, setSelectedMeal] = React.useState('Pizza');

    return (
        <div>
            Order meal:
            <ButtonGroup className="meals">
                {meals.map((meal) => (
                    <Button
                        key={meal.name}
                        togglable={true}
                        selected={selectedMeal === meal.name}
                        onClick={() => setSelectedMeal(meal.name)}
                    >
                        {meal.icon} {meal.name}
                    </Button>
                ))}
            </ButtonGroup>
            <div className="separator">
                <span>Add more:</span>
                <ChipList
                    key={selectedMeal}
                    defaultData={additionsMap[selectedMeal]}
                    selection="multiple"
                    aria-label="Add more"
                />
            </div>
        </div>
    );
};

export default App;
