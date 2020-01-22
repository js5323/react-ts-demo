import React from "react";
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import routes from "../router/routes";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        {routes.map(item => (
          <Route
            path={item.path}
            key={item.path}
            component={item.component}
          ></Route>
        ))}
      </Switch>
    </Router>
  );
};

export default App;
