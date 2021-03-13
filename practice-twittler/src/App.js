import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";

function newTweet() {
   //input(textBox)에 있는 내용이 singleTweet형태로 나와야한다.
}

//나중에 singleTweet 새글쓰기 버튼 눌러서 추가할 때 사용할 함수이다.
function SingleTweet() {
   return (
      <div className="singleTweet">
         작성자: 김코딩
         <p>2021/03/13</p>
         <span>{newTweet}</span>
      </div>
   );
}

function App() {
   let [tweet, tweetModify] = useState("Hello react");

   //singleTweet 내용 바꾸기
   const onChange = () => {
      let textBox = document.querySelector(".textBox");
      tweetModify(textBox.value);
      //   tweetModify("HELLO REACT");// 내가 원하는 문자로 바꾸기
   };
   return (
      <div className="App">
         <div>작성자: 김코딩</div>
         <div className="textArea">
            <input type="text" className="textBox" />
            <button className="textBoxButton" onClick={onChange}>
               새 글 쓰기
            </button>
         </div>
         {/* <SingleTweet></SingleTweet> */}

         <div className="singleTweet">
            작성자: 김코딩
            <p>2021/03/13</p>
            <span>{tweet}</span>
         </div>
      </div>
   );
}
export default App;

//변수를 중괄호를 사용해서 넣을 수 있다.
//어디에든 넣을 수 있다. ex) className이나 일반 데이터에 넣을 수 있다.

//state를 쓰면 배열의 형태로 조정이 된다

//useState
//Let [a,b] = useState(‘A’)

// meat의 데이터 [1,2,3]을 [4,5,6]으로 바꾸기.
// Let copyMeat = […meat]
// copyMeat =[‘4’,’5’,’6’]
// meatfunc(copyMeat);

//리엑트 사용 연습한 것.
// function App() {
//    const name = "홍길동";
//    let [meat, meatfunc] = useState(["1", "2", "3"]);

//    return (
//       <div>
//          <div className={name}>{meat}입니다.</div>
//          <div className={name}>{meat[0]}입니다.</div>
//          <div className={name}>{meat[1]}입니다.</div>
//          <div className={name}>{meat[2]}입니다.</div>
//          {/* state를 무조건 직접적으로 바꾸려하지마라. meatfunc을 이용해서 데이터를 바꿔줘야한다. */}
//       </div>
//    );
// }
