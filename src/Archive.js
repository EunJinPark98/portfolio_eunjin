import { Button, Card, Col, Row } from "react-bootstrap";

function Archive(){
    return(
        <>
        <div className="archive-fr-mo">
        <h1 className="archive-title">Archive</h1>
        <Row>
            <Col>
                <Card className="tistory-card">
                    <Card.Img variant="top" src="https://eunjinpark98.github.io/portfolio_eunjin/myTistory.png" alt="은진티스토리"/>
                    <Card.Body>
                        <Card.Title><img className="tistory-logo" src="https://eunjinpark98.github.io/portfolio_eunjin/tistory.png" alt="티스토리로고" />개발 블로그</Card.Title>
                        <Card.Text className="card-content">
                        개발 지식, 직접 작성한 코드 등<br />개발과 관련된 것들을 기록하고 공유하고 있습니다. <br />
                        </Card.Text>
                        <Button className="archiveBtn" variant="primary" onClick={() => { window.open('https://bagun-coding.tistory.com/') }}>보러가기</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col>
                <Card className="github-card">
                    <Card.Img variant="top" src="https://eunjinpark98.github.io/portfolio_eunjin/myGithub.png" alt="은진깃허브" />
                    <Card.Body>
                        <Card.Title><img className="github-logo" src="https://eunjinpark98.github.io/portfolio_eunjin/github2.png" alt="깃허브로고"/>깃허브</Card.Title>
                        <Card.Text className="card-content">
                            개인 프로젝트, 팀 프로젝트, <br />
                            공부하면서 만들어본 소스 코드들이 있습니다.
                        </Card.Text>
                        <Button variant="primary" onClick={() => { window.open('https://github.com/EunJinPark98') }}>보러가기</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col>
                <Card className="blog-card">
                    <Card.Img variant="top" src="https://eunjinpark98.github.io/portfolio_eunjin/myBlog.png" alt="은진블로그"/>
                    <Card.Body>
                        <Card.Title><img className="blog-logo" src="https://eunjinpark98.github.io/portfolio_eunjin/naverblog.png" alt="네이버블로그로고" />독서 블로그</Card.Title>
                        <Card.Text className="card-content">
                            독서를 통해 배운 것들을 <br /> 기록하고 있습니다.
                        </Card.Text>
                        <Button variant="primary" onClick={() => { window.open('https://blog.naver.com/obliviscor29') }}>보러가기</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </div>


        <Row className="archive-fr">
            <Col>
                <Card className="tistory-card">
                <Card.Img variant="top" src="https://eunjinpark98.github.io/portfolio_eunjin/myTistory.png" alt="은진티스토리"/>
                <Card.Body>
                    <Card.Title style={{fontSize : '1.5rem'}} className="mb-3 mt-2"><img className="tistory-logo" src="https://eunjinpark98.github.io/portfolio_eunjin/tistory.png" alt="티스토리로고"/>개발 블로그</Card.Title>
                    <Card.Text className="card-content">
                    개발 지식, 직접 작성한 코드 등<br />개발과 관련된 것들을 기록하고 공유하고 있습니다. <br />
                    </Card.Text>
                    <Button variant="primary" onClick={() => { window.open('https://bagun-coding.tistory.com/') }}>보러가기</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="github-card">
                    <Card.Img variant="top" src="https://eunjinpark98.github.io/portfolio_eunjin/myGithub.png" alt="은진깃허브" />
                    <Card.Body>
                        <Card.Title style={{fontSize : '1.5rem'}} className="mb-3 mt-2"><img className="github-logo" src="https://eunjinpark98.github.io/portfolio_eunjin/github2.png" alt="깃허브로고"/>깃허브</Card.Title>
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
                    <Card.Img variant="top" src="https://eunjinpark98.github.io/portfolio_eunjin/myBlog.png" alt="은진블로그"/>
                    <Card.Body>
                        <Card.Title style={{fontSize : '1.5rem'}} className="mb-3 mt-2"><img className="blog-logo" src="https://eunjinpark98.github.io/portfolio_eunjin/naverblog.png" alt="네이버블로그로고" />독서 블로그</Card.Title>
                        <Card.Text className="card-content">
                            독서를 통해 배운 것들을 <br /> 기록하고 있습니다.
                        </Card.Text>
                        <Button variant="primary" onClick={() => { window.open('https://blog.naver.com/obliviscor29') }}>보러가기</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </>
    )

}

export default Archive;