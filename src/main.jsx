import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './app/store.js'
import { Provider } from 'react-redux'
import AddTodo from './components/AddTodo.jsx'
import Todos from './components/Todos.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AddTodo/>
    <Todos/>
  </Provider>,
)
