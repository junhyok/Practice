// function foo(a,b){
//     return a+b;
// }

// 1. 애로우 펑션 function 을 화살표로 바꾼다.
// 익명 함수가 되어야 한다.

let foo = (a, b) => a + b;

//console.log(foo(1, 3));

// 2. { } return문만 있다면 return 생략 가능하다.

/*
    let foo = (a,b) => a + b ;
*/

// function foo1(a){
//     return a;
// }

let foo1 = (a) => a;

//console.log(foo1(3));

function foo2(a) {
   return function foo3(b) {
      return a * b;
   };
}
// let foo3 = (a) => {
//     return (b) =>{
//         return a * b;
//     }
// }

// let foo3 = (a) => (b) => {
//    return a * b;
// };

let foo3 = (a) => (b) => a * b;

//파라미터가 1개일 때 소괄호를 생략할 수 있다.
//let foo3 = a => b => a * b;

console.log(foo3(3)(2));

// describe("화살표 함수에 관해서", function () {
//    it("함수 표현식 사용법을 복습합니다", function () {
//       const add = function (x, y) {
//          return x + y;
//       };

//       expect(add(5, 8)).to.eql(13);
//    });

//    it("화살표 함수 사용법을 익힙니다", function () {
//       // function 키워드를 생략하고 화살표 => 를 붙입니다
//       const add = (x, y) => {
//          return x + y;
//       };
//       expect(add(10, 20)).to.eql(30);

//       // 리턴을 생략할 수 있습니다
//       const subtract = (x, y) => x - y;
//       expect(subtract(10, 20)).to.eql(-10);

//       // 필요에 따라 소괄호를 붙일 수도 있습니다
//       const multiply = (x, y) => x * y;
//       expect(multiply(10, 20)).to.eql(200);

//       // 파라미터가 하나일 경우 소괄호 생략이 가능합니다
//       const divideBy10 = (x) => x / 10;
//       expect(divideBy10(100)).to.eql(10);
//    });

//    it("화살표 함수를 이용해 클로저를 표현합니다", function () {
//       const adder = (x) => {
//          return (y) => {
//             return x + y;
//          };
//       };

//       expect(adder(50)(10)).to.eql(60);

//       const subtractor = (x) => (y) => {
//          return x - y;
//       };

//       expect(subtractor(50)(10)).to.eql(40);

//       const htmlMaker = (tag) => (textContent) =>
//          `<${tag}>${textContent}</${tag}>`;
//       expect(htmlMaker("div")("code states")).to.eql("<div>code states</div>");

//       const liMaker = htmlMaker("li");
//       expect(liMaker("1st item")).to.eql("<li>1st item</li>");
//       expect(liMaker("2nd item")).to.eql("<li>2nd item</li>");
//    });
// });
