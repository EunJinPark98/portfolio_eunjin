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
            <p className='mb-5'><img className="menu-photo" src="https://eunjinpark98.github.io/portfolio_eunjin/memoji1.png"></img></p>
            <p className='menu-profile' onClick={()=>{navigate('/portfolio_eunjin/about')}}>Profile</p>
            <p className='menu-skills' onClick={()=>{navigate('/portfolio_eunjin/skills')}}>Skills</p>
            <p className='menu-projects' onClick={()=>{navigate('/portfolio_eunjin/projects')}}>Projects</p>
            <p className='menu-archive' onClick={()=>{navigate('/portfolio_eunjin/archive')}}>Archive</p>
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
