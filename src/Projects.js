import { useState } from "react";
import { Col, Row } from "react-bootstrap";

function Projects(){
    // let [currentIdx, setCurrentIdx] = useState(0);
    // let [xexyImg] = useState(['xexymix.png', 'xexymix2.png', 'xexymix3.png', 'xexymix4.png'])

    return(
        <div className="project-fr">
            <Row className="project-box mb-5">
                <div className="project-cate">Front-end</div>
                <Col xs={7}>
                    <h5>쇼핑몰 웹 사이트</h5>
                    <p>젝시믹스 컨텐츠와 현대백화점몰 디자인을 결합해서 만든 웹 사이트</p>
                    <p>작업기간 : 2023.06.19~2023.07.03 (2주)</p>
                    <p>jQuery를 사용하여 메뉴탭, 등장 효과를 넣었고 <br />
                        Slick 플러그인을 사용하여 이미지 슬라이드를 만들었습니다.<br />
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
                    <div className="project-img">
                        <img className="xexymix" src="xexymix.png" />
                    </div>
                </Col>
            </Row>
            <Row className="project-box mb-5">
                <div className="project-cate">Front-end</div>
                <Col xs={7}>
                    <h5>회사소개 반응형 웹 사이트</h5>
                    <p>카카오엔터프라이즈 컨텐츠와 카카오페이 디자인을 결합해서 만든 반응형 웹 사이트</p>
                    <p>작업기간 : 2023.07.03~2023.07.24 (2주)</p>
                    <p>모바일 320px,  태블릿 768px,  PC 1920px <br />
                        Figma를 사용하여 사이즈별 디자인했고, <br />
                        jQuery를 사용하여 각종 탭 효과를 넣었습니다. <br />
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
                    <div className="project-img">
                        <img className="kakao" src="kakao.png" />
                    </div>
                </Col>
            </Row>
            <Row className="project-box mb-5">
                <div className="project-cate-back">Back-end</div>
                <Col xs={7}>
                    <h5>그린의 서재</h5>
                    <p>스프링부트 웹 개발 프로젝트</p>
                    <p>작업기간 : 2023.09.04~2023.09.25 (3주)</p>
                    <p> 로그인 / 회원가입 - 유효성 검사, 시큐리티 적용 <br />
                        관리자 - 상품 등록, 삭제 <br />
                        회원 - 상품 상세보기, 장바구니, 구매 <br />
                        페이징 처리
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

                </Col>
            </Row>
            <Row className="project-box mb-5">
                <div className="project-cate-team">Team-Project</div>
                <Col xs={7}>
                    <h5>GREEN MOA</h5>
                    <p>싸이월드 + 메타버스 느낌의 학급 커뮤니티</p>
                    <p>작업기간 : 2023.10.11~2023.11.10 (한 달)</p>
                    <p>아직 개발 중!</p>
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

                </Col>
            </Row>
        </div>
    )

}

export default Projects;