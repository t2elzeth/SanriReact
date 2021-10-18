import React from "react";
import { Redirect } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const MyRedirect = () => <Redirect to="/dashboard" />;

const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard },

  { path: "/", exact: true, component: MyRedirect},
];

const publicRoutes = [
];

export { publicRoutes, authProtectedRoutes };
