import { useEffect, useState } from "react";

function Main(){
    const [displayIntro1, setDisplayIntro1] = useState('');
    const [intro1Index, setIntro1Index] = useState(0);
    const intro1 = "Hello!   I'm Eunjin,";

    const [displayIntro2, setDisplayIntro2] = useState('');
    const [intro2Index, setIntro2Index] = useState(0);
    const intro2 = "a rapidly growing web Dev.";
  
    useEffect(() => {
        if (intro1Index < intro1.length) {
          const timer = setTimeout(() => {
            setDisplayIntro1(intro1.substring(0, intro1Index + 1));
            setIntro1Index(intro1Index + 1);
          }, 150);
          return () => clearTimeout(timer);
        }
      }, [intro1Index, intro1]);
    useEffect(() => {
        if(intro1Index === intro1.length){
            if (intro2Index < intro2.length) {
                const timer = setTimeout(() => {
                setDisplayIntro2(intro2.substring(0, intro2Index + 1));
                setIntro2Index(intro2Index + 1);
                }, 60);
                return () => clearTimeout(timer);
            }
        }

    }, [intro1Index, intro2Index, intro2]);
    
      return (
        <div className="intro">
          <h1 className="intro-1 mb-2">{displayIntro1}</h1>
          <h3 className="intro-2">{displayIntro2}</h3>
        </div>
      );

}

export default Main;