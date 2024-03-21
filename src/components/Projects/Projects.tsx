import React, { useState } from "react";
import projectsList from "../../components/Projects/projectsList.json";
import { Button, Modal, Row, Col } from "react-bootstrap";
import MovieAppGif from "../../assets/projectsGif/MovieApp.gif";
import TaskListGif from "../../assets/projectsGif/TaskList.gif";
import WinterProjectGif from "../../assets/projectsGif/Winter-project.gif";
import "./Projects.scss";

type Project = {
  name: string;
  description: string;
  github: string;
  deploy: string;
  done: boolean;
};

const Projects: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <div id="projects" className="projects m-5">
      <h2 className="projectsHeader">My Projects:</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projectsList.map((project, index) => (
          <Col key={index}>
            <div
              className="nes-container with-title is-centered project"
              style={{
                minHeight: "320px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p className="title">{project.name}</p>
                <p>{project.description}</p>
              </div>
              <Row className="mb-3">
                <Col>
                  <Button
                    onClick={
                      project.done ? () => openModal(project) : undefined
                    }
                    className={
                      !project.done
                        ? "nes-btn is-disabled"
                        : "nes-btn is-primary"
                    }
                    
                  >
                    View
                  </Button>
                </Col>
                <Col>
                  <Button
                    href={project.github}
                    target="_blank"
                    className={
                      !project.done
                        ? "nes-btn is-disabled small"
                        : "nes-btn is-warning small"
                    }
                    
                  >
                    Code
                  </Button>
                </Col>
                <Col>
                  <Button
                    href={project.deploy}
                    target="_blank"
                    className={
                      !project.done
                        ? "nes-btn is-disabled"
                        : "nes-btn is-success"
                    }
                  >
                    Live
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        ))}
      </Row>
      <Modal size="lg" show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Project GIF</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProject && (
            <img
              src={
                selectedProject.name === "Movie App"
                  ? MovieAppGif
                  : selectedProject.name === "Task List"
                  ? TaskListGif
                  : selectedProject.name === "Pay Api"
                  ? WinterProjectGif
                  : ""
              }
              alt="project gif"
              className="img-fluid"
            />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Projects;
