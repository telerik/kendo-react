import HeaderCard from './HeaderCard';
import BaseCard from './BaseCard';

const cards = [
    {
        title: 'Grid',
        image: (
            <path d="M0.0,0.0V72.0H60.0l12.0-12.0V0.0ZM66.0,57.52,57.52,66.0H6.0V6.0H66.0ZM18.0,60.0l6.0-6.0h9.0v6.0l6.0-6.0h9.0v6.0l12.0-12.0H54.0V39.0l6.0-6.0H54.0V24.0l6.0-6.0H54.0V12.0H48.0V18.0H39.0V12.0H33.0V18.0H24.0V12.0H18.0V18.0H12.0V24.0H18.0v9.0H12.0v6.0H18.0v9.0H12.0v6.0H18.0ZM39.0,24.0h9.0v9.0H39.0Zm0.0,15.0h9.0v9.0H39.0ZM24.0,24.0h9.0v9.0H24.0Zm0.0,15.0h9.0v9.0H24.0Z" />
        ),
        description:
            'Customizable data table component that supports sorting, filtering, paging, and more out of the box.',
        url: 'https://www.telerik.com/kendo-react-ui/components/grid/'
    },
    {
        title: 'Dialog',
        image: (
            <path d="M6,12v60h48l12-12h0V12H6z M60,57.6L51.6,66H12V18h48V57.6z M18,36h24l-6,6H18V36z M60,0h6v6h-6V0z M6,0h48v6H6V0z M18,54h15l-6,6H18V54z M39,54h15l-6,6h-9V54z M18,24h36l-6,6H18V24z"></path>
        ),
        description: 'A prompt for users to take specific actions by interacting with a modal dialog.',
        url: 'https://www.telerik.com/kendo-react-ui/components/dialogs/dialog'
    },
    {
        title: 'DropDownList',
        image: (
            <path d="M60,12h6V60h0l-12,12H6V12h6V66h39.51l8.49-8.49V12ZM18,18v6h30l6-6H18ZM0,0V6H66l6-6H0ZM18,36h30l6-6H18v6Zm0,12h30l6-6H18v6Z" />
        ),
        description:
            'A sleek and accessible dropdown menu for selecting a single item from a predefined list of options.',
        url: 'https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdownlist/'
    },
    {
        title: 'DatePicker',
        image: (
            <path d="M39,24h-9v-9h9v9Zm12-9h-9v9h9v-9Zm-24,12h-9v9h9v-9Zm3,9h9v-9h-9v9Zm12,0h9v-9h-9v9Zm-24,12h9v-9h-9v9Zm12,0h9v-9h-9v9Zm-12,12h9v-9h-9v9Zm12,0h9v-9h-9v9Zm12-12h9v-9h-9v9Zm15,9.51l-8.49,8.49H12V12H6V72h45l12-12h0V12h-6v45.51ZM0,0V6H66l6-6H0Z" />
        ),
        description: 'Intuitive calendar-based input for selecting dates with built-in validation and formatting.',
        url: 'https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker/'
    },
    {
        title: 'ListBox',
        image: (
            <path d="M18,21h-6v-6h6v6ZM72,0V60l-12,12H0V0H72Zm-6,6H6V66H57.51l8.49-8.49V6Zm-6,9H24v6h30l6-6ZM18,27h-6v6h6v-6Zm42,0H24v6h30l6-6ZM18,39h-6v6h6v-6Zm42,0H24v6h30l6-6Z" />
        ),
        description: 'Transfer, reorder, and manage items between two lists with drag-and-drop support.',
        url: 'https://www.telerik.com/kendo-react-ui/components/listbox/'
    }
];

const CardsContainer = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8">Explore KendoReact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <HeaderCard />
                {cards.map((card, index) => (
                    <BaseCard
                        key={index}
                        title={card.title}
                        image={card.image}
                        description={card.description}
                        url={card.url}
                    />
                ))}
            </div>
        </div>
    );
};
export default CardsContainer;
