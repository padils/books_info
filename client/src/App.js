import React, {useEffect} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoute} from './routes'
import Navbar from './components/navBar'
import {Provider, connect} from 'react-redux'
import {compose} from 'redux'
import store from './redux/redux-store'
import {isAuthUser} from './redux/thunk/authThunk'
import ToastMessage from './components/toasts'

const App = ({isAuthUser, isAuth, userId, toast}) => {
  const route = useRoute(isAuth)

  useEffect(() => {
    isAuthUser()
  }, [isAuthUser, userId, toast])
  return (
    <>
      <Router>
        <Navbar />
        {toast && <ToastMessage />}
        <div>{route}</div>
      </Router>
    </>
  )
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
    toast: state.errorServer.error,
  }
}

const AppContainer = compose(connect(mapStateToProps, {isAuthUser})(App))

const PadApp = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}
export default PadApp
