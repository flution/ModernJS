//객체 생성 방법

// let num = 100;
// const user = "이귀엽";
// let obj1 = new Object();
// const obj2 = new Object();

//객체의 구성 : 키, 값 사전.
//boy : "소년", girl : "소녀"

// let dic = new Object();

// dic.boy = "소년";
// dic.girl = "소녀";
// dic.friend = "친구";

// console.log(dic.boy, dic.girl, dic.friend);

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


// //객체 리터럴
// const obj = {
//     boy : "소년", //요소 하나하나를 프로퍼티라고 얘기한다. 속성값임. 프로퍼티 수정 가능.
//     girl : "소녀",
//     friend : "친구",
//     present : "현재"
// };

// rl.question('찾을 단어를 선택해주세요 : ', (key) => {
//     let word = key;
//     console.log(obj[word]);

//     rl.close();
// });

//객체,키
//객체["키"] 두개가 같다.


// console.log(obj["boy"], obj.girl, obj.friend, obj.present);

// // obj.apple = "사과";
// // obj.ten = 10;

// // console.log(obj.apple, obj.ten);

// // delete obj.girl;
// // console.log(obj.girl);


// obj = {};
// console.log(obj.present);

// obj.present = "선물";
// console.log(obj.present);

//객체의 프로퍼티와 메소드
// 변수와 함수, 프로퍼티(속성), 메소드

// 객체 리터럴에 의해 새로운 빈 객체를 생성하였다.
// const unit = {
//     attack : function(weapon){
//         return `${weapon}으로 공격한다.`;
//     }
// };

// console.log(unit.attack("총"));
// console.log(unit.attack("주먹"));


//단축 프로퍼티 : 객체의 프로퍼티 키와 값의 이름이 같은 경우.

// let id = "jamsu";
// let pw = "1111";

// //위에서 선언하고 키값과 밸류값을 같은 이름으로 사용해서 단축해버린다.
// let user = {
//     id,
//     pw
// };

// console.log(user.id, user.pw);


//for ~ in 반복문 
//왜 for in을 쓰는가? 객체 안에 들어간 type 값을 보려고.

let user = {
    id : "jamsu",
    pw : 1234,
    name : "lch",
    mobile : "010",
    contry : "대한민국"
};

for ( let info in user )
{
    console.log(`${info}, ${user[info]}`);
};