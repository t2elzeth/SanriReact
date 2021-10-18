import React, {useEffect} from "react";

import {BrowserRouter as Router, Switch} from "react-router-dom";

import {authProtectedRoutes, publicRoutes} from "./routes";

import Authmiddleware from "./routes/route";

import VerticalLayout from "./components/VerticalLayout/";
import NonAuthLayout from "./components/NonAuthLayout";

import "./assets/scss/theme.scss";

function changeBodyAttribute(attribute, value) {
  if (document.body) document.body.setAttribute(attribute, value);
  return true;
}

function manageBodyClass(cssClass, action = "toggle") {
  switch (action) {
    case "add":
      if (document.body) document.body.classList.add(cssClass);
      break;
    case "remove":
      if (document.body) document.body.classList.remove(cssClass);
      break;
    default:
      if (document.body) document.body.classList.toggle(cssClass);
      break;
  }

  return true;
}

const App = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  useEffect(() => {
    changeBodyAttribute("data-sidebar", "dark");
    changeBodyAttribute("data-topbar", "dark");
    changeBodyAttribute("data-layout-size", "fluid");
    changeBodyAttribute("data-layout-scrollable", true);
    changeBodyAttribute("data-sidebar-size", "");
    manageBodyClass("sidebar-enable", "remove");

    if (!isMobile) manageBodyClass("vertical-collpsed", "remove");
  }, []);

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
