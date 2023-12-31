import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const initialState = [
  {
    text: "html",
    done: false,
  },
  {
    text: "css",
    done: false,
  },
  {
    text: "JScript",
    done: true,
  },
  {
    text: "REACT",
    done: false,
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REMOVE":
      return state.filter((item, index) => {
        if (action.payload === index) {
          return false;
        }
        return true;
      });
    case "ADD":
      if (action.payload) {
        return (state = [
          ...state,
          {
            text: action.payload,
            done: false,
          },
        ]);
      } else {
        return state;
      }

    default:
      return state;
  }
};

const store = createStore(reducer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
