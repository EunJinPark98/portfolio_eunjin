import { useState } from "react";
import { Button, Carousel, Col, Modal, Row } from "react-bootstrap";

function Projects(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);


    return(
        <div className="project-fr">
            <Row className="project-box mb-5">
                <div className="project-cate">Front-end</div>
                <Col xs={7}>
                    <h5>쇼핑몰 웹 사이트</h5>
                    <p>젝시믹스 컨텐츠와 현대백화점몰 디자인을 결합해서 만든 웹 사이트</p>
                    <p>작업기간 : 2023.06.19~2023.07.03 (2주)</p>
                    <p>jQuery를 사용한 메뉴 탭, 등장 효과<br />
                        Slick 플러그인을 사용한 이미지 슬라이드<br />
                        웹 표준을 준수하여 기존 웹 사이트에서 많이 사용되는 기능들을 구현했습니다.
                    </p>
                    <div className="badge">
                        <img src="badge_html.svg" />
                        <img src="badge_css.svg" />
                        <img src="badge_js.svg" />
                        <img src="badge_jquery.svg" />
                        <img src="badge_figma.svg" />
                    </div>
                </Col>
                <Col>
                    <div className="project-img" onClick={() => { window.open('https://eunjinpark98.github.io/PCWebSite/main/main.html') }}>
                        <img className="xexymix" src="xexymix.png" />
                    </div>
                    <img className="project-view" src="cursor_click.png" />
                </Col>
                
            </Row>
            <Row className="project-box mb-5">
                <div className="project-cate">Front-end</div>
                <Col xs={7}>
                    <h5>회사소개 반응형 웹 사이트</h5>
                    <p>카카오엔터프라이즈 컨텐츠와 카카오페이 디자인을 결합해서 만든<br />반응형 웹 사이트</p>
                    <p>작업기간 : 2023.07.03~2023.07.24 (2주)</p>
                    <p>모바일 320px,  태블릿 768px,  PC 1920px <br />
                        Figma를 사용한 반응형 웹 디자인, <br />
                        jQuery를 사용한 각종 탭 효과를 넣었습니다. <br />
                    </p>
                    <div className="badge">
                        <img src="badge_html.svg" />
                        <img src="badge_css.svg" />
                        <img src="badge_js.svg" />
                        <img src="badge_jquery.svg" />
                        <img src="badge_figma.svg" />
                    </div>
                </Col>
                <Col>
                    <div className="project-img" onClick={() => { window.open('https://eunjinpark98.github.io/ResponsiveWebSite/main/main.html') }}>
                        <img className="kakao" src="kakao.png" />
                    </div>
                    <img className="project-view" src="cursor_click.png"/>
                </Col>
            </Row>
            <Row className="project-box mb-5">
                <div className="project-cate-back">Back-end</div>
                <Col xs={7}>
                    <h5>그린의 서재</h5>
                    <p>스프링부트 웹 개발 프로젝트</p>
                    <p>작업기간 : 2023.09.04~2023.09.25 (3주)</p>
                    <p> 로그인 / 회원가입<br />
                        상품 상세보기, 장바구니, 구매, 상품 등록, 조회, 페이징
                    </p>
                    <div className="badge">
                        <img src="badge_html.svg" />
                        <img src="badge_css.svg" />
                        <img src="badge_js.svg" />
                        <img src="badge_java.svg" />
                        <img src="badge_springboot.svg" />
                        <img src="badge_oracle.svg" />
                    </div>
                </Col>
                <Col>
                    <div className="project-img greenLibrary-img" onClick={()=>{setShow(true)}}>
                        <img className="greenLibrary" src="greenLibrary.png" />
                    </div>
                    <img className="project-view" src="cursor_click.png"/>
                </Col>
            </Row>
            <Row className="project-box mb-5">
                <div className="project-cate-team">Team-Project</div>
                <Col xs={7}>
                    <h5>GREEN MOA</h5>
                    <p>싸이월드 + 메타버스 느낌의 학급 커뮤니티</p>
                    <p>작업기간 : 2023.10.11~2023.11.10 (한 달)</p>
                    <p>일정관리, 게시판, 채팅, 쪽지 등 아직 개발 중!</p>
                    <div className="badge">
                        <img src="badge_html.svg" />
                        <img src="badge_css.svg" />
                        <img src="badge_js.svg" />
                        <img src="badge_jquery.svg" />
                        <img src="badge_java.svg" />
                        <img src="badge_springboot.svg" />
                        <img src="badge_oracle.svg" />
                    </div>
                </Col>
                <Col>
                    <div>
                        <img className="greenMoa" src="GreenMoa.png" />
                    </div>
                </Col>
            </Row>
            <Row className="project-box mb-5">
                <div className="project-cate">Front-end</div>
                <Col xs={7}>
                    <h5>포트폴리오</h5>
                    <p></p>
                    <p>작업기간 : 2023.10.21~2023.10.24 (4일)</p>
                    <p>React 부트스트랩을 사용하여 포트폴리오 제작<br />
                    </p>
                    <div className="badge">
                        <img src="badge_react.svg" />
                        <img src="badge_js.svg" />
                        <img src="badge_css.svg" />
                    </div>
                </Col>
                <Col>
                    <img className="portImg" src="portfolio.png" />
                </Col>
            </Row>

            <Modal size="xl" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="modal-title">그린의 서재</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <Carousel interval={null} indicators={false}>
                        <Carousel.Item>
                            <img className="library-show" src="/library_join.gif" />
                            <Carousel.Caption className="library-txt">
                            <h5>로그인/회원가입</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="library-show" src="/library_buycart.gif" />
                            <Carousel.Caption>
                            <h5>장바구니/구매</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="library-show" src="/library_admin.gif" />
                            <Carousel.Caption>
                            <h5>관리자 페이지 상품 등록</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="library-show" src="/library_cate.gif" />
                            <Carousel.Caption>
                            <h5>검색 조회 기능</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Modal.Body>
            </Modal>


        </div>
    )

}

export default Projects;

