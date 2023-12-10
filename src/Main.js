import { useEffect, useState } from "react";

function Main({ setExpanded }) {
  const [displayIntro1, setDisplayIntro1] = useState("");
  const [intro1Index, setIntro1Index] = useState(0);
  const intro1 = "Hello!   I'm Eunjin,";

  const [displayIntro2, setDisplayIntro2] = useState("");
  const [intro2Index, setIntro2Index] = useState(0);
  const intro2 = "a rapidly growing web dev.";

  const [displayIntro3, setDisplayIntro3] = useState(false);
  const intro3 = `빠르게 성장하는 개발자 박은진입니다. <br />
    기록, 도전, 사람을 좋아합니다.<br />
    웹 개발, 의사소통에 자신 있습니다.`;

    useEffect(() => {
      if (intro1Index < intro1.length) {
        const timer = setTimeout(() => {
          setDisplayIntro1(intro1.substring(0, intro1Index + 1));
          setIntro1Index(intro1Index + 1);
        }, 130);
        return () => clearTimeout(timer);
      }
    }, [intro1Index, intro1]);
  
    useEffect(() => {
      if (intro1Index === intro1.length && intro2Index < intro2.length) {
        const timer = setTimeout(() => {
          setDisplayIntro2(intro2.substring(0, intro2Index + 1));
          setIntro2Index(intro2Index + 1);
        }, 60);
        return () => clearTimeout(timer);
      }
    }, [intro1Index, intro2Index, intro2]);
  
    useEffect(() => {
      if (intro2Index === intro2.length) {
        const timer = setTimeout(() => {
          setDisplayIntro3(true);
        }, 500);
  
        return () => clearTimeout(timer);
      }
    }, [intro2Index]);
  
    useEffect(() => {
      if (displayIntro3) {
        const expansionTimer = setTimeout(() => {
          setExpanded(true);
        }, 1000);
  
        return () => clearTimeout(expansionTimer);
      }
    }, [displayIntro3, setExpanded]);
  

  return (
    <div className="intro">
      <img className="main-photo-mo mb-2" src="https://eunjinpark98.github.io/portfolio_eunjin/memoji1.png" alt="은진미모티콘"/>
      <h1 className="intro-1 mb-2">{displayIntro1}</h1>
      <h3 className="intro-2 mb-5">{displayIntro2}</h3>
      <p className={displayIntro3 ? "intro-3 show" : "intro-3"} dangerouslySetInnerHTML={{ __html: intro3 }}></p>
    </div>
  );
}

export default Main;
