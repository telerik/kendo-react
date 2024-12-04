export type CardDescriptor = {
    img: string;
    collectionText: string;
};

export type DataModel = {
    text: string | undefined;
}

export type ListDataDescriptor = {
    id?: number;
    img: string | undefined;
    status: string | null;
    title: string;
    rating?: number;
    category: string;
    material: string;
    oldPrice: number | null;
    newPrice: number;
};

export type BackgroundImageProps = {
    title: string;
    subtitle: string;
    buttonText?: string;
    img: string;
};

export interface GridTranslations {
    productTitle: string;
    nameTitle: string;
    skuTitle: string;
    categoryTitle: string;
    priceTitle: string;
    quantityTitle: string;
    totalSalesTitle: string;
  }
  
  export interface Translations {
    grid: GridTranslations;
    chartSelectedDataButton: string;
    top3SalesButton: string;
    languageSpanish: string;
    searchPlaceholder: string;
    adminLabel: string;
    clientLabel: string;
    shoppingCartTitle: string;
    backButtonText: string;
    emptyCartMessage: string;
    paymentDetailsTitle: string;
    paymentDetailsSubtitle: string;
    fullNameLabel: string;
    emailLabel: string;
    phoneNumberLabel: string;
    proceedToCheckoutButtonText: string;
    whyChooseUs: string;
    returnPolicyTitle: string;
    returnPolicyContent: string;
    includedGiftWrappingTitle: string;
    includedGiftWrappingContent: string;
    discountCodeTitle: string;
    discountCodeContent: string;
    testimonialsData: { name: string; rating: number; description: string }[];
    testimonialsTitle: string;
    testimonialsSubtitle: string;
    statuses: { [key: string]: string };
    categories: { [key: string]: string };
    materials: { [key: string]: string };
    diamondWeddingRing: string;
    silverBraceletWithCross: string;
    [key: string]: any; 
  }
  
  export type LanguageContextType = {
    t: Translations;
    language: "en" | "fr" | "es";
    setLanguage: React.Dispatch<React.SetStateAction<"en" | "fr" | "es">>;
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