import { Button, Card, Col, Row } from "react-bootstrap";

function Archive(){
    return(
        <Row className="archive-fr">
            <Col>
                <Card>
                <Card.Img variant="top" src="myTistory.png" />
                <Card.Body>
                    <Card.Title><img className="tistory-logo" src="tistory.png"></img>개발 블로그</Card.Title>
                    <Card.Text className="card-content">
                        개발 관련해서 배운 내용들을 모두 기록하고 있습니다. <br />
                        코딩할 때 참고용으로 많이 활용되고 <br />
                        팀 프로젝트 시에도 팀원들에게 공유하여
                        빠른 진행에 도움이 되고 있습니다.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                <Card.Img variant="top" src="myGithub.png" />
                <Card.Body>
                    <Card.Title><img className="github-logo" src="github2.png"></img>깃허브</Card.Title>
                    <Card.Text className="card-content">
                        개인 프로젝트, 팀 프로젝트,
                        공부하면서 만들어본 소스 코드들이 있습니다.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                <Card.Img variant="top" src="myBlog.jpg" />
                <Card.Body>
                    <Card.Title><img className="blog-logo" src="naverblog.png"></img>독서 블로그</Card.Title>
                    <Card.Text className="card-content">
                        독서를 통해 배운 것들을 <br /> 기록하고 있습니다.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    )

}

export default Archive;