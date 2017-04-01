import Hello from './Hello'

export default {
  path: '/home',
  name: 'Home',
  childRoutes: [
    { path: 'hello',
      name: 'Hello',
      component: Hello,
      isIndex: true,
    }
  ]
}
