import { Col, Row } from "react-bootstrap";

function About(){
    return (
        <>
        <Row>
            <Col>
            About me
            </Col>
        </Row>
        <Row>
            <Col>
                <img className="photo" src="photo.jpg"></img>
            </Col>
        </Row>
        <Row>
            <Col>
            안녕하세요 빠르게 성장하는 개발자 박은진입니다.
            </Col>
        </Row>
        <Row>
            <Col>이름</Col>
            <Col>박은진</Col>
        </Row>
        <Row>
            <Col>생년월일</Col>
            <Col>980609</Col>
        </Row>
        <Row>
            <Col>주소지</Col>
            <Col>울산광역시 북구</Col>
        </Row>
        <Row>
            <Col>학력</Col>
            <Col>울산대학교(사회복지학전공)</Col>
        </Row>
        <Row>
            <Col>연락처</Col>
            <Col>010-5512-4219</Col>
        </Row>
        <Row>
            <Col>이메일</Col>
            <Col>obliviscor29@gamil.com</Col>
        </Row>
        </>
    )
}

export default About;