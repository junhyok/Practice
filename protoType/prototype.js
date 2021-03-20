//스마트폰  ------ 통화 기능(메소드), 무게, 이름, 색깔
// 아이폰 , 갤럭시
// 아이폰 7 12, 갤럭시 8, 10

//prototype
let SmartPhone = function (name, color, weight) {
   this.name = name;
   this.color = color;
   this.weight = weight;

   // 내부데이터 ?
   //    return {
   //       getName: function () {
   //          return name;
   //       },
   //       getColor: function () {
   //          return color;
   //       },
   //       getWeight: function () {
   //          return weight;
   //       },
   //       calling: function () {
   //          return console.log("통화중");
   //       },
   //    };
};

SmartPhone.prototype.calling = function () {
   console.log("통화중");
};

let Iphone = function (name, color, weight) {
   //    this.price = price;
   //상속받는 쪽에서 this 설정을 해줘야한다. 안해주면 this가 undefined가 나와서 데이터를 못 가져온다.
   //SmartPhone.call(this, name, color, weight);
   SmartPhone.apply(this, arguments);
};
//상속
Iphone.prototype = Object.create(SmartPhone.prototype); // extends
// Iphone.prototype = SmartPhone.prototype  <- X
Iphone.prototype.constructor = Iphone;
Iphone.prototype.text = function () {
   console.log("문자 보내는 중");
};

// function Galaxy(name,color,weight,)
let iphoneX = new Iphone("iphoneX", "black", "0.3kg");
iphoneX.calling();
console.log(iphoneX.name);
console.log(iphoneX);

//console.log(iphoneX.calling());
// console.log(iphoneX);
// console.log(iphoneX.calling());
// console.log(iphoneX.text());

let iphone = new SmartPhone("iphone", "red", "0.5kg");
//console.log(iphone.calling());
// iphone.calling();
// iphone.getName();
// iphone.getWeight();
// console.log(iphone.getWeight());
// console.log(iphone.getName());
//console.log(iphone.calling());

// function makeCounter() {
//    let value = 0;
//    return {
//       increase: function () {
//          value++;
//       },
//       decrease: function () {
//          value--;
//       },
//       getValue: function () {
//          return value;
//       },
//    };
// }

// let counter1 = makeCounter();
// // counter1.value = 23;
// console.log(counter1.getValue());
// // counter1.increase();
// // counter1.getValue(); // 1
// // console.log(counter1.getValue());

// // let counter2 = makeCounter();
// // counter2.decrease();
// // counter2.decrease();
// // counter2.getValue(); // -2
// // console.log(counter2.getValue());
