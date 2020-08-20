import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('../view/home/home')
const category = () => import('../view/category/category')
const cart = () => import('../view/cart/cart')
const profile = () => import('../view/profile/profile')
Vue.use(VueRouter)

const routes =[
	{
	  path:'',
	  redirect:'/home'
	},
	{
	  path:'/home',
	  component:home
	},
	{
	  path:'/category',
	  component:category
	},
	{
	  path:'/cart',
	  component:cart
	},
	{
	  path:'/profile',
	  component:profile
	}
]

const router = new VueRouter({
	routes,
	mode:'history'
})

export default router