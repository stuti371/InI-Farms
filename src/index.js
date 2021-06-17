/*!

=========================================================
* Paper Kit PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-pro-react
* Copyright 2020 Creative Tim (http://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
// pages
import Sections from "views/Sections.js";
import LandingPage from "./LandingPage.js";
import SectionD2C from 'views/sections-sections/SectionD2C.js'
import SectionSoulful from 'views/sections-sections/SectionSoulful.js'
import SectionLocation from 'views/sections-sections/SectionLocation.js'
import SectionTeam from 'views/sections-sections/SectionTeam.js'
import SectionMedia from 'views/sections-sections/SectionMedia.js'
import SectionProducts from 'views/sections-sections/SectionProducts.js'
import SectionBrand from 'views/sections-sections/SectionBrand.js'
import SectionBM from 'views/sections-sections/SectionBM.js'
import SectionAgTech from 'views/sections-sections/SectionAgTech.js'
import WriteMedia from "./CMS/blog_thing";
import CmsLogin from "./CMS/CmsLogin"
// others

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route path="/D2C" render={(props) => <SectionD2C {...props} />} />
      <Route
        path="/Location"
        render={(props) => <SectionLocation {...props} />}
      />
      <Route path="/sections" render={(props) => <Sections {...props} />} />
      <Route
        path="/homepage"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/Team"
        render={(props) => <SectionTeam {...props} />}
      />
      <Route path="/Products" render={(props) => <SectionProducts {...props} />} />
      <Route path="/Brand" render={(props) => <SectionBrand {...props} />} />
      <Route path="/AboutUs" render={(props) => <SectionBM {...props} />} />
      <Route path="/AgTech" render={(props) => <SectionAgTech {...props} />} />
      <Route path="/Media" render={(props) => <SectionMedia {...props} />} />
      <Route path="/Soulful" render={(props) => <SectionSoulful {...props} />} />
      <Route path="/CMS" render={(props) => <CmsLogin {...props} />} />
      <Route
        path="/homepage"
        render={(props) => <LandingPage {...props} />}
      />
      <Redirect to="/homepage" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
