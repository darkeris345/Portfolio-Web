import React, { useState } from "react";
import projectsList from "../../components/Projects/projectsList.json";
import { Button, Modal, Row, Col } from "react-bootstrap";

const Projects: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [gifUrl, setGifUrl] = useState("");

  const openModal = (gif: string) => {
    setGifUrl(gif);
    setShowModal(true);
  };

  return (
    <div id="projects" className="projects m-5">
      <h2 className="mb-5">My Projects:</h2>
      <Row xs={1} md={3} className="g-4">
        {projectsList.map((project, index) => (
          <Col key={index}>
            <div className="nes-container with-title is-centered project" style={{ height: "300px", width: "300px" }}>
              <p className="title">{project.name}</p>
              <p>{project.description}</p>
              <Button
                variant="primary"
                onClick={() => openModal(project.gif)}
              >
                View
              </Button>
              <Button
                variant="secondary"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </Button>
              <Button
                variant="success"
                href={project.deploy}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </Button>
            </div>
          </Col>
        ))}
      </Row>
      <Modal size="lg" show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Project GIF</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={gifUrl} alt="project gif" className="img-fluid" />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Projects;