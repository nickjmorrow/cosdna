import * as React from 'react';
import { Typography } from '~/core/Typography';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import { ProductIngredientsPage } from '~/products/ProductIngredientsPage';
import { CreateProduct } from '~/products/CreateProduct';

export const Products: React.FC = () => {
    let { path, url } = useRouteMatch();
    console.log(path);
    console.log(url);
    return (
        <div>
            <Link to={`${url}/create`}>Fire</Link>
            <Switch>
                <Route path={`${path}/create`}>
                    <CreateProduct />
                </Route>
                <Route path={`${path}/:productUrl`}>
                    <ProductIngredientsPage />
                </Route>
                <Route exact path={path} component={ProductsHome} />
            </Switch>
        </div>
    );
};

const ProductsHome: React.FC = () => {
    return <div>ProductsHome</div>;
};
