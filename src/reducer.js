export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_CARD":
      if (!action.payload) {
        return state;
      }
      return {
        creditCardList: [...state.creditCardList, action.payload.formData]
      };
    case "UPDATE_CARD":
      state.creditCardList = state.creditCardList.filter(
        t => t.id !== action.payload.id
      );
      return {
        creditCardList: [...state.creditCardList, action.payload]
      };
    case "DELETE_CARD":
      return {
        ...state,
        creditCardList: state.creditCardList.filter(t => t !== action.payload)
      };
    case "SHOW_CARD":
      return {
        ...state,
        showCard: action.payload
      };
    default:
      return state;
  }
}
