import Hello from './Hello'
import Counter from './Counter'

export default {
  path: '/home',
  name: 'Home',
  childRoutes: [
    { path: 'hello',
      name: 'Hello',
      component: Hello,
      isIndex: true,
    },
    { path: 'counter',
      name: 'Counter',
      component: Counter,
      isIndex: true,
    }
  ]
}
