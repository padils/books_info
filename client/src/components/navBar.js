import React from 'react'
import {useHistory} from 'react-router-dom'
import Search from './search'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {logout} from '../redux/thunk/authThunk'
import Modal from './modalAuth'

const Navbar = ({logout, userId}) => {
  let history = useHistory()

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light  ">
      <div className="container">
        <div className="navbar-brand">
          <a onClick={() => history.push('/')}>Books info</a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mr-auto mb-2">
            <li className="nav-item active">
              <div>
                <a className="nav-link" onClick={() => history.push(`/`)}>
                  Books
                </a>
              </div>
            </li>
            <li className="nav-item">
              <div>
                <a className="nav-link" onClick={() => history.push(`/create`)}>
                  Create
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className="d-flex">
          <Search />

          {userId ? (
            <div>
              <button
                className="btn btn-outline-danger ml-1"
                onClick={() => logout({userId})}
              >
                logout
              </button>
            </div>
          ) : (
            <>
              <button
                className="btn btn-outline-success ml-1"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                login
              </button>
            </>
          )}
          <Modal />
        </div>
      </div>
    </nav>
  )
}

let mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
  }
}

export default compose(connect(mapStateToProps, {logout})(Navbar))
