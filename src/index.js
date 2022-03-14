import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";

import Store from "./context";
import reducer from "./reducer";

import { usePersistedContext, usePersistedReducer } from "./usePersist";

import CreditCardList from "./components/CreditCardList";
import EditCardForm from "./components/EditCardForm";

function App() {
  const globalStore = usePersistedContext(useContext(Store), "state");

  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    "state"
  );

  return (
    <Store.Provider value={{ state, dispatch }}>
      {" "}
      <Routes>
        <Route path="/" element={<CreditCardList />}></Route>
        <Route path="/edit" element={<EditCardForm />}></Route>
      </Routes>
    </Store.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
