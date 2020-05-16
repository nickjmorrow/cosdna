import { Products } from '~/products/Products';
import { Ingredients } from '~/ingredients/Ingredients';
import { About } from '~/about/About';
import { Home } from '~/home/Home';
import { ProductIngredientsPage } from '~/products/ProductIngredientsPage';

export const navMenuRoutes = [
    { label: 'Products', route: 'products', component: Products, showInNav: true },
    { label: 'Ingredients', route: 'ingredients', component: Ingredients, showInNav: true },
    { label: 'About', route: 'about', component: About, showInNav: true },
];

export const otherRoutes = [{ route: '', component: Home, showInNav: false }];

export const componentRoutes = [...navMenuRoutes, ...otherRoutes];
