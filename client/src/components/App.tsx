import axios from 'axios';
import 'normalize.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { Layout } from '~/components/Layout';
import { NotFound } from '~/components/NotFound';
import { componentRoutes } from '~/core/componentRoutes';
import { getBaseUrl } from '~/core/getBaseUrl';
import { styleSystem } from '~/core/styleSystem';
import { productsActions } from '~/products/products.actions';

axios.defaults.baseURL = getBaseUrl();

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productsActions.getProducts.request());
    }, []);

    return (
        <ThemeContext.Provider value={styleSystem}>
            <Layout>
                <Switch>
                    {componentRoutes.map(cr => (
                        <Route path={'/' + cr.route} component={cr.component} />
                    ))}
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </ThemeContext.Provider>
    );
}

export default withRouter(App);
