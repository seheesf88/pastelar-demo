import { Routes, Route } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container className="mx-0">
          <Navbar.Brand href="/">Pastelar demo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About.</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
