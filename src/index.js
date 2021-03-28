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
import Index from "views/Index.js";
import Sections from "views/Sections.js";
import AboutUs from "views/examples/AboutUs.js";
import BlogPost from "views/examples/BlogPost.js";
import BlogPosts from "views/examples/BlogPosts.js";
import ContactUs from "views/examples/ContactUs.js";
import LandingPage from "views/examples/LandingPage.js";
import LoginPage from "views/examples/LoginPage.js";
import ProductPage from "views/examples/ProductPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import SearchWithSidebar from "views/examples/SearchWithSidebar.js";
import Settings from "views/examples/Settings.js";
import TwitterRedesign from "views/examples/TwitterRedesign.js";
import SectionD2C from 'views/sections-sections/SectionD2C.js'
import SectionSoulful from 'views/sections-sections/SectionSoulful.js'
import SectionLocation from 'views/sections-sections/SectionLocation.js'
import SectionTeam from 'views/sections-sections/SectionTeam.js'
import SectionMedia from 'views/sections-sections/SectionMedia.js'
import SectionProducts from 'views/sections-sections/SectionProducts.js'
import SectionBrand from 'views/sections-sections/SectionBrand.js'
import SectionBM from 'views/sections-sections/SectionBM.js'
import SectionAgTech from 'views/sections-sections/SectionAgTech.js'
import PrivacyPolicy from 'views/sections-sections/PrivacyPolicy.js'
import WriteMedia from "./blog_thing";
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
      <Route path="/about-us" render={(props) => <AboutUs {...props} />} />
      <Route
        path="/Team"
        render={(props) => <SectionTeam {...props} />}
      />
      <Route path="/blog-post" render={(props) => <BlogPost {...props} />} />
      <Route path="/blog-posts" render={(props) => <BlogPosts {...props} />} />
      <Route path="/contact-us" render={(props) => <ContactUs {...props} />} />
      <Route path="/Products" render={(props) => <SectionProducts {...props} />} />
      <Route path="/Brand" render={(props) => <SectionBrand {...props} />} />
      <Route path="/AboutUs" render={(props) => <SectionBM {...props} />} />
      <Route path="/AgTech" render={(props) => <SectionAgTech {...props} />} />
      <Route path="/Media" render={(props) => <SectionMedia {...props} />} />
      <Route path="/Soulful" render={(props) => <SectionSoulful {...props} />} />
      <Route path="/WriteBlog" render={(props) => <WriteMedia {...props} />} />
      <Route
        path="/homepage"
        render={(props) => <LandingPage {...props} />}
      />
      <Redirect to="/homepage" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
