import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import Store from "../context";
import styled from "styled-components";
import { FormGroup, Label, Button } from "./Forms";
import DatePicker from "react-datepicker";

const Wrapper = styled.section`
  padding: 4em;
  margin-bottom: 2rem;
  border-radius: 5px;
  display: inline-block;
  background-color: #4646b0;
  border: 1px solid black;
  opacity: 0.6;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: papayawhip;
  margin-top: 1em;

  & div {
    text-align: right;
    margin: 1em;
  }
`;

const Form = styled.form`
  font-size: 1.5em;
  margin: 1em;
  padding: 4em 1em;
  border: 1px solid blue;
  border-radius: 5px;
`;

const EditCardForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { state, dispatch } = useContext(Store);
  const [card, setCard] = useState(location.state);

  const handleChange = e => {
    const { name, value } = e.target;
    setCard(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: "UPDATE_CARD", payload: card });
    navigate("/");
  };

  return (
    <div className="container">
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </Button>
      <h2 style={{ "text-align": "left", margin: "1em" }}>Credit card</h2>
      <Wrapper>
        <Title>
          <label style={{ "font-size": "12px" }}>
            {" "}
            Card number :
            <label style={{ "font-size": "20px" }}>{card.creditNum}</label>
          </label>
        </Title>
        <Title>
          <label style={{ "font-size": "12px" }}>
            {" "}
            Card holder name :{" "}
            <label style={{ "font-size": "20px" }}> {card.cardName}</label>
          </label>
          <div>
            <label style={{ "font-size": "12px" }}>
              {" "}
              CVV: <label style={{ "font-size": "20px" }}>{card.cvv}</label>
            </label>
          </div>
          <div>
            <label style={{ "font-size": "12px" }}>
              valid thru :
              <label style={{ "font-size": "20px" }}>{card.validthru}</label>
            </label>
          </div>
        </Title>
      </Wrapper>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <div className="col-md-6">
            <Label htmlFor="label">Credit card: </Label>
            <input
              name="creditNum"
              value={card.creditNum || ""}
              onChange={handleChange}
            />

            <Label htmlFor="label">Card Holder: </Label>
            <input
              name="cardName"
              value={card.cardName || ""}
              onChange={handleChange}
            />
          </div>
        </FormGroup>

        <FormGroup>
          <div className="col-md-6">
            <Label htmlFor="label">Card validity: </Label>
            <input
              name="validthru"
              value={card.validthru || ""}
              onChange={handleChange}
            />

            <Label htmlFor="label">CVV: </Label>
            <input
              maxlength="3"
              name="cvv"
              value={card.cvv || ""}
              onChange={handleChange}
            />
          </div>
        </FormGroup>

        <div style={{ "text-align": "center" }}>
          <FormGroup>
            <input
              style={{
                "font-size": "1em",
                "margin-top": "1em",
                padding: "0.25em 1em",
                border: "2px solid blue",
                "border-radius": "10px",
                align: "center"
              }}
              type="submit"
            />
          </FormGroup>
        </div>
      </Form>
    </div>
  );
};

export default EditCardForm;
