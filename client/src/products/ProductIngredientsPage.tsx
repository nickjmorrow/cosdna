import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productsActions } from '~/products/products.actions';
import { RootState } from '~/RootState';

export const ProductIngredientsPage: React.FC = () => {
    const { productUrl } = useParams();
    const dispatch = useDispatch();
    dispatch(productsActions.getProduct.request(productUrl));
    const product = useSelector((rootState: RootState) => rootState.products.product);

    if (product === null) {
        return <div>Not here yet</div>;
    }

    return <div>Product Ingredients Page, {product.name}</div>;
};
