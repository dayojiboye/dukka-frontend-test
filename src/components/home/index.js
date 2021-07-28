import React, { useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import * as actions from "../../store/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./styles.scss";

const Home = () => {
  const [didFocus, setDidFocus] = useState({
    fullName: false,
    phoneNumber: false,
    email: false,
    position: false,
    salary: false,
  });

  const phoneRegExp = /^[0]\d{10}$/; // phone number should match Nigerian phone number format

  const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const history = useHistory();

  const dispatch = useDispatch();

  const handleFocus = (e) => {
    const { name } = e.target;

    setDidFocus({
      ...didFocus,
      [name]: true,
    });
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      position: "",
      salary: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Required"),
      phoneNumber: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .matches(emailRegExp, "Invalid email address")
        .required("Required"),
      position: Yup.string().required("Required"),
      salary: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(
        actions.addEmployee({
          ...values,
          id: Date.now(),
          image:
            "https://images.unsplash.com/photo-1563122870-6b0b48a0af09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        })
      );

      history.push("/employees");
    },
  });

  return (
    <div className="home-page">
      <div className="wrapper">
        <h1>CREATE EMPLOYEE PROFILE</h1>

        <div className="employees-form">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
                onFocus={handleFocus}
              />
              {(!!didFocus.fullName &&
                formik.values.fullName.trim().length > 0 &&
                formik.errors.fullName) ||
              formik.touched.fullName ? (
                <div className="input-error">{formik.errors.fullName}</div>
              ) : null}
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number *</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
                onFocus={handleFocus}
              />
              {(!!didFocus.phoneNumber &&
                formik.values.phoneNumber.trim().length > 0 &&
                formik.errors.phoneNumber) ||
              formik.touched.phoneNumber ? (
                <div className="input-error">{formik.errors.phoneNumber}</div>
              ) : null}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                onFocus={handleFocus}
              />
              {(!!didFocus.email &&
                formik.values.email.trim().length > 0 &&
                formik.errors.email) ||
              formik.touched.email ? (
                <div className="input-error">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="form-group">
              <label htmlFor="position">Position *</label>
              <input
                type="text"
                id="position"
                name="position"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.position}
                onFocus={handleFocus}
              />
              {(!!didFocus.position &&
                formik.values.position.trim().length > 0 &&
                formik.errors.position) ||
              formik.touched.position ? (
                <div className="input-error">{formik.errors.position}</div>
              ) : null}
            </div>

            <div className="form-group">
              <label htmlFor="salary">Salary *</label>
              <input
                type="text"
                id="salary"
                name="salary"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.salary}
                onFocus={handleFocus}
              />
              {(!!didFocus.salary &&
                formik.values.salary.trim().length > 0 &&
                formik.errors.salary) ||
              formik.touched.salary ? (
                <div className="input-error">{formik.errors.salary}</div>
              ) : null}
            </div>

            <div className="form-group mt-4">
              <button type="submit">SAVE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
