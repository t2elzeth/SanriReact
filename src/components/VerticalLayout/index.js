import PropTypes from "prop-types";
import React, {useEffect} from "react";

import {withRouter} from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = props => {
  const isPreloader = false;

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  useEffect(() => {
    if (isPreloader === true) {
      document.getElementById("preloader").style.display = "block";
      document.getElementById("status").style.display = "block";

      setTimeout(function () {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("status").style.display = "none";
      }, 2500);
    } else {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("status").style.display = "none";
    }
  }, [isPreloader]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <React.Fragment>
        <div id="preloader">
          <div id="status">
            <div className="spinner-chase">
              <div className="chase-dot"/>
              <div className="chase-dot"/>
              <div className="chase-dot"/>
              <div className="chase-dot"/>
              <div className="chase-dot"/>
              <div className="chase-dot"/>
            </div>
          </div>
        </div>

        <div id="layout-wrapper">
          <Header/>
          <Sidebar
              isMobile={isMobile}
          />
          <div className="main-content">{props.children}</div>
          <Footer/>
        </div>
      </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object,
};

export default withRouter(Layout);
