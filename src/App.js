import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// layout
import Layout from "./layouts";

// pages
import { HomePage } from "./pages";
import { EmployeesPage } from "./pages/employees";

function App() {
  const { currentEmployees } = useSelector((state) => {
    return {
      currentEmployees: state.employees.employees,
    };
  });

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(currentEmployees));
  }, [currentEmployees]);

  return (
    <>
      <Switch>
        <Layout>
          <Route exact path="/" component={HomePage} />
          <Route path="/employees" component={EmployeesPage} />
        </Layout>
      </Switch>
    </>
  );
}

export default App;
