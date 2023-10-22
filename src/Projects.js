import { useState } from "react";
import { Col, Row } from "react-bootstrap";

function Projects(){
    let [currentIdx, setCurrentIdx] = useState(0);
    let [xexyImg] = useState(['xexymix.png', 'xexymix2.png', 'xexymix3.png', 'xexymix4.png'])

    return(
        <div className="project-fr">
            <Row className="project-box mb-5">
                <div className="project-cate">Front-end</div>
                <Col xs={7}>
                    <h5>쇼핑몰 웹 사이트</h5>
                    <p>젝시믹스 컨텐츠와 현대백화점몰 디자인을 결합해서 만든 웹 사이트</p>
                    <div className="badge">
                        <img src="badge_html.svg" />
                        <img src="badge_css.svg" />
                        <img src="badge_js.svg" />
                        <img src="badge_jquery.svg" />
                        <img src="badge_figma.svg" />
                    </div>
                    <p>작업기간 2023.06.19~2023.07.03 2주</p>
                    <p>내용</p>
                </Col>
                <Col style={{padding : '0'}}>
                    <div className="project-img">
                        <img className="xexymix" src={xexyImg[currentIdx]} />
                    </div>
                    <div className="img-btn">
                        <div className="prev" onClick={()=>{
                            if(currentIdx>0){
                                setCurrentIdx(currentIdx-1);
                            }
                        }}>이전</div>
                        <div className="next" onClick={()=>{
                            if(currentIdx<3){
                                setCurrentIdx(currentIdx+1);
                            }
                        }}>다음</div>
                    </div>
                </Col>
            </Row>
            <Row className="project-box mb-5">
                <div className="project-cate">Front-end</div>
                <Col xs={7}>
                    <h5>회사소개 반응형 웹 사이트</h5>
                    <p>카카오엔터프라이즈 컨텐츠와 카카오페이 디자인을 결합해서 만든 반응형 웹 사이트</p>
                    <div className="badge">
                        <img src="badge_html.svg" />
                        <img src="badge_css.svg" />
                        <img src="badge_js.svg" />
                        <img src="badge_jquery.svg" />
                        <img src="badge_figma.svg" />
                    </div>
                    <p>작업기간 2023.07.03~2023.07.24 2주</p>
                    <p>내용</p>
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
                    <p>스프링부트 웹 개발</p>
                    <div className="badge">
                        <img src="badge_html.svg" />
                        <img src="badge_css.svg" />
                        <img src="badge_js.svg" />
                        <img src="badge_java.svg" />
                        <img src="badge_springboot.svg" />
                        <img src="badge_oracle.svg" />
                    </div>
                    <p>작업기간 2023.09.04~2023.09.25 3주</p>
                    <p>내용</p>

                </Col>
                <Col>
                    <div className="project-img">
                        <img className="" src="" />
                    </div>
                </Col>
            </Row>
            <Row className="project-box mb-5">
                <div className="project-cate-team">Team-Project</div>
                <Col xs={7}>
                    <h5>GREEN MOA</h5>
                    <p>싸이월드 + 메타버스 느낌의 학급 커뮤니티</p>
                    <div className="badge">
                        <img src="badge_html.svg" />
                        <img src="badge_css.svg" />
                        <img src="badge_js.svg" />
                        <img src="badge_jquery.svg" />
                        <img src="badge_java.svg" />
                        <img src="badge_springboot.svg" />
                        <img src="badge_oracle.svg" />
                    </div>
                    <p>작업기간 2023.10.11~2023.11.10 한 달</p>
                    <p>내용</p>

                </Col>
                <Col>
                    <div className="project-img">
                        <img className="" src="" />
                    </div>
                </Col>
            </Row>
        </div>
    )

}

export default Projects;