export const initState = {
  age: 10,
  history: [],
  isLoading:false
};

export const getAge = (state = initState) => state.age || initState.age
export const getHistory = (state = initState) => state.history || initState.history
export const getIsLoading = (state = initState) => state.isLoading || initState.isLoading
