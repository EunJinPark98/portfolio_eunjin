import { Col, Row } from "react-bootstrap";

function Archive(){
    return(
        <>
        <h6>Archive</h6>
        <Row>
            <Col>
                <div>
                    <p><img className="archive-logo" src="tistory.png"></img></p>
                    <p><img className="my-blog" src="myTistory.png"></img></p>
                    <p>개발 블로그입니다. <br />
                        개발과 관련된 배운 내용들을 모두 기록하여 <br />
                        코딩 할 때 참고용으로 활용하고 있습니다. <br />
                        팀 프로젝트 시 팀원들에게 공유하여 <br />
                        팀원들이 티스토리를 참고해서 개발하고 있습니다.
                    </p>
                </div>
            </Col>
            <Col>
                <div>
                    <p><img className="archive-logo" src="github.png"></img></p>
                    <p><img className="my-blog" src="myGithub.png"></img></p>
                    <p>소스 코드 저장소입니다. <br />
                        배운 내용들을 적용한 소스 코드 <br />
                        팀 프로젝트 시 협업 <br />
                        개인 프로젝트 소스 코드 <br />
                        취미로 만들어본 프로그램 소스코드가 있습니다.
                    </p>
                </div>
            </Col>
            <Col>
                <div>
                    <p><img className="archive-logo" src="naverblog.png" /></p>
                    <p><img className="my-blog" src="myBlog.jpg"></img></p>
                    <p>독서 블로그입니다.<br />
                        코딩 공부한 것들을 기록해오다가 <br />
                        티스토리를 운영하기 시작하고 <br />
                        이 곳은 독서를 통해 배운 것들을 기록하고 있습니다.
                    </p>
                </div>
            </Col>
        </Row>
        </>
    )

}

export default Archive;