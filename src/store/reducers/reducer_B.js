import { initState } from "../selectors/index";
import uuid from "uuid";

export default (state = initState, { type, payload }) => {
  switch (type) {
    case "AGE_UP_B":
      return {
        ...state,
        ageB: state.ageB + payload,
        historyB: [
          ...state.historyB,
          {
            id: uuid(),
            age: state.ageB
          }
        ]
      };

    case "AGE_DOWN_B":
      return {
        ...state,
        ageB: state.ageB - payload,
        historyB: [
          ...state.historyB,
          {
            id: uuid(),
            age: state.ageB
          }
        ]
      };

    case "DEL_ITEM_B":
      console.log(payload);
      return {
        ...state,
        historyB: state.historyB.filter((el) => el.id !== payload)
      };

    default:
      return state;
  }
};
