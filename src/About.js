import { Col, Row } from "react-bootstrap";

function About(){
    return (
        <div className="about-fr">
            <div className="profile-photo mb-4">
                <div className="photo-fr">
                    <div className="flip">
                        <img className="photo2" src="https://eunjinpark98.github.io/portfolio_eunjin/photo2.png" />
                        <img className="photo" src="https://eunjinpark98.github.io/portfolio_eunjin/photo.jpg" />
                    </div>
                </div>
            </div>
            <div className="profile-info">
                <table>
                    <thead>
                        <tr>
                            <th>이름</th>
                            <th>생년월일</th>
                            <th>주소지</th>
                            <th>학력</th>
                            <th>연락처</th>
                            <th>이메일</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>박은진</td>
                            <td>980609</td>
                            <td>울산광역시</td>
                            <td>울산대학교(사회복지학전공)</td>
                            <td>010-5512-4219</td>
                            <td>obliviscor29@gamil.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    
    )
}

export default About;