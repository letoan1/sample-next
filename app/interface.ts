export interface Products {
    id: string;
    title: string;
    price: number;
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
    thumbnail: string;
    images: [];
}
