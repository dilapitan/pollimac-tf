import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Classify from '@/components/Classify'
import ClassifyRawImages from '@/components/ClassifyRawImages'
import UserGuide from '@/components/UserGuide'
import AddClassifier from '@/components/AddClassifier'
import ChangeClassifier from '@/components/ChangeClassifier'
import Authentication from '@/components/Authentication'
import NormalUser from '@/components/NormalUser'
import AdminUser from '@/components/AdminUser'
import LoginAdmin from '@/components/LoginAdmin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/userGuide',
      name: 'userGuide',
      component: UserGuide
    },
    {
      path: '/classifyRawImages',
      name: 'classifyRawImages',
      component: ClassifyRawImages
    },
    {
      path: '/add',
      name: 'add',
      component: AddClassifier
    },
    {
      path: '/changeClassifier',
      name: 'changeClassifier',
      component: ChangeClassifier
    },
    {
      path: '/authentication',
      name: 'authentication',
      component: Authentication
    },
    {
      path: '/normalUser',
      name: 'normalUser',
      component: NormalUser
    },
    {
      path: '/adminUser',
      name: 'adminUser',
      component: AdminUser
    },
    {
      path: '/loginAdmin',
      name: 'loginAdmin',
      component: LoginAdmin
    }
  ]
})
