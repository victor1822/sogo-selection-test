import React from 'react'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from './ducks/reducers'

import Profile from './views/Profile/Profile'

const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <Profile />
    </Provider>
  )
}

export default App
