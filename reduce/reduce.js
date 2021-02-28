let list = [
   [
      ["firstName", "Joe"], // list[0][0][0] === firstName
      ["age", 42], // list[0][1][0] === age
      ["gender", "male"], // list[0][2][0] === gender
   ],
   [
      ["firstName", "Mary"], // list[1][0][1] === Mary
      ["lastName", "Jenkins"],
      ["age", 36],
      ["gender", "female"],
   ],
   [
      ["lastName", "Kim"], // list [2][0][1] === Kim
      ["age", 40], // list [2][1][1] === 40
      ["gender", "female"],
   ],
];

let result = [];
list.reduce(function (acc, el) {
   let obj = {};
   el.reduce(function (acc, val) {
      obj[val[0]] = val[1];
   }, 0);
   result.push(obj);
}, 0);
console.log(result);

// let obj = function (el) {
//    let newObj = {};
//    for (let i = 0; i < el.length; i++) {
//       newObj[el[i][0]] = el[i][1];
//    }
//    return newObj;
// };

// array.sort 오름차순을 이용해서
// 새로운 배열에다가 담아서 정렬해주고
// 그 정렬한 걸 for문 돌려서 firstName + lastName

//function compareNumbers(a, b) { mdn에서 array.sort 오름차순으로 정렬하는 방법
//    return a - b;
//  }

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// function compare(a, b) {
//     if (a < b) {
//       return -1;
//     }
//     if (a > b) {
//       return 1;
//     }
//     // a must be equal to b
//     return 0;
//   }

// console.log(list.map(obj));

// let newArr = list.map(obj);
// newArr.sort(function (a, b) {
//    return a["age"] - b["age"];
// });

// console.log(newArr);

//--------------------------------------------------------------------
//[[{}]]
// let arr = [];
// let obj = {};
// let temp;
// // 배열의 0번째 인덱스가 key 1번째가 밸류
// // arr[i][j][0]<- key arr[i][j][1]<- value
// // arr.push({`${arr[i][j][0]}: ${arr[i][j][1]}`})
// for (let i = 0; i < list.length; i++) {
//    for (let j = 0; j < list[i].length; j++) {
//       // arr.push(`{list${[i][j]}[0]: list${[i][j]}[1]}`);
//       // arr.push("{" + list[i][j][0] + ":" + list[i][j][1] + "}");
//       let key = list[i][j][0];
//       let value = list[i][j][1];

//       obj[key] = value;
//       // console.log(obj);
//       if (j === list[i].length - 1) {
//          temp = obj;
//          arr.push(temp);
//          temp = null;
//          console.log(arr);
//       }
//    }
// }

// console.log(arr);

// let arr = [];
// for (let i = 1; i <= 10000000; i++) {
//   arr.push({
//     id: i,
//     name: `사람 ${i}번`
//   });
// }
// console.log(arr);
/*
[
  { id: 1, name: '사람 1번' },
  { id: 2, name: '사람 2번' },
  { id: 3, name: '사람 3번' },
  { id: 4, name: '사람 4번' },
  { id: 5, name: '사람 5번' },
  { id: 6, name: '사람 6번' },
  { id: 7, name: '사람 7번' },
  { id: 8, name: '사람 8번' },
  { id: 9, name: '사람 9번' },
  ...
  { id: 10000000, name: '사람 10000000번' }
]
*/
