import React, { useState, Fragment } from "react";
import Fade from "react-reveal/Fade";
import ProjectCard from "./ProjectCard";
import "./project.css";
import { projectsSection } from "../../techfolio";
import { Row } from "react-flexbox-grid";
import Heading from "../common/Heading";
import { isMobile } from "react-device-detect";
function Projects() {
  const projects = projectsSection.projects.map((project, i) => {
    return <ProjectCard project={project} key={i} />;
  });

  return (
    <Fragment>
      <section className="section section5" name="projects">
        <div className="site-container">
          <Fade bottom>
            <div className="project-cards">{projects.slice(0)}</div>
            <Row around="xs">
              <div className="banner-content">
                <div className="banner-btns"></div>
              </div>
            </Row>
          </Fade>
        </div>
      </section>
    </Fragment>
  );
}

export default Projects;
