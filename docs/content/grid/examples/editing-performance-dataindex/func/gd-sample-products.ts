import { Product } from './gd-interfaces';

/* Generating large dataset for performance testing */
const generateLargeDataset = (size: number): Product[] => {
    const categories = [
        'Beverages',
        'Condiments',
        'Dairy Products',
        'Grains/Cereals',
        'Meat/Poultry',
        'Produce',
        'Seafood'
    ];
    const productPrefixes = [
        'Premium',
        'Deluxe',
        'Classic',
        'Fresh',
        'Organic',
        'Special',
        'Traditional',
        'Modern',
        'Elite',
        'Supreme'
    ];
    const productSuffixes = ['Product', 'Item', 'Goods', 'Supply', 'Material', 'Component', 'Element', 'Resource'];

    return Array(size)
        .fill({})
        .map((_, i) => ({
            ProductID: i + 1,
            ProductName: `${productPrefixes[i % productPrefixes.length]} ${
                productSuffixes[i % productSuffixes.length]
            } ${i + 1}`,
            UnitPrice: Math.round((Math.random() * 100 + 10) * 100) / 100,
            UnitsInStock: Math.floor(Math.random() * 100),
            Discontinued: Math.random() > 0.8,
            Category: categories[i % categories.length]
        }));
};

export const sampleProducts = generateLargeDataset(50000);

export default sampleProducts;
