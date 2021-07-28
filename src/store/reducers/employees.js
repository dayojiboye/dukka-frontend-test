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
    case actionTypes.DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter((item) => {
          return item.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
