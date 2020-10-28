import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoute} from './routes'
import Navbar from './components/navBar'
import {Provider, connect} from 'react-redux'
import {compose} from 'redux'
import store from './redux/redux-store'
import {isAuthUser} from './redux/thunk/authThunk'
import ToastMessage from './components/toasts'

const App = ({isAuthUser, isAuth, userId}) => {
  const route = useRoute(isAuth)

  useEffect(() => {
    isAuthUser()
  }, [isAuthUser, userId])
  // let i = false
  // let [toast, editToast] = useState(false)
  return (
    <>
      <Router>
        <>
          <Navbar />
          {/* <ToastMessage /> */}

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

const PadApp = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}
export default PadApp
