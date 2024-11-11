import { createContext, useState, useContext, ReactNode } from 'react';
import { CartContextDescriptor } from '../data/types';

interface CartContextType {
    cart: CartContextDescriptor[];
    addItemToCart: (item: CartContextDescriptor) => void;
}

const ShoppingCartContext = createContext<CartContextType | null>(null);

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [shoppingCart, setShoppingCart] = useState<CartContextDescriptor[]>([]);

    const addItemToCart = (item: CartContextDescriptor) => {
        const itemExists = shoppingCart.some(x => x.id === item.id);

        if (itemExists) {
            setShoppingCart(shoppingCart.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem?.quantity + 1 }
                    : cartItem
            ));
        } else {
            setShoppingCart([...shoppingCart, { ...item, quantity: 1 }]);
        }
    };

    return (
        <ShoppingCartContext.Provider value={{ cart: shoppingCart, addItemToCart }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(ShoppingCartContext);
    if (context === null) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};