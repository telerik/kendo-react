import { createContext, useState, useContext, ReactNode } from 'react';
import { CartContextDescriptor, ListDataDescriptor } from '../data/types';
import React from 'react';

interface CartContextType {
    cart: CartContextDescriptor[];
    addItemToCart: (product: ListDataDescriptor) => void;
    updateIndividualCartItem: (id: string | number, quantity: number) => void;
    removeItemFromCart: (id: string | number) => void;
}

const ShoppingCartContext = createContext<CartContextType | null>(null);

interface CartProviderProps {
    children: ReactNode;
}   

export const CartProvider = ({ children }: CartProviderProps) => {
    const [shoppingCart, setShoppingCart] = useState<CartContextDescriptor[]>([]);

    const addItemToCart = (product: ListDataDescriptor) => {
        const itemExists = shoppingCart.some(cartItem => cartItem.product.id === product.id);

        if (itemExists) {
            setShoppingCart(shoppingCart.map(cartItem =>
                cartItem.product.id === product.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            ));
        } else {
            setShoppingCart([...shoppingCart, { product, quantity: 1 }]);
        }
    };

    const updateCartItem = React.useCallback((id: string | number, quantity: number) => {
        setShoppingCart(shoppingCart.map(item => {
            if (item.product.id === Number(id)) {
                return {...item, quantity};
            }

            return item
        }))
    }, [shoppingCart]);

    const removeItemFromCart = React.useCallback((id: string | number) => {
        setShoppingCart(shoppingCart.filter(item => item.product.id !== Number(id)));
    }, [shoppingCart]);

    return (
        <ShoppingCartContext.Provider value={{
            cart: shoppingCart,
            addItemToCart,
            updateIndividualCartItem: updateCartItem,
            removeItemFromCart,
        }}>
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
