// eslint-disable-next-line
import { Col, Row } from "react-bootstrap";


function Skills(){
    return(
        <>
        {/* 모바일 */}
        <Row className="skill-mo">
            <Col>
                <Row>
                    <Col className="skill-box font-box mb-5">
                        <h1 className="skill-cate">Frontend</h1>
                        <p><img className="front-logo3" src="https://eunjinpark98.github.io/portfolio_eunjin/htmlcssjs.jpeg"></img></p>
                        <img className="front-logo" src="https://eunjinpark98.github.io/portfolio_eunjin/jQuery.png"></img>
                        <img className="front-logo" src="https://eunjinpark98.github.io/portfolio_eunjin/react.png"></img>
                        <img className="front-logo" src="https://eunjinpark98.github.io/portfolio_eunjin/vue.png"></img>
                    </Col>
                </Row>
                <Row>
                    <Col className="skill-box back-box mb-5">
                        <h1 className="skill-cate">Backend</h1>
                        <p><img className="java-logo" src="https://eunjinpark98.github.io/portfolio_eunjin/Java.png"></img>
                        <img className="java-logo" src="https://eunjinpark98.github.io/portfolio_eunjin/node-logo.png"></img></p>
                        <img className="back-logo" src="https://eunjinpark98.github.io/portfolio_eunjin/springboot.png"></img> <br />
                        <img className="back-logo" src="https://eunjinpark98.github.io/portfolio_eunjin/oracle.png"></img>
                        <img className="back-logo" src="https://eunjinpark98.github.io/portfolio_eunjin/MySQL.png"></img>
                    </Col>    
                </Row>
                <Row>
                    <Col className="skill-box version-box mb-5">
                        <h1 className="skill-cate">Version Control</h1>
                        <img className="version-logo" src="https://eunjinpark98.github.io/portfolio_eunjin/git.png"></img>
                        <img className="version-logo2" src="https://eunjinpark98.github.io/portfolio_eunjin/github.png"></img>
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



        {/* pc */}
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
                <p><img className="java-logo" src="https://eunjinpark98.github.io/portfolio_eunjin/node-logo.png"></img></p>
                <p><img className="back-logo" src="https://eunjinpark98.github.io/portfolio_eunjin/springboot.png"></img></p>
                <p><img className="back-logo" src="https://eunjinpark98.github.io/portfolio_eunjin/oracle.png"></img></p>
                <p><img className="back-logo" src="https://eunjinpark98.github.io/portfolio_eunjin/MySQL.png"></img></p>
            </Col>
            <Col>
                <Row>
                    <Col className="skill-box version-box" style={{marginTop : '50px'}}>
                        <h1 className="skill-cate mb-5">Version Control</h1>
                        <p><img className="version-logo mb-5" src="https://eunjinpark98.github.io/portfolio_eunjin/git.png"></img></p>
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