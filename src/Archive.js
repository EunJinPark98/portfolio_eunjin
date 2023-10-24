import { Button, Card, Col, Row } from "react-bootstrap";

function Archive(){
    return(
        <Row className="archive-fr">
            <Col>
                <Card className="tistory-card">
                <Card.Img variant="top" src="/myTistory.png" />
                <Card.Body>
                    <Card.Title><img className="tistory-logo" src="/tistory.png"></img>개발 블로그</Card.Title>
                    <Card.Text className="card-content">
                        개발과 관련해서 배운 내용들을<br /> 모두 기록하고 있습니다. <br />
                        혼자 코딩할 때나 팀 프로젝트 시<br /> 참고용으로 활용됩니다.<br />
                    </Card.Text>
                    <Button variant="primary" onClick={() => { window.open('https://bagun-coding.tistory.com/') }}>보러가기</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="github-card">
                <Card.Img variant="top" src="/myGithub.png" />
                <Card.Body>
                    <Card.Title><img className="github-logo" src="/github2.png"></img>깃허브</Card.Title>
                    <Card.Text className="card-content">
                        개인 프로젝트, 팀 프로젝트, <br />
                        공부하면서 만들어본 소스 코드들이 있습니다.
                    </Card.Text>
                    <Button variant="primary" onClick={() => { window.open('https://github.com/EunJinPark98') }}>보러가기</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="blog-card">
                <Card.Img variant="top" src="/myBlog.png" />
                <Card.Body>
                    <Card.Title><img className="blog-logo" src="/naverblog.png"></img>독서 블로그</Card.Title>
                    <Card.Text className="card-content">
                        독서를 통해 배운 것들을 <br /> 기록하고 있습니다.
                    </Card.Text>
                    <Button variant="primary" onClick={() => { window.open('https://blog.naver.com/obliviscor29') }}>보러가기</Button>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    )

}

export default Archive;