import * as types from "./actionTypes";

const setPizza = (value) => ({
  type: types.SET_PIZZA,
  value,
});

const setPeople = (value) => ({
  type: types.SET_PEOPLE,
  value,
});

const setPlates = () => ({
  type: types.SET_PLATES,
});

export { setPizza, setPeople, setPlates };
