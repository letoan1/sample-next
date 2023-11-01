import axios from 'axios';

export const fetchProduct = async () => {
    const data = await axios.get(`https://dummyjson.com/products?limit=10&skip=10`);
    return data.data.products;
};
