import { Col, Row } from "react-bootstrap";

function About(){
    return (
        <div className="about-fr">
            <Row>
                <Col>
                    <Row className="info">
                        <Col>
                            <div className="photo-fr">
                                <div className="flip">
                                    <img className="photo2" src="https://eunjinpark98.github.io/portfolio_eunjin/photo2.png" />
                                    <img className="photo" src="https://eunjinpark98.github.io/portfolio_eunjin/photo.jpg" />
                                </div>
                            </div>
                        </Col>
                        <Col className="gray">
                            <p>이름</p>
                            <p>생년월일</p>
                            <p>주소지</p>
                            <p>학력</p>
                            <p>연락처</p>
                            <p>이메일</p>
                        </Col>
                        <Col>
                            <p>박은진</p>
                            <p>980609</p>
                            <p>울산광역시 북구</p>
                            <p>울산대학교(사회복지학전공)</p>
                            <p>010-5512-4219</p>
                            <p>obliviscor29@gamil.com</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>

    
    )
}

export default About;