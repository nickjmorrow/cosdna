import { Product } from '~/products/types/Product';

export const productsInitialState = {
    products: [] as Product[],
    isGetProductsInProgress: false,
    getProductsError: null as string | null,
    product: null as Product | null,
    isGetProductInProgress: false,
    getProductError: null as string | null,
};
