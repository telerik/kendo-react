import { useState, useEffect, useCallback } from 'react';

export interface RecentSelectionsConfig {
    maxRecentItems?: number;
    storageKey?: string;
}

// Utility functions for localStorage operations
const getStoredItems = <T>(storageKey: string): T[] => {
    try {
        const stored = localStorage.getItem(storageKey);
        return stored ? JSON.parse(stored) : [];
    } catch {
        return [];
    }
};

const setStoredItems = <T>(storageKey: string, items: T[]): void => {
    try {
        localStorage.setItem(storageKey, JSON.stringify(items));
    } catch (error) {
        console.warn('Failed to save recent selections:', error);
    }
};

const clearStoredItems = (storageKey: string): void => {
    try {
        localStorage.removeItem(storageKey);
    } catch (error) {
        console.warn('Failed to clear recent selections:', error);
    }
};

// Custom hook for managing recent selections
export const useRecentSelections = <T>(getItemKey: (item: T) => string, config: RecentSelectionsConfig = {}) => {
    const maxRecentItems = config.maxRecentItems || 5;
    const storageKey = config.storageKey || 'kendo-recent-selections';

    const [recentSelections, setRecentSelections] = useState<T[]>([]);

    // Load recent selections on mount
    useEffect(() => {
        const stored = getStoredItems<T>(storageKey);
        setRecentSelections(stored);
    }, [storageKey]);

    // Add a recent selection
    const addRecentSelection = useCallback(
        (item: T) => {
            const itemKey = getItemKey(item);

            setRecentSelections((prevRecent) => {
                // Remove existing occurrence of this item
                const filtered = prevRecent.filter((recentItem) => getItemKey(recentItem) !== itemKey);

                // Add to the beginning and limit to max items
                const updated = [item, ...filtered].slice(0, maxRecentItems);

                // Save to localStorage
                setStoredItems(storageKey, updated);

                return updated;
            });
        },
        [getItemKey, maxRecentItems, storageKey]
    );

    // Clear all recent selections
    const clearRecentSelections = useCallback(() => {
        setRecentSelections([]);
        clearStoredItems(storageKey);
    }, [storageKey]);

    return {
        recentSelections,
        addRecentSelection,
        clearRecentSelections
    };
};
