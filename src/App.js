import { Switch, Route } from "react-router-dom";

// layout
import Layout from "./layouts";

// pages
import { HomePage } from "./pages";

function App() {
  return (
    <>
      <Switch>
        <Layout>
          <Route exact path="/" component={HomePage} />
        </Layout>
      </Switch>
    </>
  );
}

export default App;
