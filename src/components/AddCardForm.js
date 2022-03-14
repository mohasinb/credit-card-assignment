import React, { useContext } from "react";
import JSONSchemaForm from "react-jsonschema-form";
import "bootstrap/dist/css/bootstrap.css";
import Store from "../context";

import { v4 as uuid } from "uuid";
import { propsOfNode } from "enzyme/build/Utils";

const postSchema = {
  type: "object",
  properties: {
    creditNum: {
      title: "Enter your credit card number",
      type: "string",
      maxLength: 20
    },
    cardName: {
      title: "Card holder name",
      type: "string"
    },
    validthru: {
      title: "card validity",
      type: "string",
      format: "date",
      value: "20-02-022"
    }
  },
  required: ["creditNum", "cardName", "validthru"]
};

export default function Form({}) {
  const { dispatch } = useContext(Store);

  const onSubmit = event => {
    console.log(event.formData);
    event.formData = {
      ...event.formData,
      id: uuid()
    };
    dispatch({ type: "ADD_CARD", payload: event });
  };
  return (
    <div className="container">
      <div className="row">
        <div style={{ display: "flex" }} className="col-md-12">
          <JSONSchemaForm
            className="col-md-12"
            onSubmit={onSubmit}
            schema={postSchema}
          />
        </div>
      </div>
    </div>
  );
}
