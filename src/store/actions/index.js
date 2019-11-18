export const ageUp = (val) => {
  return { type: "AGE_UP", payload: val };
};

export const ageDown = (val) => {
  return { type: "AGE_DOWN", payload: val };
};

export const delItem = (id) => {
  return { type: "DEL_ITEM", payload: id };
};

export const loading = () => {
  return { type: "SET_SPINNER_TRUE" };
};
