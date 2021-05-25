import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'
import CreateComponent from '../views/CreateComponent.vue'
import IndexComponent from '../views/IndexComponent.vue'
import EditComponent from '../views/EditComponent.vue'

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
      name: 'create',
      path: '/create',
      component: CreateComponent
  },
  {
      name: 'posts',
      path: '/posts',
      component: IndexComponent
  },
  {
      name: 'edit',
      path: '/edit/:id',
      component: EditComponent
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router