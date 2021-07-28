import React, { useState } from "react";

import EmployeeCard from "./employeeCard";
import Modal from "../ui/modal";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import "./styles.scss";

const Employees = () => {
  const dispatch = useDispatch();

  const [openDialog, setOpenDialog] = useState(false);

  const { currentEmployees } = useSelector((state) => {
    return {
      currentEmployees: state.employees.employees,
    };
  });

  const deleteEmployeeHandler = (id) => {
    dispatch(actions.deleteEmployee(id));
  };

  return (
    <div className="employees-page">
      <div className="wrapper">
        <h1>EMPLOYEES</h1>

        <div className="employees-list">
          <ul>
            {currentEmployees.map((employee) => {
              return (
                <EmployeeCard
                  key={employee.id}
                  image={employee.image}
                  name={employee.fullName}
                  position={employee.position}
                  phone={employee.phoneNumber}
                  email={employee.email}
                  deleteHandler={() => deleteEmployeeHandler(employee.id)}
                  editHandler={() => {
                    setOpenDialog(true);

                    document.documentElement.classList.add("_fixed");
                    document.body.classList.add("_fixed");
                  }}
                />
              );
            })}
          </ul>

          <Modal
            open={openDialog}
            click={() => {
              setOpenDialog(false);

              document.documentElement.classList.remove("_fixed");
              document.body.classList.remove("_fixed");
            }}
          >
            <div className="err-icon">
              <i className="fas fa-exclamation-circle"></i>
            </div>

            <div>Sorry, this feature is not available at the moment!</div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Employees;
