import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoute } from "./routes";
import Navbar from "./components/navBar";
import { Provider, connect } from "react-redux";
import { compose } from "redux";
import store from "./redux/redux-store";

const App = (props) => {
  const route = useRoute(props.isAuth);

  return (
    <>
      <Router>
        <>
          <Navbar />

          <div> {route}</div>
        </>
      </Router>
    </>
  );
};

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

let AppContainer = compose(connect(mapStateToProps, {})(App));

const PadApp = (props) => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};
export default PadApp;
