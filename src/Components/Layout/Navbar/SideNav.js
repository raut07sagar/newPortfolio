import React, { useContext } from "react";
import { ScrollContext } from "../../../Context/scroll";
import { Link as ScrollTo } from "react-scroll";
function SideNav() {
  const { current } = useContext(ScrollContext);
  console.log(current);
  return (
    <nav className="nav__wrapper" id="navbar-example">
      <ul className="nav">
        <li role="presentation" className={current === "home" ? "active" : ""}>
          <ScrollTo to="home" spy={true} smooth={true} duration={1000}>
            <span className="nav__counter"> Home</span>
            <h3 className="nav__title nav__title--stroke nav__title--shadow"></h3>
          </ScrollTo>
        </li>

        <li role="presentation" className={current === "about" ? "active" : ""}>
          <ScrollTo to="about" spy={true} smooth={true} duration={1000}>
            <span className="nav__counter"> About</span>
            <h3 className="nav__title nav__title--stroke nav__title--shadow"></h3>
          </ScrollTo>
        </li>

        <li
          role="presentation"
          className={current === "skills" ? "active" : ""}
        >
          <ScrollTo to="skills" spy={true} smooth={true} duration={1000}>
            <span className="nav__counter">Skills</span>
            <h3 className="nav__title nav__title--stroke nav__title--shadow"></h3>
          </ScrollTo>
        </li>
        {/* <li
          role="presentation"
          className={current === "github" ? "active" : ""}
        >
          <ScrollTo to="openSource" spy={true} smooth={true} duration={1000}>
            <span className="nav__counter">04</span>
            <h3 className="nav__title nav__title--stroke nav__title--shadow">
              Open Source
            </h3>
          </ScrollTo>
        </li> */}
        <li
          role="presentation"
          className={current === "projects" ? "active" : ""}
        >
          <ScrollTo to="projects" spy={true} smooth={true} duration={1000}>
            <span className="nav__counter">Projects</span>
            <h3 className="nav__title nav__title--stroke nav__title--shadow"></h3>
          </ScrollTo>
        </li>

        <li
          role="presentation"
          className={current === "experiences" ? "active" : ""}
        >
          <ScrollTo to="experiences" spy={true} smooth={true} duration={1000}>
            <span className="nav__counter">Certifications</span>
            <h3 className="nav__title nav__title--stroke nav__title--shadow"></h3>
          </ScrollTo>
        </li>
        <li
          role="presentation"
          className={current === "contact" ? "active" : ""}
        >
          <ScrollTo to="contact" spy={true} smooth={true} duration={1000}>
            <span className="nav__counter">Contact</span>
            <h3 className="nav__title nav__title--stroke nav__title--shadow"></h3>
          </ScrollTo>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;
