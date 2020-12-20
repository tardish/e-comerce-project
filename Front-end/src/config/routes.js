import HomePage from '../Home';
import RegisterPage from '../Register';
import LoginPage from '../Login';
import ProfilePage from '../Profile';
import ProductPage from '../Product';
import CartPage from '../Cart';
import AdminPage from '../admin';

const components = {
    home:{
        url: "/home",
        component: HomePage
    },
    register:{
        url: "/register",
        component: RegisterPage
    },
    login:{
        url: "/login",
        component: LoginPage
    },
    profile :{
        url: "/profile",
        component: ProfilePage
    },
    product:{
        url: "/product/:id",
        component: ProductPage
    },
    cart:{
        url: "/cart",
        component: CartPage
    },
    admin:{
        url: "/admin",
        component: AdminPage
    },
};
export default {
    guest: {
        allowedRoutes: [
            components.login,
            components.register,
        ],
        redirectRoutes: "/login"
    },
    user : {
        allowedRoutes:[
            components.login,
            components.register,
            components.home,
            components.product,
            components.cart,
            components.profile,
            components.admin,
        ],
        redirectRoutes: "/home"
    },
}