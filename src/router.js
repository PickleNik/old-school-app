import Vue from 'vue'
import Router from 'vue-router'
import Student from './views/Student.vue'
import Home from './views/Home.vue'
import Todo from './views/Todo.vue'
import Calendar from './views/Calendar.vue'
import Grades from './views/Grades.vue'
import Settings from './views/Settings.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/student',
      name: 'student',
      component: Student
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar
    },
    {
      path: '/grades',
      name: 'grades',
      component: Grades
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    }
  ]
})
