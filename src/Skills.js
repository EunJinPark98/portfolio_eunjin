import { Col, Row } from "react-bootstrap";

function Skills(){
    return(
        <>
        <h4>Skills</h4>
        <Row>
            <Col>
            <h6>Frontend</h6>
            <p><img className="front-logo3" src="htmlcssjs.jpeg"></img></p>
            <p><img className="front-logo" src="jQuery.png"></img></p>
            <p><img className="front-logo" src="react.png"></img></p>
            <p><img className="front-logo" src="vue.png"></img></p>
            </Col>
            <Col>
            <h6>Backend</h6>
            <p><img className="back-logo" src="Java.png"></img></p>
            <p><img className="back-logo" src="spring.svg"></img></p>
            <p><img className="back-logo" src="springboot.png"></img></p>
            <p><img className="back-logo" src="oracle.png"></img></p>
            <p><img className="back-logo" src="MySQL.png"></img></p>
            </Col>
            <Col>
                <Row>
                    <Col>
                    <h6>Version Control</h6>
                    <p><img className="version-logo" src="git.png"></img></p>
                    <p><img className="version-logo" src="github.png"></img></p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h6>Design</h6>
                    <img className="design-logo" src="figma.png"></img>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h6>Communication</h6>
                    <img className="communication-logo" src="notion.png"></img>
                    </Col>
                </Row>
            </Col>
        </Row>
        </>
    )

}

export default Skills;