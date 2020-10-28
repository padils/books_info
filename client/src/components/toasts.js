import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Toast from 'react-bootstrap/Toast'
import {setError} from '../redux/errorReducer'

const ToastMessage = ({message, setError}) => {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: 'absolute',
        left: '75%',
        zIndex: 1,
      }}
    >
      <Toast
        onClose={() => {
          setError('')
        }}
        show={!!message}
        delay={3000}
        autohide
      >
        <Toast.Header>
          <strong className="mr-auto">ERROR</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </div>
  )
}

let mapStateToProps = (state) => {
  return {
    message: state.errorServer.error,
  }
}

export default compose(connect(mapStateToProps, {setError})(ToastMessage))
