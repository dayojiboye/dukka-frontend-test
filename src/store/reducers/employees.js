import * as actionTypes from "../actions/actionTypes";

const initialState = {
  employees: JSON.parse(localStorage.getItem("employees")) || [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_EMPLOYEE:
      return {
        ...state,
        employees: [action.payload, ...state.employees],
      };
    default:
      return state;
  }
};

export default reducer;
