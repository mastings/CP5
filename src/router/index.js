import Vue from 'vue'
import Router from 'vue-router'
//import HomePage from '@/components/HomePage'
import HomePage from '@/components/WelcomePage'
import SearchResults from '@/components/SearchResults'
import HashTag from '@/components/HashTag'
import UserPage from '@/components/UserPage'
import Reviews from '@/components/Reviews'
import Portfolio from '@/components/Portfolio'
import About from '@/components/About'
import Contact from '@/components/Contact'
import CreateAccount from '@/components/CreateAccount'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
   
	 {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/',
      name: 'Reviews',
      component: Reviews
    },
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/',
      name: 'CreateAccount',
      component: CreateAccount
    },
    {
      path: '/search',
      name: 'SearchResults',
      component: SearchResults
    },
    {
      path: '/hashtag/:hashtag',
      name: 'HashTag',
      component: HashTag
    },
    {
      path: '/user/:userID',
      name: 'UserPage',
      component: UserPage
    },
  ]
})

