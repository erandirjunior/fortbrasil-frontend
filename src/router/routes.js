
const routes = [
  {
    path: '/',
    component: () => import('src/app/view/layouts/HomeLayout.vue'),
    children: [
      { path: '', component: () => import('src/app/view/pages/Home.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('src/app/view/pages/Error404.vue')
  })
}

export default routes
