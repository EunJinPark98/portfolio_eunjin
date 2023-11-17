function About(){
    return (
        <div className="about-fr">
            <div className="profile-photo">
                <div className="photo-fr">
                    <div className="flip">
                        <img className="photo2" src="https://eunjinpark98.github.io/portfolio_eunjin/photo2.png" alt="은진미모티콘" />
                        <img className="photo" src="https://eunjinpark98.github.io/portfolio_eunjin/photo.jpg" alt="은진증명사진"/>
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
                            <td>경기 성남시</td>
                            <td>울산대학교(사회복지학전공)</td>
                            <td>010-5512-4219</td>
                            <td>obliviscor29@naver.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default About;