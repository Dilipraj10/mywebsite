import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Contact Us</h5>
            <p>Email: danieldilipgamin@gmail.com</p>
            <p>Phone: +1234567890</p>
            <p>Address: 123 Street, City, Country</p>
          </Col>
          < Col md={6}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </Col>
        </Row>
        <hr className="mt-2" />
        <Row>
          <Col className="text-center">
            <p>&copy; 2024 Daniel Dilip Gaming. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
