import React from "react";
import ReactDOM from "react-dom";
//====================================================
import App from "./App";
//====================================================
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./Redux/reducers";
//====================================================

const store = createStore(reducers, compose(applyMiddleware()) + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
