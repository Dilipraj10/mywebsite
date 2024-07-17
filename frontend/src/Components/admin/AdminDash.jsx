import React, { useState } from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ManageGames from "./ManageGames";
import ManageUser from "./ManageUser";
import ManageDownload from "./ManageDownload";
import ManageFeedback from "./ManageFeedback";

export default function AdminDash() {
  const [selectedPage, setSelectedPage] = useState("");
  const navigate = useNavigate(); 


  const renderPage = () => {
    switch (selectedPage) {
      case "managegames":
        return <ManageGames />;
      case "manageUser":
        return <ManageUser />;
      case "managedownload":
        return <ManageDownload />;
      case "managefeedback":
        return <ManageFeedback />;
      default:
        return <ManageGames />;
    }
  };

  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col
            sm={3}
            style={{
              backgroundColor: "#333",
              height: "100vh",
              color: "#fff",
              paddingTop: "20px",
            }}
          >
            <div style={{ paddingLeft: "20px" }}>
              <h1
                style={{
                  fontFamily: "'Lobster', cursive",
                  fontWeight: "bold",
                  fontSize: "2rem",
                  color: "#fff",
                }}
              >
                DANIEL DILIP GAMING
              </h1>
            </div>

            <Nav className="flex-column">
              <Nav.Link
                onClick={() => setSelectedPage("managegame")}
                style={{
                  color: "#fff",
                  fontSize: "18px",
                  marginBottom: "10px",
                  paddingLeft: "20px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                Manage Games
              </Nav.Link>
              <Nav.Link
                onClick={() => setSelectedPage("manageUser")}
                style={{
                  color: "#fff",
                  fontSize: "18px",
                  marginBottom: "10px",
                  paddingLeft: "20px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                Manage Users
              </Nav.Link>
              <Nav.Link
                onClick={() => setSelectedPage("managedownload")}
                style={{
                  color: "#fff",
                  fontSize: "18px",
                  marginBottom: "10px",
                  paddingLeft: "20px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                Dowloads
              </Nav.Link>
              <Nav.Link
                onClick={() => setSelectedPage("managefeedback")}
                style={{
                  color: "#fff",
                  fontSize: "18px",
                  marginBottom: "10px",
                  paddingLeft: "20px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                Feedback
              </Nav.Link>
              <Button variant="outline-light" onClick={handleClick}>
                Logout
              </Button>
            </Nav>
          </Col>
          <Col
            sm={9}
            style={{
              backgroundColor: "#f0f0f0",
              height: "100vh",
              padding: "20px",
            }}
          >
            <h2 style={{ color: "#333", marginBottom: "20px" }}>
              Dashboard Content
            </h2>
            {renderPage()}
          </Col>
        </Row>
      </Container>
    </>
  );
}
