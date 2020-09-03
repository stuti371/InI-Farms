import React from "react";
// reactstrap components

// core components
import WhiteNavbar from "components/Navbars/WhiteNavbar.js";
import FooterGray from "components/Footers/FooterGray.js";
// sections for this page
import SectionHeader from "./sections-sections/SectionHeader.js";
import SectionFeature from "./sections-sections/SectionFeature.js";
import SectionBlog from "./sections-sections/SectionBlog.js";
import SectionTeam from "./sections-sections/SectionTeam.js";
import SectionBrand from "./sections-sections/SectionBrand.js";
import SectionProject from "./sections-sections/SectionProject.js";
import SectionProducts from "./sections-sections/SectionProducts.js";
import SectionLocation from "./sections-sections/SectionLocation.js";
import SectionAgTech from "./sections-sections/SectionAgTech.js";
import SectionBM from "./sections-sections/SectionBM.js";
import SectionD2C from "./sections-sections/SectionD2C.js";
import SectionPricing from "./sections-sections/SectionPricing.js";
import SectionTestimonials from "./sections-sections/SectionTestimonials.js";
import SectionContactUs from "./sections-sections/SectionContactUs.js";
import MultiDropdownNavbar from "components/Navbars/MultiDropdownNavbar.js";

function Sections() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("section-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#/") + 2
    );
    var hrefId = href.substring(href.lastIndexOf("#") + 1);
    if (href.lastIndexOf("#") > 0) {
      document.getElementById(hrefId).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    // this function is used to make the right bullets list
    // (the bellow <nav id="cd-vertical-nav">)
    // active when changeing the section on scroll
    const updateView = () => {
      var contentSections = document.getElementsByClassName("cd-section");
      // var navigationItems = document
      //   .getElementById("cd-vertical-nav")
      //   .getElementsByTagName("a");

      // for (let i = 0; i < contentSections.length; i++) {
      //   var activeSection =
      //     parseInt(navigationItems[i].getAttribute("data-number"), 10) - 1;
      //   if (
      //     contentSections[i].offsetTop - window.innerHeight / 2 <
      //       window.pageYOffset &&
      //     contentSections[i].offsetTop +
      //       contentSections[i].scrollHeight -
      //       window.innerHeight / 2 >
      //       window.pageYOffset
      //   ) {
      //     navigationItems[activeSection].classList.add("is-selected");
      //   } else {
      //     navigationItems[activeSection].classList.remove("is-selected");
      //   }
      // }
    };

    window.addEventListener("scroll", updateView);
    return function cleanup() {
      document.body.classList.remove("section-page");
      window.removeEventListener("scroll", updateView);
    };
  });
  return (
    <>
      {/* <MultiDropdownNavbar /> */}
      <div className="section-space" />
      {/* <SectionHeader /> */}
      {/* <SectionFeature /> */}
      <SectionAgTech/>
      <SectionD2C/>
      <SectionBrand />
      <SectionBM />
      <SectionLocation />
      <SectionProducts />
      {/* <SectionBlog /> */}
      <SectionTeam />
      {/* <SectionProject />
      <SectionPricing />
      <SectionTestimonials />
      <SectionContactUs /> */}
      {/* <nav id="cd-vertical-nav">
        <ul>
          <li>
            <a
              data-number="1"
              href="#headers"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("headers").scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Headers</span>
            </a>
          </li>
          <li>
            <a
              data-number="2"
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("features").scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Features</span>
            </a>
          </li>
          <li>
            <a
              data-number="3"
              href="#blogs"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("blogs").scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Blogs</span>
            </a>
          </li>
          <li>
            <a
              data-number="4"
              href="#teams"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("teams").scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Teams</span>
            </a>
          </li>
          <li>
            <a
              data-number="5"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects").scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Projects</span>
            </a>
          </li>
          <li>
            <a
              data-number="6"
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("pricing").scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Pricing</span>
            </a>
          </li>
          <li>
            <a
              data-number="7"
              href="#testimonials"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("testimonials").scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Testimonials</span>
            </a>
          </li>
          <li>
            <a
              data-number="8"
              href="#contact-us"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact-us").scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Contact Us</span>
            </a>
          </li>
        </ul>
      </nav> */}
      {/* <FooterGray /> */}
    </>
  );
}

export default Sections;
