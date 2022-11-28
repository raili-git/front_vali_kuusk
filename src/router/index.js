import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from "@/views/ShopView";
import LoginView from "@/views/LoginView";
import TermsView from "@/views/TermsView";
import ConfirmationView from "@/views/ConfirmationView";
import RegistrationView from "@/views/RegistrationView";
import PaymentView from "@/views/PaymentView";
import CartView from "@/views/CartView";
import ContactView from "@/views/ContactView";
import TreeView from "@/views/TreeView";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/shop',
    name: 'shopRoute',
    component: ShopView
  },
  {
    path: '/payment',
    name: 'paymentRoute',
    component: PaymentView
  },
  {
    path: '/cart',
    name: 'cartRoute',
    component: CartView
  },
  {
    path: '/confirmation',
    name: 'confirmationRoute',
    component: ConfirmationView
  },
  {
    path: '/login',
    name: 'loginRoute',
    component: LoginView
  },
  {
    path: '/terms',
    name: 'termsRoute',
    component: TermsView
  },
  {
    path: '/registration',
    name: 'registrationRoute',
    component: RegistrationView
  },
{
    path: '/trees',
    name: 'treeRoute',
    component: TreeView
  },
 {
    path: '/registration/contact',
    name: 'contactRoute',
    component: ContactView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
