import { ActionType } from 'typesafe-actions';
import { productsActions } from '~/products/products.actions';
import { ProductsState } from '~/products/types/ProductsState';
import { productsInitialState } from '~/products/products.initialState';
import { ProductsTypeKeys } from '~/products/products.typeKeys';

export const productsReducer = (
    state: ProductsState = productsInitialState,
    action: ActionType<typeof productsActions>,
): ProductsState => {
    switch (action.type) {
        case ProductsTypeKeys.GET_PRODUCTS_REQUEST:
            return { ...state, isGetProductsInProgress: true, getProductsError: null };
        case ProductsTypeKeys.GET_PRODUCTS_SUCCESS:
            return { ...state, products: action.payload, isGetProductsInProgress: false };
        case ProductsTypeKeys.GET_PRODUCTS_FAILURE:
            return { ...state, isGetProductsInProgress: false, getProductsError: action.payload };
        case ProductsTypeKeys.GET_PRODUCT_REQUEST:
            return { ...state, isGetProductInProgress: true, getProductError: null };
        case ProductsTypeKeys.GET_PRODUCT_SUCCESS:
            return { ...state, product: action.payload, isGetProductInProgress: false };
        case ProductsTypeKeys.GET_PRODUCT_FAILURE:
            return { ...state, isGetProductInProgress: false, getProductError: action.payload };
        default:
            return state;
    }
};
