import { all, fork } from 'redux-saga/effects';
import { productsSagas } from '~/products/products.sagas';

export function* rootSaga() {
    yield all(productsSagas.map(ps => fork(ps)));
}
