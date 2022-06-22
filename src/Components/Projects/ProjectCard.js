import React, { useContext } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { ScrollContext } from "../../Context/scroll";
import projectImg from "../../assets/imgs/dummy-project.png";

function ProjectCard({ project }) {
  return (
    <>
      <div className="project-card">
        <div className="content-wrapper">
          <img src={projectImg} alt="" className="project-card-img" />
          <div className="card-content">
            <div className="project-name">{project.projectName}</div>
            <div className="card-bio">{project.projectBio}</div>
          </div>
        </div>
        <div className="languages">
          <div className="languages-profile">
            <div className="languages-name">
              {project.stackList.map((stack, i) => {
                return <span key={i}>{stack}</span>;
              })}
            </div>
          </div>
        </div>
        <div className="livve">
          <a href={project.projectUrl} target="_blank" className="codde">
            <button>view live</button>{" "}
          </a>
          <a href={project.frontend} target="_blank" className="codde">
            <button>Frontend</button>{" "}
          </a>
          <a href={project.backend} target="_blank" className="codde">
            <button>Backend</button>{" "}
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
