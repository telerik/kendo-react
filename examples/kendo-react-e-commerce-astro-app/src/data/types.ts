export type CardDescriptor = {
    img: string;
    collectionText?: string;
    collectionTextKey?: string;

};

export type DataModel = {
    text: string | undefined;
}

export interface ListDataDescriptor {
    id: number;
    img: string;
    title: string; 
    description?: string;
    reviews?: number; 
    rating: number;
    titleKey?: string;
    category: string;
    categoryKey?: string;
    descriptionKey?: string;
    status?: string; 
    material: string;
    oldPrice: number | null;
    newPrice: number;
  }
  

export type BackgroundImageProps = {
    title: string;
    subtitle: string;
    buttonText?: string;
    img: string;
};

export type CardListProps = {
    data: any[];
    layout: "grid" | "list";
}

export type SectionProps = {
    children: React.ReactNode
}

export type LayoutProps = {
    children: React.ReactNode
}

export type OrderedImgTextProps = {
    title: string;
    subtitle: string;
    contentText: string;
    img: string;
    order: string;
    link: string | null;
};

export type SizedParentProps = {
    children: React.ReactNode;
};

export type CategoryListProps = {
    data: any[];
    title: string;
    subtitle: string;
    colSpan?: number;
}

export type ProductCardProps = {
    breadCrumbItem: DataModel[];
    title: string | undefined;
    image: string | null | undefined;
    subtitle: string | undefined;
    rating: number | undefined;
    reviews: string | undefined;
    price: number | undefined;
    description: string | undefined;
    addToCart: () => void;
}

export type TestemonialsDataDescriptor = {
    image: string;
    name: string;
    description: string;
    rating: number;
}

export type CartItemDescriptor = {
    id: number;
    image: string;
    title: string;
    description: string;
    price: number;
    quantity: number;
    total: number;
}

export type CartContextProps = {
    children: React.ReactNode;
}

export type CartContextDescriptor = {
    product: ListDataDescriptor;
    quantity: number;
}