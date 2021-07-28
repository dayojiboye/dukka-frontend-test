import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// layout
import Layout from "./layouts";

// pages
import { HomePage } from "./pages";
import { EmployeesPage } from "./pages/employees";
import { EmployeePage } from "./pages/employee";
import NotFound from "./pages/notFound";

function App() {
  const { currentEmployees } = useSelector((state) => {
    return {
      currentEmployees: state.employees.employees,
    };
  });

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(currentEmployees)); // for persisting data in browser's local storage
  }, [currentEmployees]);

  return (
    <>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/employees" component={EmployeesPage} />
          <Route path="/employee/:employeeId" component={EmployeePage} />
          {/* for any page that does not exist */}
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
