# React Boilerplate
A start kit and boilerplate for building scalable web applications with React, Redux and React-router.

## Features
- [x] Use [Webpack](https://webpack.github.io/) for bundling
- [x] Use Webpack dll plugin to improve build performance
- [x] Use [Babel](https://babeljs.io) for ES2015(ES6)+ support
- [x] Use [React hot loader](https://gaearon.github.io/react-hot-loader/) for hot module replacement
- [x] Use [Redux](http://redux.js.org/) for application state management
- [x] Use immutable state management
- [x] Use [React-router](https://github.com/ReactTraining/react-router) for routing and configure with Redux reducer

## Usage

```
# Setup
$ npm install

# Start dev server
$ npm run start

# Start dev server without dashboard (window platform)
$ npm run dev

# Build for production
$ npm run build

# Start static checking
$ npm run lint
```

## Project Structure
```
├── src
│   ├── common
│   │   └── fetch.js
│   ├── components
│   │   ├── Alert
│   │   └── Loader
│   ├── constants
│   │   ├── api.js
│   │   └── constants.js
│   ├── features
│   │   └── common
│   ├── middlewares
│   │   └── api.js
│   ├── styles
│   ├── index.html
│   ├── Root.js
│   ├── configStore.js
│   ├── rootReducer.js
│   ├── routes.js
│   └── main.js
├── webpack
│   ├── webpack.config.js
│   ├── webpack.dll.js
│   ├── webpack.plugins.js
│   ├── webpack.rules.js
│   └── webpack.server.js
├── config.js
├── .bablerc
├── .eslintignore
├── .eslintrc.js
├── .gitignore
└── README.md
```
