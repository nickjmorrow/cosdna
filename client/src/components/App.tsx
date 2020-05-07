import React from 'react';
import { Switch, Route } from 'react-router';
import { NotFound } from '~/components/NotFound';
import { Layout } from '~/components/Layout';
import 'normalize.css';
import { ThemeContext } from 'styled-components';
import { componentRoutes } from '~/core/componentRoutes';
import { styleSystem } from '~/core/styleSystem';

export default function App() {
    return (
        <ThemeContext.Provider value={styleSystem}>
            <Layout>
                <Switch>
                    {componentRoutes.map(cr => (
                        <Route exact path={'/' + cr.route} component={cr.component} />
                    ))}
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </ThemeContext.Provider>
    );
}
