import React from "react";

import {BrowserRouter as Router, Switch} from "react-router-dom";

import {authProtectedRoutes, publicRoutes} from "./routes";

import Authmiddleware from "./routes/route";

import VerticalLayout from "./components/VerticalLayout/";
import NonAuthLayout from "./components/NonAuthLayout";

import "./assets/scss/theme.scss";

const App = () => {
  return (
      <React.Fragment>
        <Router>
          <Switch>
            {publicRoutes.map((route, idx) => (
                <Authmiddleware
                    path={route.path}
                    layout={NonAuthLayout}
                    component={route.component}
                    key={idx}
                    isAuthProtected={false}
                    exact
                />
            ))}

            {authProtectedRoutes.map((route, idx) => (
                <Authmiddleware
                    path={route.path}
                    layout={VerticalLayout}
                    component={route.component}
                    key={idx}
                    isAuthProtected={true}
                    exact
                />
            ))}
          </Switch>
        </Router>
      </React.Fragment>
  );
};

export default App;
