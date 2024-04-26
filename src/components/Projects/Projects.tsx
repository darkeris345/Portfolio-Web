import React, { useState, useEffect } from "react";
import projectsList from "../../components/Projects/projectsList.json";
import { Button, Modal, Row, Col } from "react-bootstrap";
import MovieAppGif from "../../assets/projectsGif/MovieApp.gif";
import TaskListGif from "../../assets/projectsGif/TaskList.gif";
import WinterProjectGif from "../../assets/projectsGif/Winter-project.gif";
import "./Projects.scss";
import AOS from "aos";
import "aos/dist/aos.css";


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

  useEffect(() => {
    AOS.init();
  }, []);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  

  return (
    <div
      id="projects"
      className={`projects m-5`}
      
      
    >
      <h2 className="projectsHeader">My Projects:</h2>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {projectsList.map((project, index) => (
          <Col key={index}>
            <div
              className="nes-container with-title is-centered project"
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-duration="1000"
              data-aos-once="true"
              style={{                
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100%",
                padding: "20px",
                backgroundColor: project.done ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    
              }}
            >
              <div>
                <p className="title">{project.name}</p>
                <p className="description">{project.description}</p>
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
                        : "nes-btn is-primary nes-cursor"
                    }
                    style={{ marginBottom: "10px" }}
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