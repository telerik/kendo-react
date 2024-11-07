export type CardDescriptor = {
    img: string;
    collectionText: string;
};

export type DataModel = {
    text: string;
}

export type ListDataDescriptor = {
    img: string | null;
    status: string | null;
    title: string;
    category: "Bracelets" | "Earrings" | "Rings" | "Watches" | "Necklaces";
    material: "Silver" | "Gold";
    oldPrice: number | null;
    newPrice: number;
};

export type BackgroundImageProps = {
    title: string;
    subtitle: string;
    buttonText: string;
    img: string;
};

export type CardListProps = {
    data: any[];
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
}