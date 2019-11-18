import { initState } from "../selectors/index";
import uuid from "uuid"

export default (state = initState, { type, payload }) => {
  switch (type) {
    case "AGE_UP_ASYNC":
      return {
        ...state,
        age: state.age + payload,
        isLoading: false,
        history: [
          ...state.history,
          {
            id: uuid(),
            age: state.age
          }
        ]
      };

    case "AGE_DOWN":
      return {
        ...state,
        age: state.age - payload,
        history: [
          ...state.history,
          {
            id: uuid(),
            age: state.age
          }
        ]
      };

    case "DEL_ITEM":
      return {
        ...state,
        history: state.history.filter(el => el.id !== payload)
      }

    case "SET_SPINNER_TRUE":
      console.log("spinner - true");
      return {
        ...state,
        isLoading: true
      }
      
    default:
      return state;
  }
};
