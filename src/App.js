/* eslint-disable */

import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import About from './About';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Skills from './Skills';
import Archive from './Archive';
import Projects from './Projects';

function App() {

  let navigate = useNavigate();

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col xs={3} className='menu-bar'>
            <p>Eunjin's portfolio</p>
            <p>이미지</p>
            <p onClick={()=>{navigate('/about')}}>About me</p>
            <p onClick={()=>{navigate('/skills')}}>Skills</p>
            <p onClick={()=>{navigate('/projects')}}>Projects</p>
            <p onClick={()=>{navigate('/archive')}}>Archive</p>
          </Col>
          <Col className='content'>
            <Row>
              <Col>
              <Routes>
                <Route path="/about" element={<About />} />
              </Routes>
              </Col>
            </Row>
            <Row>
              <Col>
              <Routes>
                <Route path="/skills" element={<Skills />} />
              </Routes>
              </Col>
            </Row>
            <Row>
              <Col>
              <Routes>
                <Route path="/projects" element={<Projects />} />
              </Routes>
              </Col>
            </Row>
            <Row>
              <Col>
              <Routes>
                <Route path="/archive" element={<Archive />} />
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
