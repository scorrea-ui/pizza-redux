import * as types from "./actionTypes";

const initialState = {
  people: 0,
  plates: 0,
  pizza: 0,
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PIZZA:
      return {
        ...state,
        pizza: action.value,
      };
    case types.SET_PEOPLE:
      return {
        ...state,
        people: action.value,
      };
    case types.SET_PLATES:
      return {
        ...state,
        plates: (state.people * state.pizza) / 8,
      };
    default:
      return state;
  }
};

export default pizzaReducer;
