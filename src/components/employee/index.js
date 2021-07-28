import React from "react";

import EmployeeCard from "../employeeCard";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./styles.scss";

const Employee = () => {
  const { employeeId } = useParams();

  const { currentEmployees } = useSelector((state) => {
    return {
      currentEmployees: state.employees.employees,
    };
  });

  const selectedEmployee = currentEmployees.find((item, index) => {
    return index === employeeId - 1;
  });

  return (
    <div className="employee-page">
      <div className="wrapper">
        <div className="employee-card">
          <div className="employee-card__container">
            <EmployeeCard
              showActionBtns={false}
              nameLink={false}
              image={selectedEmployee.image}
              name={selectedEmployee.fullName}
              position={selectedEmployee.position}
              phone={selectedEmployee.phoneNumber}
              email={selectedEmployee.email}
            />
          </div>
        </div>

        <div className="loan-record">
          <h1>LOAN RECORD</h1>

          <ul className="loan-record__list">
            <li>
              <div className="left">
                <div>
                  <span>
                    <i className="far fa-calendar-alt"></i>
                  </span>
                  <span>FEB</span>
                </div>
              </div>

              <div className="right">
                <div className="borrowed">
                  <span>BORROWED:</span>
                  <span>&#8358;50,000</span>
                </div>
                <div className="receivable">
                  <span>RECEIVABLE:</span>
                  <span>&#8358;100,000</span>
                </div>
              </div>
            </li>

            <li>
              <div className="left">
                <div>
                  <span>
                    <i className="far fa-calendar-alt"></i>
                  </span>
                  <span>JAN</span>
                </div>
              </div>

              <div className="right">
                <div className="borrowed">
                  <span>BORROWED:</span>
                  <span>&#8358;50,000</span>
                </div>
                <div className="receivable">
                  <span>RECEIVABLE:</span>
                  <span>&#8358;100,000</span>
                </div>
              </div>
            </li>

            <div className="divider">
              <span>2019</span>
            </div>

            <li>
              <div className="left">
                <div>
                  <span>
                    <i className="far fa-calendar-alt"></i>
                  </span>
                  <span>DEC</span>
                </div>
              </div>

              <div className="right">
                <div className="borrowed">
                  <span>BORROWED:</span>
                  <span>&#8358;50,000</span>
                </div>
                <div className="receivable">
                  <span>RECEIVABLE:</span>
                  <span>&#8358;100,000</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Employee;
