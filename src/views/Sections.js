import React from "react";
// reactstrap components

// sections for this page
import SectionTeam from "./sections-sections/SectionTeam.js";
import SectionBrand from "./sections-sections/SectionBrand.js";
import SectionProducts from "./sections-sections/SectionProducts.js";
import SectionLocation from "./sections-sections/SectionLocation.js";
import SectionAgTech from "./sections-sections/SectionAgTech.js";
import SectionBM from "./sections-sections/SectionBM.js";
import SectionD2C from "./sections-sections/SectionD2C.js";


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
      <div className="section-space" />
      <SectionAgTech/>
      <SectionD2C/>
      <SectionBrand />
      <SectionBM />
      <SectionLocation />
      <SectionProducts />
      <SectionTeam />
    </>
  );
}

export default Sections;
