import React from 'react'
import './App.css'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

import reducer from './ducks/reducers'

import Profile from './views/Profile/Profile'

const persistConfig = {
  key: 'bihandsroot',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer)
const persistor = persistStore(store)

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Profile />
      </PersistGate>
    </Provider>
  )
}

export default App
