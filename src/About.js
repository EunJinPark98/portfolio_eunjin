import { Col, Row } from "react-bootstrap";

function About(){
    return (
        <div className="about-fr">
            <Row>
                <Col className="profile">
                    <img className="photo" src="photo.jpg" />
                    <table className="info">
                        <tr>
                            <td>
                                이름
                            </td>
                            <td>
                                박은진
                            </td>
                        </tr>
                        <tr>
                            <td>
                                생년월일
                            </td>
                            <td>
                                19980609
                            </td>
                        </tr>
                        <tr>
                            <td>
                                주소지
                            </td>
                            <td>
                                울산광역시 북구
                            </td>
                        </tr>
                        <tr>
                            <td>
                                학력
                            </td>
                            <td>
                                울산대학교(사회복지학전공)
                            </td>
                        </tr>
                        <tr>
                            <td>
                                연락처
                            </td>
                            <td>
                                010-5512-4219
                            </td>
                        </tr>
                        <tr>
                            <td>
                                이메일
                            </td>
                            <td>
                                obliviscor29@gamil.com
                            </td>
                        </tr>
                    </table>
                </Col>
            </Row>
        </div>

    
    )
}

export default About;