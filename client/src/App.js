import React, {useEffect} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoute} from './routes'
import Navbar from './components/navBar'
import {Provider, connect} from 'react-redux'
import {compose} from 'redux'
import store from './redux/redux-store'
import {isAuthUser} from './redux/authThunk'

const App = ({isAuthUser, isAuth, userId}) => {
  const route = useRoute(isAuth)

  useEffect(() => {
    isAuthUser()
  }, [isAuthUser, userId])

  return (
    <>
      <Router>
        <>
          <Navbar />

          <div> {route}</div>
        </>
      </Router>
    </>
  )
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
  }
}

let AppContainer = compose(connect(mapStateToProps, {isAuthUser})(App))

const PadApp = ({isAuthUser, userId}) => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}
export default PadApp
