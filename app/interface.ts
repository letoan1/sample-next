export interface Products {
    id: string;
    title: string;
    price: number;
    thumbnail: string;
}

export interface Tasks {
    id: number;
    title: string;
    completed: boolean;
}

export interface IProduct extends Products {
    description: string;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    images: [];
}
