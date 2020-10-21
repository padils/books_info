import React, {useState} from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {login, register} from '../redux/thunk/authThunk'

const Modal = ({login, register}) => {
  let [form, setForm] = useState({email: '', password: ''})
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <HeaderAuth />
            </div>
            <div className="modal-body">
              <BodyAuth form={form} setForm={setForm} />
            </div>
            <div className="modal-footer">
              <FooterAuth form={form} login={login} register={register} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const HeaderAuth = () => {
  return (
    <>
      <h5 className="modal-title" id="exampleModal">
        Auth
      </h5>
      <button
        className="btn-close"
        data-dismiss="modal"
        aria-label="close"
      ></button>
    </>
  )
}
const BodyAuth = ({form, setForm}) => {
  return (
    <form className="">
      <div className="row mb-3">
        <label htmlFor="inputEmail" className="col-sm-2 col-form-input">
          email
        </label>
        <div className="col-sm-10">
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="email"
            onChange={(e) => setForm({...form, email: e.target.value})}
            value={form.email}
          />
        </div>

        <label htmlFor="password" className="col-sm-2 col-form-input">
          password
        </label>
        <div className="col-sm-10 mt-2">
          <input
            onChange={(e) => setForm({...form, password: e.target.value})}
            value={form.password}
            className="form-control"
            type="password"
            placeholder="password"
            id="password"
          />
        </div>
      </div>
    </form>
  )
}

const FooterAuth = ({form, register, login}) => {
  return (
    <>
      <div className="">
        <button
          className="btn btn-secondary"
          data-dismiss="modal"
          onClick={() => login(form)}
        >
          sign in
        </button>
      </div>
      <div className="">
        <button
          className="btn btn-secondary"
          data-dismiss="modal"
          onClick={() => register(form)}
        >
          register
        </button>
      </div>
      <div>
        <button
          className="btn btn-secondary"
          data-dismiss="modal"
          aria-label="close"
        >
          close
        </button>
      </div>
    </>
  )
}

export default compose(connect('', {login, register})(Modal))
