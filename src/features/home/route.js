import Hello from './Hello'

export default {
  path: '/home',
  name: 'Home',
  childRoutes: [
    {
      name: 'Hello',
      component: Hello,
      isIndex: true
    },
    {
      path: 'counter',
      name: 'Counter',
      getComponent(location, cb) {
        require.ensure([], require => cb(null, require('./Counter').default), 'counter')
      }
    }
  ]
}
