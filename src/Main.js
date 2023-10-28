import { useEffect, useState } from "react";

function Main() {
  const [displayIntro1, setDisplayIntro1] = useState("");
  const [intro1Index, setIntro1Index] = useState(0);
  const intro1 = "Hello!   I'm Eunjin,";

  const [displayIntro2, setDisplayIntro2] = useState("");
  const [intro2Index, setIntro2Index] = useState(0);
  const intro2 = "a rapidly growing web dev.";

  const [displayIntro3, setDisplayIntro3] = useState(false);
  const intro3 = `빠르게 성장하는 개발자 박은진입니다. <br />
    새로운 것에 도전하는 것을 좋아하며 개발에 열정과 애정이 큽니다. <br />
    배우고 깨달은 것들을 항상 기록하고 있으며, <br />
    사람을 좋아해서 인간관계를 소중히 생각하는 편입니다.`;

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
  }, [intro2Index, displayIntro3]);

  return (
    <div className="intro">
      <img className="main-photo-mo mb-2" src="https://eunjinpark98.github.io/portfolio_eunjin/memoji1.png"></img>
      <h1 className="intro-1 mb-2">{displayIntro1}</h1>
      <h3 className="intro-2 mb-5">{displayIntro2}</h3>
      <p className={displayIntro3 ? "intro-3 show" : "intro-3"} dangerouslySetInnerHTML={{ __html: intro3 }}></p>
    </div>
  );
}

export default Main;
