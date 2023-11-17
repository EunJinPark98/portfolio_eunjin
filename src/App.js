/* eslint-disable */

import { Col, Container, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import './App.css';
import About from './About';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Skills from './Skills';
import Archive from './Archive';
import Projects from './Projects';
import Main from './Main';
import { useState } from 'react';

function App() {

  let navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col className='menu-bar-mo'>
            <Navbar expand="lg" className="bg-body-tertiary" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
              <Container>
                <Navbar.Brand className='title' onClick={() => { navigate('/portfolio_eunjin') }}>Eunjin's Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link onClick={() => { navigate('/portfolio_eunjin/about'); setExpanded(false) }}>Profile</Nav.Link>
                    <Nav.Link onClick={() => { navigate('/portfolio_eunjin/skills'); setExpanded(false) }}>Skills</Nav.Link>
                    <Nav.Link onClick={() => { navigate('/portfolio_eunjin/projects'); setExpanded(false) }}>Projects</Nav.Link>
                    <Nav.Link onClick={() => { navigate('/portfolio_eunjin/archive'); setExpanded(false) }}>Archive</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
        <Row>
          <Col xs={3} className='menu-bar'>
            <h1 className='title mb-2' onClick={() => { navigate('/portfolio_eunjin') }}>Eunjin's<br />Portfolio</h1>
            <p className='mb-5'><img className="menu-photo" src="https://eunjinpark98.github.io/portfolio_eunjin/memoji1.png" alt='은진미모티콘'></img></p>
            <p className='menu-profile' onClick={() => { navigate('/portfolio_eunjin/about') }}>Profile</p>
            <p className='menu-skills' onClick={() => { navigate('/portfolio_eunjin/skills') }}>Skills</p>
            <p className='menu-projects' onClick={() => { navigate('/portfolio_eunjin/projects') }}>Projects</p>
            <p className='menu-archive' onClick={() => { navigate('/portfolio_eunjin/archive') }}>Archive</p>
          </Col>
          <Col>
            <Row>
              <Col>
                <Routes>
                  <Route path="/portfolio_eunjin" element={<Main />} />
                </Routes>
              </Col>
            </Row>
            <Row>
              <Col style={{ padding: '0' }}>
                <Routes>
                  <Route path="/portfolio_eunjin/about" element={<About />} />
                </Routes>
              </Col>
            </Row>
            <Row>
              <Col>
                <Routes>
                  <Route path="/portfolio_eunjin/skills" element={<Skills />} />
                </Routes>
              </Col>
            </Row>
            <Row>
              <Col>
                <Routes>
                  <Route path="/portfolio_eunjin/projects" element={<Projects />} />
                </Routes>
              </Col>
            </Row>
            <Row>
              <Col>
                <Routes>
                  <Route path="/portfolio_eunjin/archive" element={<Archive />} />
                </Routes>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
