import * as actionTypes from "./actionTypes";

export const addEmployee = (payload) => {
  return {
    type: actionTypes.ADD_EMPLOYEE,
    payload,
  };
};

export const deleteEmployee = (payload) => {
  return {
    type: actionTypes.DELETE_EMPLOYEE,
    payload,
  };
};
