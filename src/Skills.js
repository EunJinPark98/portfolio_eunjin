import { Col, Row } from "react-bootstrap";

function Skills(){
    return(
        <>
        <Row className="skill-fr">
            <Col className="skill-box font-box">
                <h1 className="skill-cate">Frontend</h1>
                <p><img className="front-logo3" src="https://eunjinpark98.github.io/portfolio_eunjin/htmlcssjs.jpeg"></img></p>
                <p><img className="front-logo" src="https://eunjinpark98.github.io/portfolio_eunjin/jQuery.png"></img></p>
                <p><img className="front-logo" src="https://eunjinpark98.github.io/portfolio_eunjin/react.png"></img></p>
                <p><img className="front-logo" src="https://eunjinpark98.github.io/portfolio_eunjin/vue.png"></img></p>
            </Col>
            <Col className="skill-box back-box">
                <h1 className="skill-cate">Backend</h1>
                <p><img className="java-logo" src="https://eunjinpark98.github.io/portfolio_eunjin/Java.png"></img></p>
                <p><img className="back-logo" src="https://eunjinpark98.github.io/portfolio_eunjin/spring.svg" style={{marginBottom : '10px'}}></img></p>
                <p><img className="back-logo" src="https://eunjinpark98.github.io/portfolio_eunjin/springboot.png"></img></p>
                <p><img className="back-logo" src="https://eunjinpark98.github.io/portfolio_eunjin/oracle.png"></img></p>
                <p><img className="back-logo" src="https://eunjinpark98.github.io/portfolio_eunjin/MySQL.png"></img></p>
            </Col>
            <Col>
                <Row>
                    <Col className="skill-box version-box" style={{marginTop : '50px'}}>
                        <h1 className="skill-cate">Version Control</h1>
                        <p><img className="version-logo" src="https://eunjinpark98.github.io/portfolio_eunjin/git.png"></img></p>
                        <p><img className="version-logo2" src="https://eunjinpark98.github.io/portfolio_eunjin/github.png"></img></p>
                    </Col>
                </Row>
                <Row>
                    <Col className="skill-box design-box">
                        <h1 className="skill-cate">Design</h1>
                        <img className="design-logo" src="https://eunjinpark98.github.io/portfolio_eunjin/figma.png"></img>
                    </Col>
                </Row>
            </Col>
        </Row>
        </>
    )

}

export default Skills;