import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { productsActions } from '~/products/products.actions';
import { ProductsTypeKeys } from '~/products/products.typeKeys';
import { push } from 'connected-react-router';

const productRoutes = {
    getAllProducts: {
        method: axios.get,
        route: 'products',
    },
    getOneProduct: {
        method: axios.get,
        route: (productUrl: string) => `products/${productUrl}`,
    },
    createProduct: {
        method: axios.post,
        route: 'products',
    },
};

function* getProductsAsync() {
    try {
        const { data } = yield call(productRoutes.getAllProducts.method, productRoutes.getAllProducts.route);
        yield put(productsActions.getProducts.success(data));
    } catch (error) {
        yield put(productsActions.getProducts.failure(error));
    }
}
function* watchGetProductsRequest() {
    yield takeEvery(ProductsTypeKeys.GET_PRODUCTS_REQUEST, getProductsAsync);
}

function* getProductAsync(action: ReturnType<typeof productsActions.getProduct.request>) {
    try {
        const { data } = yield call(
            productRoutes.getOneProduct.method,
            productRoutes.getOneProduct.route(action.payload),
        );
        yield put(productsActions.getProduct.success(data));
    } catch (error) {
        yield put(productsActions.getProduct.failure(error));
    }
}

function* watchGetProductRequest() {
    yield takeEvery(ProductsTypeKeys.GET_PRODUCT_REQUEST, getProductAsync);
}

function* createProductAsync(action: ReturnType<typeof productsActions.createProduct.request>) {
    try {
        const { data } = yield call(
            productRoutes.createProduct.method,
            productRoutes.createProduct.route,
            action.payload,
        );
        yield put(productsActions.createProduct.success(data));
        yield put(push(`/products/${data.url}`));
    } catch (error) {
        yield put(productsActions.createProduct.failure(error));
    }
}

function* watchCreateProduct() {
    yield takeEvery(ProductsTypeKeys.CREATE_PRODUCT_REQUEST, createProductAsync);
}

export const productsSagas = [watchGetProductsRequest, watchGetProductRequest, watchCreateProduct];
