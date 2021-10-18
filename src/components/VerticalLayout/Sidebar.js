import React from "react";

import SidebarContent from "./SidebarContent";

const Sidebar = () => {
  return (
    <React.Fragment>
      <div className="vertical-menu">
        {/*<div className="navbar-brand-box">*/}
        {/*  <Link to="/" className="logo logo-dark">*/}
        {/*    <span className="logo-sm">*/}
        {/*      <img src={logo} alt="" height="22" />*/}
        {/*    </span>*/}
        {/*    <span className="logo-lg">*/}
        {/*      <img src={logoDark} alt="" height="17" />*/}
        {/*    </span>*/}
        {/*  </Link>*/}

        {/*  <Link to="/" className="logo logo-light">*/}
        {/*    <span className="logo-sm">*/}
        {/*      <img src={logoLightSvg} alt="" height="22" />*/}
        {/*    </span>*/}
        {/*    <span className="logo-lg">*/}
        {/*      <img src={logoLightPng} alt="" height="19" />*/}
        {/*    </span>*/}
        {/*  </Link>*/}
        {/*</div>*/}
        <div data-simplebar className="h-100">
          <SidebarContent />
        </div>
        <div className="sidebar-background"></div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
