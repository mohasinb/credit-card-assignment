import React, { useContext } from "react";
import Store from "../context";
import Card from "./Card";
import AddCardForm from "./AddCardForm";
import { Button } from "./Forms";

export default function CreditCardList() {
  const { state, dispatch } = useContext(Store);

  return (
    <div className="row">
      <div className="container">
        <div
          style={{
            "font-size": "25px",
            "text-align": "center"
          }}
        >
          List of Credit Cards
        </div>
        {!state.showCard ? (
          <Button
            className="float-right btn btn-danger btn-sm"
            style={{ position: "relative" }}
            onClick={() => dispatch({ type: "SHOW_CARD", payload: true })}
          >
            Add card
          </Button>
        ) : (
          <Button
            onClick={() => dispatch({ type: "SHOW_CARD", payload: false })}
          >
            Close form
          </Button>
        )}

        {state.showCard ? <AddCardForm /> : null}
        <div style={{ margin: "1em" }} className="row">
          {state.creditCardList.map(t => (
            <Card item={t} />
          ))}
        </div>
      </div>
    </div>
  );
}
