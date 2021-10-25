import './main.scss'

import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {  useDispatch } from 'react-redux'
import { getUserAuth } from './firebase/functions'
import { Home } from './pages/Home'
import { Login } from './pages/Login'

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserAuth())
  }, [])

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/feed" component={Home} />
        </Switch>
      </Router>
    </>
  )
}
