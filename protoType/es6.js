//스마트폰  ------ 통화 기능(메소드), 무게, 이름, 색깔
// 아이폰 , 갤럭시
// 아이폰 7 12, 갤럭시 8, 10

class SmartPhone {
   constructor(name, color, weight) {
      this.name = name;
      this.color = color;
      this.weight = weight;
   }
   calling() {
      console.log(this.name + "통화중");
   }
}

let galaxy3 = new SmartPhone("galaxy3", "yellow", "0.6kg");

//console.log(galaxy3);
galaxy3.name = "galaxy4";

//galaxy3.calling();
//console.log(galaxy3);

class Iphone extends SmartPhone {
   constructor(name, color, weight, price) {
      //만약 추가로 매개변수를 받고 싶다면 (price) constructor에 추가, this.price =price 추가.
      super(name, color, weight);

      this.corporation = "Apple";
      this.price = price;
   }
   text() {
      console.log(this.name + "문자중");
   }
}

let iphone7 = new Iphone("iphone7", "white", "0.5", "30000");
// console.log(iphone7.corporation);
//console.log(iphone7);
//iphone7.text();
//iphone7.calling();

class Iphone9 extends Iphone {
   constructor(name, color, weight, price) {
      super(name, color, weight, price);

      this.version = "9 version";
   }
   checkVersion() {
      console.log("아이폰" + this.version + "입니다.");
   }
}

let iphone9 = new Iphone9("iphone9", "red", "0.5", "24819");
// console.log(iphone9);
console.log(iphone9.version);
iphone9.checkVersion();
console.log(iphone9 instanceof SmartPhone); // true
console.log(iphone7 instanceof Iphone9); //false
