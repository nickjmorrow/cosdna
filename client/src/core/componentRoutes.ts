import { Products } from '~/products/Products';
import { Ingredients } from '~/ingredients/Ingredients';
import { About } from '~/about/About';
import { Home } from '~/home/Home';

export const componentRoutes = [
    { label: 'Products', route: 'products', component: Products, showInNav: true },
    { label: 'Ingredients', route: 'ingredients', component: Ingredients, showInNav: true },
    { label: 'About', route: 'about', component: About, showInNav: true },
    { label: 'Home', route: '', component: Home, showInNav: false },
];
