import App from 'features/common/App'
import homeRoute from 'features/home/route'

const childRoutes = [
  homeRoute
]

const pageNotFound = {
  path: '*',
  getComponent(location, cb) {
    require.ensure([], require => cb(null, require('./features/common/PageNotFound').default), '404')
  }
}
// configuration with plain routes
const routes = [{
  path: '/',
  component: App,
  // indexRoute: { component: Hello },
  childRoutes: [
    ...childRoutes,
    pageNotFound
  ]
}]

// check isIndex property of route config:
// 1. remove the first child with isIndex=true if no path property from childRoutes
// 2. assign it to the indexRoute property of the parent.
function checkIndexRoute(route) {
  if (!route.childRoutes || !route.childRoutes.length) {
    return
  }

  route.childRoutes = route.childRoutes.filter(child => {
    if (child.isIndex) {
      if ((process.env.NODE_ENV === 'development') && route.indexRoute) {
        console.error('More than one index route: ', route)
      }

      if (!route.indexRoute) {
        const indexRoute = { ...child }
        delete indexRoute.path
        route.indexRoute = indexRoute
        if (!child.path) {
          return false
        }
      }
    }
    return true
  })

  route.childRoutes.forEach(checkIndexRoute)
}

// routes.forEach(handleIndexRoute)
export default routes
