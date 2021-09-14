import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import QuestionTwo from '../components/Questions/QuestionTwo/QuestionTwo.vue'
import QuestionThree from '../components/Questions/QuestionThree/QuestionThree.vue'
import QuestionFour from '../components/Questions/QuestionFour/QuestionFour.vue'
import QuestionFive from '../components/Questions/QuestionFive/QuestionFive.vue'
import Answer from '../components/Content/Answer.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/question2',
    name: 'QuestionTwo',
    component: QuestionTwo
  },
  {
    path:'/question3',
    name: 'QuestionThree',
    component: QuestionThree
  },
  {
    path: '/question4',
    name: 'QuestionFour',
    component: QuestionFour
  },
  {
    path: '/question5',
    name: 'QuestionFive',
    component: QuestionFive
  },
  {
    path:'/answer',
    name: 'Answer',
    component: Answer
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
