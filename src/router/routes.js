
const routes = [
  {
    path: '/',
    component: () => import('src/app/view/layouts/HomeLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('src/app/view/pages/Home.vue'),
        meta: {
          Authorization: true
        }
      },
      {
        path: '/account',
        component: () => import('src/app/view/pages/Account.vue'),
        meta: {
          Authorization: true
        }
      }
    ]
  },
  {
    path: '/',
    component: () => import('src/app/view/layouts/MainLayout.vue'),
    children: [
      { path: 'login', component: () => import('src/app/view/pages/Login.vue') },
      { path: 'register', component: () => import('src/app/view/pages/Register.vue') }
    ]
  }
]

export default routes
