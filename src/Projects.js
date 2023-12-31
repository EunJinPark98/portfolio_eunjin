/* eslint-disable */
import { useState } from "react";
import { Button, Carousel, Col, Modal, Row } from "react-bootstrap";

function Projects(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);


    return(
        <>
         <div className="project-fr-mo">
            <Row className="project-box mb-5">
                <div className="project-cate">Front-end</div>
                <Col>
                    <h5>쇼핑몰 웹 사이트</h5>
                    <p>젝시믹스 컨텐츠와 현대백화점몰 디자인을 결합해서 만든 웹 사이트</p>
                    <p>작업기간 : 2023.06.19~2023.07.03 (2주)</p>
                    <p>개발자 : 박은진 (1명)</p>
                    <p>jQuery를 활용한 메뉴 탭, 등장 효과<br />
                        Slick 플러그인을 활용한 이미지 슬라이드<br />
                        웹 표준을 준수하여 기존 웹 사이트에서 많이 사용되는 기능들을 구현했습니다.
                    </p>
                    <div className="badge mb-4 mt-2">
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_html.svg" alt="html"/>
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_css.svg" alt="css" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_js.svg" alt="javascript" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_jquery.svg" alt="jquery" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_figma.svg" alt="figma" />
                    </div>
                    <div className="project-img">
                        <img className="xexymix" src="https://eunjinpark98.github.io/portfolio_eunjin/xexymix.png" alt="프로젝트"/>
                    </div>
                    <div className="viewBtn">
                        <Button onClick={()=>{window.open('https://github.com/EunJinPark98/PCWebSite')}}>깃허브</Button>
                        <Button onClick={() => { window.open('https://eunjinpark98.github.io/PCWebSite/main/main.html') }}>보러 가기</Button>
                    </div>
                </Col>
                
            </Row>
            <Row className="project-box mb-5">
                <div className="project-cate">Front-end</div>
                <Col>
                    <h5>회사소개 반응형 웹 사이트</h5>
                    <p>카카오엔터프라이즈 컨텐츠와 카카오페이 디자인을 결합해서 만든<br />반응형 웹 사이트</p>
                    <p>작업기간 : 2023.07.03~2023.07.24 (2주)</p>
                    <p>개발자 : 박은진 (1명)</p>
                    <p>모바일 320px,  태블릿 768px,  PC 1920px <br />
                        Figma를 활용한 반응형 웹 디자인,<br />
                        jQuery를 활용한 각종 탭 효과를 넣었습니다. <br />
                    </p>
                    <div className="badge mb-4 mt-2">
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_html.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_css.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_js.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_jquery.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_figma.svg" />
                    </div>
                </Col>
                <Col>
                    <div className="project-img">
                        <img className="kakao" src="https://eunjinpark98.github.io/portfolio_eunjin/kakao.png" />
                    </div>
                    <div className="viewBtn">
                        <Button onClick={()=>{window.open('https://github.com/EunJinPark98/ResponsiveWebSite')}}>깃허브</Button>
                        <Button onClick={() => { window.open('https://eunjinpark98.github.io/ResponsiveWebSite/main/main.html') }}>보러 가기</Button>
                    </div>
                </Col>
            </Row>
            <Row className="project-box mb-5">
                <div className="project-cate-back">Back-end</div>
                <Col>
                    <h5>그린의 서재</h5>
                    <p>스프링부트 웹 개발 프로젝트</p>
                    <p>작업기간 : 2023.09.04~2023.09.25 (3주)</p>
                    <p>개발자 : 박은진 (1명)</p>
                    <p> 로그인 / 회원가입 (시큐리티)<br />
                        상품 상세보기, 장바구니, 구매, 상품 등록, 조회, 페이징
                    </p>
                    <div className="badge mt-2">
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_html.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_css.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_js.svg" />
                    </div>
                    <div className="badge mb-4">
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_java.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_springboot.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_oracle.svg" />
                    </div>
                </Col>
                <Col>
                    <div className="project-img greenLibrary-img">
                        <img className="greenLibrary" src="https://eunjinpark98.github.io/portfolio_eunjin/greenLibrary.png" />
                    </div>
                    <div className="viewBtn">
                        <Button onClick={()=>{window.open('https://github.com/EunJinPark98/LibraryShop')}}>깃허브</Button>
                        <Button onClick={()=>{setShow(true)}}>보러 가기</Button>
                    </div>
                </Col>
            </Row>
            <Row className="project-box mb-5">
                <div className="project-cate-full">Full-Stack</div>
                <Col>
                    <h5>GREEN MOA</h5>
                    <p>학급 커뮤니티</p>
                    <p>작업기간 : 2023.10.11~2023.11.10 (한 달)</p>
                    <p>개발자 : 박은진, 김진우, 신협진, 이윤주 (4명)</p>
                    <p>웹 소켓으로 캐릭터 접속, 이동, 채팅 가능한 메타버스 공간<br/>
                        게시판, 캘린더, 쪽지, 투두리스트 등</p>
                    <div className="badge mt-2">
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_html.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_css.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_js.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_jquery.svg" />
                    </div>
                    <div className="badge mb-4">
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_java.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_springboot.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_oracle.svg" />
                    </div>
                </Col>
                <Col>
                    <div>
                        <img className="greenMoa" src="https://eunjinpark98.github.io/portfolio_eunjin/greenMoaMainPage.png" />
                    </div>
                    <div className="viewBtn">
                        <Button onClick={()=>{window.open('https://github.com/EunJinPark98/GREENMOA')}}>깃허브</Button>
                        <Button onClick={() => {window.open('https://eunjin-park.notion.site/GREEN-MOA-1bf4f3c360d34e57af6f3a2c796e0664?pvs=4')}}>보러 가기</Button>
                    </div>
                </Col>
            </Row>
            <Row className="project-box mb-5">
                <div className="project-cate">Front-end</div>
                <Col>
                    <h5>포트폴리오</h5>
                    <p>작업기간 : 2023.10.21~2023.10.24 (4일)</p>
                    <p>개발자 : 박은진 (1명)</p>
                    <p>React로 제작한 포트폴리오 사이트<br />
                    </p>
                    <div className="badge mb-4">
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_react.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_js.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_css.svg" />
                    </div>
                </Col>
                <Col>
                    <img className="portImg" src="https://eunjinpark98.github.io/portfolio_eunjin/portfolio.png" />
                    <div className="viewBtn">
                        <Button onClick={()=>{window.open('https://github.com/EunJinPark98/portfolio_eunjin')}}>깃허브</Button>
                        <Button onClick={()=>{alert('현재 보고 계신 페이지입니다!')}}>보러 가기</Button>
                    </div>
                </Col>
            </Row>

            <Modal size="xl" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="modal-title">그린의 서재</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <Carousel interval={null} indicators={false}>
                        <Carousel.Item>
                            <img className="library-show" src="https://eunjinpark98.github.io/portfolio_eunjin/library_join.gif" />
                            <Carousel.Caption className="library-txt">
                            <h5>로그인/회원가입</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="library-show" src="https://eunjinpark98.github.io/portfolio_eunjin/library_buycart.gif" />
                            <Carousel.Caption>
                            <h5>장바구니/구매</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="library-show" src="https://eunjinpark98.github.io/portfolio_eunjin/library_admin.gif" />
                            <Carousel.Caption>
                            <h5>관리자 페이지 상품 등록</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="library-show" src="https://eunjinpark98.github.io/portfolio_eunjin/library_cate.gif" />
                            <Carousel.Caption>
                            <h5>검색 조회</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Modal.Body>
            </Modal>
        </div>
        <div className="project-fr">
            <Row className="project-box mb-5">
                <div className="project-cate">Front-end</div>
                <Col xs={7}>
                    <h5>쇼핑몰 웹 사이트</h5>
                    <p>젝시믹스 컨텐츠와 현대백화점몰 디자인을 결합해서 만든 웹 사이트</p>
                    <p>작업기간 : 2023.06.19~2023.07.03 (2주)</p>
                    <p>개발자 : 박은진 (1명)</p>
                    <p>jQuery를 활용한 메뉴 탭, 등장 효과<br />
                        Slick 플러그인을 활용한 이미지 슬라이드<br />
                        웹 표준을 준수하여 기존 웹 사이트에서 많이 사용되는 기능들을 구현했습니다.
                    </p>
                    <div className="badge mt-4">
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_html.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_css.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_js.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_jquery.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_figma.svg" />
                    </div>
                </Col>
                <Col>
                    <div className="project-img">
                        <img className="xexymix" src="https://eunjinpark98.github.io/portfolio_eunjin/xexymix.png" />
                    </div>
                    <div className="viewBtn">
                        <Button onClick={()=>{window.open('https://github.com/EunJinPark98/PCWebSite')}}>깃허브</Button>
                        <Button onClick={() => { window.open('https://eunjinpark98.github.io/PCWebSite/main/main.html') }}>보러 가기</Button>
                    </div>
                </Col>
                
            </Row>
            <Row className="project-box mb-5">
                <div className="project-cate">Front-end</div>
                <Col xs={7}>
                    <h5>회사소개 반응형 웹 사이트</h5>
                    <p>카카오엔터프라이즈 컨텐츠와 카카오페이 디자인을 결합해서 만든<br />반응형 웹 사이트</p>
                    <p>작업기간 : 2023.07.03~2023.07.24 (2주)</p>
                    <p>개발자 : 박은진 (1명)</p>
                    <p>모바일 320px,  태블릿 768px,  PC 1920px <br />
                        Figma를 활용한 반응형 웹 디자인,<br />
                        jQuery를 활용한 각종 탭 효과를 넣었습니다. <br />
                    </p>
                    <div className="badge mt-4">
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_html.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_css.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_js.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_jquery.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_figma.svg" />
                    </div>
                </Col>
                <Col>
                    <div className="project-img" >
                        <img className="kakao" src="https://eunjinpark98.github.io/portfolio_eunjin/kakao.png" />
                    </div>
                    <div className="viewBtn">
                        <Button onClick={()=>{window.open('https://github.com/EunJinPark98/ResponsiveWebSite')}}>깃허브</Button>
                        <Button onClick={() => { window.open('https://eunjinpark98.github.io/ResponsiveWebSite/main/main.html') }}>보러 가기</Button>
                    </div>
                </Col>
            </Row>
            <Row className="project-box mb-5">
                <div className="project-cate-back">Back-end</div>
                <Col xs={7}>
                    <h5>그린의 서재</h5>
                    <p>스프링부트 웹 개발 프로젝트</p>
                    <p>작업기간 : 2023.09.04~2023.09.25 (3주)</p>
                    <p>개발자 : 박은진 (1명)</p>
                    <p> 로그인 / 회원가입 (시큐리티)<br />
                        상품 상세보기, 장바구니, 구매, 상품 등록, 조회, 페이징
                    </p>
                    <div className="badge mt-4">
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_html.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_css.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_js.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_java.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_springboot.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_oracle.svg" />
                    </div>
                </Col>
                <Col>
                    <div className="project-img greenLibrary-img">
                        <img className="greenLibrary" src="https://eunjinpark98.github.io/portfolio_eunjin/greenLibrary.png" />
                    </div>
                    <div className="viewBtn">
                        <Button onClick={()=>{window.open('https://github.com/EunJinPark98/LibraryShop')}}>깃허브</Button>
                        <Button onClick={()=>{setShow(true)}}>보러 가기</Button>
                    </div>
                </Col>
            </Row>
            <Row className="project-box mb-5">
                <div className="project-cate-full">Full-Stack</div>
                <Col xs={7}>
                    <h5>GREEN MOA</h5>
                    <p>학급 커뮤니티</p>
                    <p>작업기간 : 2023.10.11~2023.11.10 (한 달)</p>
                    <p>개발자 : 박은진, 김진우, 신협진, 이윤주 (4명)</p>
                    <p>웹 소켓으로 캐릭터 접속, 이동, 채팅 가능한 메타버스 공간<br/>
                        게시판, 캘린더, 쪽지, 투두리스트 등</p>
                    <div className="badge mt-4">
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_html.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_css.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_js.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_jquery.svg" />
                    </div>
                    <div className="badge">
                    <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_java.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_springboot.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_oracle.svg" />
                    </div>
                </Col>
                <Col>
                    <div className="project-img" >
                        <img className="greenMoa" src="https://eunjinpark98.github.io/portfolio_eunjin/greenMoaMainPage.png" />
                    </div>
                    <div className="viewBtn">
                        <Button onClick={()=>{window.open('https://github.com/EunJinPark98/GREENMOA')}}>깃허브</Button>
                        <Button onClick={() => {window.open('https://eunjin-park.notion.site/GREEN-MOA-1bf4f3c360d34e57af6f3a2c796e0664?pvs=4')}}>보러 가기</Button>
                    </div>
                </Col>
            </Row>
            <Row className="project-box mb-5">
                <div className="project-cate">Front-end</div>
                <Col xs={7}>
                    <h5>포트폴리오</h5>
                    <p>작업기간 : 2023.10.21~2023.10.24 (4일)</p>
                    <p>개발자 : 박은진 (1명)</p>
                    <p>React로 제작한 포트폴리오 사이트<br />
                    </p>
                    <div className="badge mt-4" style={{marginLeft : '-200px'}}>
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_react.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_js.svg" />
                        <img src="https://eunjinpark98.github.io/portfolio_eunjin/badge_css.svg" />
                    </div>
                </Col>
                <Col>
                    <img className="portImg" src="https://eunjinpark98.github.io/portfolio_eunjin/portfolio.png" />
                    <div className="viewBtn">
                        <Button onClick={()=>{window.open('https://github.com/EunJinPark98/portfolio_eunjin')}}>깃허브</Button>
                        <Button onClick={()=>{alert('현재 보고 계신 페이지입니다!')}}>보러 가기</Button>
                    </div>
                </Col>
            </Row>

            <Modal size="xl" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="modal-title">그린의 서재</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <Carousel interval={null} indicators={false}>
                        <Carousel.Item>
                            <img className="library-show" src="https://eunjinpark98.github.io/portfolio_eunjin/library_join.gif" />
                            <Carousel.Caption className="library-txt">
                            <h5>로그인/회원가입</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="library-show" src="https://eunjinpark98.github.io/portfolio_eunjin/library_buycart.gif" />
                            <Carousel.Caption className="library-txt">
                            <h5>장바구니/구매</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="library-show" src="https://eunjinpark98.github.io/portfolio_eunjin/library_admin.gif" />
                            <Carousel.Caption className="library-txt">
                            <h5>상품 등록</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="library-show" src="https://eunjinpark98.github.io/portfolio_eunjin/library_cate.gif" />
                            <Carousel.Caption className="library-txt"> 
                            <h5>검색 조회</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Modal.Body>
            </Modal>
        </div>
        </>
    )

}

export default Projects;

