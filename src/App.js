/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {
  let name = '박은진';
  let [category] = useState(['Intro', 'Project', 'Connect']);
  let [project] = useState(['GREEN MOA', '그린의 서재', '쇼핑몰웹', '회사소개반응형웹', 'CBT']);
  let [like, likeUp] = useState(0);

  return (
    <div className="App">
      <div className="header">
        <h3 style={ {color : '#fff', fontSize : '40px'} }>은진 포트폴리오</h3>
      </div>
      <nav>
        <ul>
          <li>소개</li>
          <li>프로젝트</li>
        </ul>
      </nav>
      <div>
        <h3>{ category[0] }</h3>
        <p>{ name }<span onClick={()=>{likeUp(like+=1)}}>💕</span> { like } </p>
      </div>
      <div>
        <h3>{ category[1] }</h3>
        <p>{ project[0] }</p>
        <p>{ project[1] }</p>
        <p>{ project[2] }</p>
        <p>{ project[3] }</p>
        <p>{ project[4] }</p>
      </div>
      <div>
        <h3>{ category[2] }</h3>
        <p></p>
      </div>



    </div>
  );
}

export default App;
