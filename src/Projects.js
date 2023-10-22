import { Col, Row } from "react-bootstrap";

function Projects(){
    return(
        <div className="project-fr">
            <Row className="project-box">
                <div className="project-cate">Front-end</div>
                <Col xs={7}>
                    <h5>웹 사이트 프론트엔드 개발</h5>
                    <p>젝시믹스 컨텐츠와 현대백화점몰 디자인을 결합해서 만든 웹 사이트</p>
                    <div className="badge">
                        <img src="badge_html.svg" />
                        <img src="badge_css.svg" />
                        <img src="badge_js.svg" />
                        <img src="badge_jquery.svg" />
                        <img src="badge_figma.svg" />
                    </div>
                    <p>작업기간 2023.06.19~2023.07.03 2주</p>
                    <p>내용</p>
                </Col>
                <Col>
                    <div className="project-img">
                        <img className="xexymix" src="xexymix.png" />
                    </div>
                </Col>
            </Row>
        </div>
    )

}

export default Projects;