/* eslint-disable */

import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import About from './About';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Skills from './Skills';
import Archive from './Archive';
import Projects from './Projects';
import Main from './Main';

function App() {

  let navigate = useNavigate();

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col xs={3} className='menu-bar'>
            <h1 className='title mb-2' onClick={()=>{navigate('/portfolio_eunjin')}}>Eunjin's<br/>Portfolio</h1>
            <p className='mb-5'><img className="menu-photo" src="/memoji1.png" alt="미모티콘"></img></p>
            <p className='menu-profile' onClick={()=>{navigate('/about')}}>Profile</p>
            <p className='menu-skills' onClick={()=>{navigate('/skills')}}>Skills</p>
            <p className='menu-projects' onClick={()=>{navigate('/projects')}}>Projects</p>
            <p className='menu-archive' onClick={()=>{navigate('/archive')}}>Archive</p>
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
              <Col style={{padding : '0'}}>
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
