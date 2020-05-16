import { action } from 'typesafe-actions';
import { ProductsTypeKeys } from '~/products/products.typeKeys';
import { Product } from '~/products/types/Product';
import { CreateProductModel } from '~/products/types/CreateProductModel';

const getProducts = {
    request: () => action(ProductsTypeKeys.GET_PRODUCTS_REQUEST),
    success: (products: Product[]) => action(ProductsTypeKeys.GET_PRODUCTS_SUCCESS, products),
    failure: (error: string) => action(ProductsTypeKeys.GET_PRODUCTS_FAILURE, error),
};

const getProduct = {
    request: (url: string) => action(ProductsTypeKeys.GET_PRODUCT_REQUEST, url),
    success: (product: Product) => action(ProductsTypeKeys.GET_PRODUCT_SUCCESS, product),
    failure: (error: string) => action(ProductsTypeKeys.GET_PRODUCT_FAILURE, error),
};

const createProduct = {
    request: (createProductModel: CreateProductModel) =>
        action(ProductsTypeKeys.CREATE_PRODUCT_REQUEST, createProductModel),
    success: (product: Product) => action(ProductsTypeKeys.CREATE_PRODUCT_SUCCESS, product),
    failure: (error: string) => action(ProductsTypeKeys.CREATE_PRODUCT_FAILURE, error),
};

export const productsActions = {
    getProducts,
    getProduct,
    createProduct,
};
