import React, { useContext, useState } from "react";
import Store from "../context";
import EditCardForm from "./EditCardForm";
import { useNavigate } from "react-router";

const Card = props => {
  const { state, dispatch } = useContext(Store);
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();

  function editCard() {
    navigate("/edit", { state: props.item });
  }

  return (
    <div
      style={{
        margin: "2em",
        border: "solid 1px",
        "border-radius": "3px",
        "box-shadow": "5px 5px 5px #000"
      }}
    >
      {!edit ? (
        <div key={props.item.id}>
          <label
            style={{ "font-size": "10px", display: "inline-block" }}
            htmlFor="label"
          >
            {" "}
            Name:{" "}
          </label>
          <span
            style={{
              "font-size": "20px",
              "padding-left": "1em",
              "font-weight": "600"
            }}
          >
            {props.item.cardName}
          </span>{" "}
          <br /> <br />
          <label style={{ display: "inline-block" }} htmlFor="label">
            {" "}
            Card number:
          </label>
          <span style={{ "font-size": "16px", "padding-left": "1em" }}>
            {props.item.creditNum}
          </span>
          <label
            style={{
              "font-size": "16px",
              "padding-left": "1em",
              position: "relative",
              right: "-30%",
              "font-size": "10px",
              display: "inline-block"
            }}
            htmlFor="label"
          >
            {" "}
            Valid thru:
          </label>
          <span
            style={{
              "font-size": "16px",
              "padding-left": "1em",
              position: "relative",
              right: "-30%",
              "font-size": "15px"
            }}
          >
            {props.item.validthru}
          </span>
          <div style={{ float: "right" }}>
            <button
              className="float-right btn btn-danger btn-sm"
              style={{
                marginLeft: 10,
                "font-size": "16px",
                "margin-bottom": "10px"
              }}
              onClick={() =>
                dispatch({ type: "DELETE_CARD", payload: props.item })
              }
            >
              Delete
            </button>
            <button
              style={{
                marginLeft: 10,
                "font-size": "16px",
                "margin-bottom": "10px"
              }}
              className="float-right btn btn-primary btn-sm"
              onClick={editCard}
            >
              Edit card
            </button>
          </div>
        </div>
      ) : (
        <EditCardForm item={props.item} />
      )}
    </div>
  );
};

export default Card;
