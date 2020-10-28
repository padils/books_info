import React, {useState} from 'react'
import Toast from 'react-bootstrap/Toast'

const ToastMessage = ({message}) => {
  const [show, setShow] = useState()
  const ediToaster = (show) => {
    localStorage.setItem('toaster')
    setShow(show)
  }

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: 'relative',
        minHeight: '200px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      >
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <strong className="mr-auto">EROR</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </div>
    </div>
  )
}

export default ToastMessage
