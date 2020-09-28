export default ({ router, store, Vue }) => {
  router.beforeEach((to, from, next) => {
    const authorization = to.meta.Authorization
    if (authorization) {
      const token = localStorage.getItem('token')
      if (token) {
        next(next)
      } else {
        localStorage.clear()
        next('/login')
      }
    } else {
      next(next)
    }
  })
}
