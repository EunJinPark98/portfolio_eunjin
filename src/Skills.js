import { Col, Row } from "react-bootstrap";

function Skills(){
    return(
        <>
        <Row className="skill-fr">
            <Col className="skill-box">
                <h1 className="skill-cate">Frontend</h1>
                <p><img className="front-logo3" src="htmlcssjs.jpeg"></img></p>
                <p><img className="front-logo" src="jQuery.png"></img></p>
                <p><img className="front-logo" src="react.png"></img></p>
                <p><img className="front-logo" src="vue.png"></img></p>
            </Col>
            <Col className="skill-box">
                <h1 className="skill-cate">Backend</h1>
                <p><img className="java-logo" src="Java.png"></img></p>
                <p><img className="back-logo" src="spring.svg" style={{marginBottom : '10px'}}></img></p>
                <p><img className="back-logo" src="springboot.png"></img></p>
                <p><img className="back-logo" src="oracle.png"></img></p>
                <p><img className="back-logo" src="MySQL.png"></img></p>
            </Col>
            <Col>
                <Row>
                    <Col className="skill-box" style={{marginTop : '50px'}}>
                        <h1 className="skill-cate">Version Control</h1>
                        <p><img className="version-logo" src="git.png"></img></p>
                        <p><img className="version-logo2" src="github.png"></img></p>
                    </Col>
                </Row>
                <Row>
                    <Col className="skill-box">
                        <h1 className="skill-cate">Design</h1>
                        <img className="design-logo" src="figma.png"></img>
                    </Col>
                </Row>
            </Col>
        </Row>
        </>
    )

}

export default Skills;