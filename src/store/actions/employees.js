import * as actionTypes from "./actionTypes";

export const addEmployee = (payload) => {
  return {
    type: actionTypes.ADD_EMPLOYEE,
    payload,
  };
};
