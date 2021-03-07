//call

const nike = {
   name: "Nike",
};

const adidas = {
   name: "Adidas",
};

function showBrand() {
   console.log(this.name);
}

function update(price, category) {
   this.price = price;
   this.category = category;
}
update.call(nike, 20000); // call은 2번째 인자부터 직접 받는다.
console.log(nike); // {name : "Nike", price : 20000, category : undefined}

update.apply(adidas, [30000, "T-shirt"]); // apply는 2번째 인자부터 배열로 받는다.
console.log(adidas); // {name : "Adidas", price : 30000, category : "T-shirt"}

updateNike = update.bind(nike); // 이 함수는 항상 nike를 this로 받는다.
updateNike(40000, "Shoes"); // {name : "Nike", price : 40000, category : "Shoes"}
console.log(updateNike); //updateNike는 함수를 의미. 만약 call이나 apply이었을 경우에는 출력값이 나오지만 bind는 값을 할당해준것일뿐이다. 그렇기 때문에 함수가 나온다.
console.log(nike); // {name : 'Nike', price: 40000, category: 'Shoes'}
function foo() {
   return this.msg;
}

const context1 = { msg: "welcome everyone" };
// const context2 = { msg: "good bye" };

console.log(foo.call(context1));

// function foo1(num,str){
//     return this.num + ',' + this.str;
// }

// const

// var animals = [
//     { species: 'Lion', name: 'King' },
//     { species: 'Whale', name: 'Fail' }
//   ];

//   for (var i = 0; i < animals.length; i++) {
//     (function(i) {
//       this.print = function() {
//         console.log('#' + i + ' ' + this.species
//                     + ': ' + this.name);
//       }
//       this.print();
//     }).call(animals[i], i);
//   }

//객체의 생성자 연결에서의 call 사용.
// call(this,name,)

// describe("call에 관해서", () => {
//    it("call의 첫번째 인자 값을 확인합니다", () => {
//       function foo() {
//          return this;
//       }

//       const context1 = { msg: "welcome everyone" };
//       const context2 = { msg: "good bye" };

//       expect(foo.call(context1)).to.eql({ msg: "welcome everyone" });
//       expect(foo.call(context2).msg).to.eql("good bye");
//       expect(foo.call()).to.eql(global); //node.js 환경이라서 global이다. 브라우저 환경에서는 window이다.
//    });

//    it("call의 두번째 인자 이후로는 파라미터로 전달됩니다", () => {
//       function printProfile(name, age, ...args) {
//          return `${this.type} ${name} 나이:${age}${
//             args.length === 0 ? "" : " " + this.feature + ":" + args.join(",")
//          }`;
//       }

//       const developer = { type: "개발자", feature: "언어" };
//       const artist = { type: "아티스트", feature: "노래" };

//       expect(printProfile.call(developer, "김코딩", 30)).to.eql(
//          "개발자 김코딩 나이:30"
//       );
//       expect(printProfile.call(developer, "박해커", 20, "JavaScript")).to.eql(
//          "개발자 박해커 나이:20 언어:JavaScript"
//       );
//       expect(printProfile.call(artist, "BTS", 7, "ON", "Dynamite")).to.eql(
//          "아티스트 BTS 나이:7 노래:ON,Dynamite"
//       );
//    });
// })
