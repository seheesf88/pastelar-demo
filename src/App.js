import { Routes, Route, Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container className="mx-0">
          <Navbar.Brand>Pastelar demo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" style={{ textDecoration: 'none', color: '#919191' }}>
                Dashboard.
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" style={{ textDecoration: 'none', color: '#919191' }}>
                About.
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
