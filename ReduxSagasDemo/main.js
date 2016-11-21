import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import Layout from './Layout'
import Counter from './Counter'
import reducer from './reducers'
import rootSaga from './sagas'

//saga
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware) 
)

sagaMiddleware.run(rootSaga)


const action = type => store.dispatch({type})

function render() {
  ReactDOM.render(
    <Layout >
      <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')} />
      
      </Layout>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
