import { ageUp, ageDown, delItem } from "../actions";

import { getAge, getHistory, getIsLoading } from "../selectors"

export const mapStateToProps = state => {
  return {
    age: getAge(state),
    history: getHistory(state),
    isLoading: getIsLoading(state)
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    incAge: () => dispatch(ageUp(10)),
    decAge: () => dispatch(ageDown(10)),
    delItem: (id) => dispatch(delItem(id))
    // incAgeB: () => dispatch({ type: "AGE_UP_B", payload: 20 }),
    // decAgeB: () => dispatch({ type: "AGE_DOWN_B", payload: 20 }),
    // delItemB: (id) => dispatch({ type: "DEL_ITEM_B", payload: id})
  };
};
