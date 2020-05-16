import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { productsActions } from '~/products/products.actions';

export const ProductIngredientsPage: React.FC = () => {
    const { productUrl } = useParams();
    const dispatch = useDispatch();
    dispatch(productsActions.getProduct.request(productUrl));

    return <div>Product Ingredients Page, {productUrl}</div>;
};
