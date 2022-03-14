import React from "react";

const Store = React.createContext({
  creditCardList: [
    // Initial Data
    {
      id: "06385b42-a0ea-11ec-b909-0242ac120002",
      creditNum: "1234345634444444",
      cardName: "Brad Hogg",
      validthru: "2022-11-09",
      cvv: "123"
    },
    {
      id: "1274b202-a0ea-11ec-b909-0242ac120002",
      creditNum: "3333444432222222",
      cardName: "Json holder",
      validthru: "2022-09-9",
      cvv: "458"
    },
    {
      id: "1aa6dc48-a0ea-11ec-b909-0242ac120002",
      creditNum: "2222888888888888",
      cardName: "Micheal Jordan",
      validthru: "2022-10-12",
      cvv: "171"
    }
  ]
});

export default Store;
