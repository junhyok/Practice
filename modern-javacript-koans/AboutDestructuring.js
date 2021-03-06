// 구조 분해 할당.
// 객체나 배열을 분해하는 거?

const arr = ["Practice", "Destructuring", "study", "hard"];

let [one, two] = arr;
// one = 'practice'
// two = 'Destructuring'

//let {one, two} = arr;
// one = undefined;
// two = undefined;
// why? arr의 타입은 배열인데 구조 분해를 하려고 하는거는 객체라서 서로 타입이 안맞기 때문에 값이 안들어간다.

//데이터를 구조 분해해서 원하는 위치로 데이터를 넣고 싶을 때 사용.
const result = [];
function foo([first, second]) {
   result.push(second);
   result.push(first);
}

foo(arr);
//console.log(result);
// expect(result).to.eql(["Destructuring", "Practice"]);

let [first, ...second] = arr; //rest parameter를 사용. 의미는 first를 제외한 나머지 파라미터들을 가리킨다.
// one = 'practice'
// two = ['Destructuring','study','hard']
// ...two === Destructuring, study, hard
//console.log(first);
//console.log(second);
//console.log(...second);         //spread syntax를 사용. 의미는 배열을 열거해준다고 생각.

function foo10(a, last, ...rest) {
   // function foo10(a, ...rest,last)
   // 주의! rest parameter 다음으로 쉼표를 사용하여 인자값을 더 받을 수 없다.
   return `${rest}`; // ?
   //a 와 last에 값을 할당 안해줘도 자동으로 인식한다.
   //리턴문 안에서는 spread syntax를 사용할 수 없다.
}

console.log(foo10(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13));
