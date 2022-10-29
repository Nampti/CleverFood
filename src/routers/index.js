import Home from '../pages/Home';
import Info from '../pages/Info';
import Shop from '../pages/Shop';
import Product from '../pages/Product';
import Cart from '../pages/Cart';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/info', component: Info },
    { path: '/shop', component: Shop },
    { path: '/cart', component: Cart },
    { path: '/shop/:slug', component: Product },



]
const privateRoutes = [

]
export { publicRoutes, privateRoutes }