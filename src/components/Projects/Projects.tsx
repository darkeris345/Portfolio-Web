import React, { useState } from "react";
import projectsList from "../../components/Projects/projectsList.json";
import { Button, Modal, Row, Col } from "react-bootstrap";
import "./Projects.scss";
import MovieAppGif from "../../assets/projectsGif/MovieApp.gif";
import TaskListGif from "../../assets/projectsGif/TaskList.gif";
import WinterProjectGif from "../../assets/projectsGif/Winter-project.gif";

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
      <h2 className="mb-5">My Projects:</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projectsList.map((project, index) => (
          <Col key={index}>
            <div
              className="nes-container with-title is-centered project"
              style={{
                width: "100%",
                minHeight: "300px",
                minWidth: "375px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p className="title">{project.name}</p>
                <p>{project.description}</p>
              </div>
              <div className="d-flex justify-content-center align-items-center mb-3">
                <Button
                  onClick={project.done ? () => openModal(project) : undefined}
                  className={
                    !project.done
                      ? "nes-btn is-disabled"
                      : "nes-btn is-primary me-2"
                  }
                >
                  View
                </Button>
                <Button
                  href={project.github}
                  target="_blank"
                  className={
                    !project.done
                      ? "nes-btn is-disabled"
                      : "nes-btn is-warning me-2"
                  }
                >
                  Source
                </Button>
                <Button
                  variant="success"
                  href={project.deploy}
                  target="_blank"
                  className={
                    !project.done ? "nes-btn is-disabled" : "nes-btn is-success"
                  }
                >
                  Live
                </Button>
              </div>
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
