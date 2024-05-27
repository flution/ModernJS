// function Plus(a,b)
// {
//     return a+b;
// }

//화살표 함수로 변형하기
//01. function 부분을 지운다
//02. 함수 이름을 변수로 사용한다
//03. 오른쪽 표현식 뒤에 => 를 붙인다.
// let plus = (a,b) => a+b; //리턴문만 딸랑 있을땐 축약이 가능하다.

//매개변수가 하나인 경우.
// let plus = a => a+1; //출력 10+1

//매개변수가 아예 없는 경우
// let plus = () => "플러스";

// let result = plus();
// console.log(result);

//비구조화 할당(구조분해 할당/디스트럭쳐링) (매우매우 중요)
//객체의 속성이가 값을 캐치해서 각각의 값에 할당하기.

//배열의 변수 값 변경하기
// const color = ['red', 'green', 'blue'];

// // let r = color[0];
// // let g = color[1];
// // let b = color[2];

// let [r, g, b] = color;

// [b, g, r] = [r, g, b];

// console.log(r, g, b);


//일부 요소값을 무시하기
// const [a,b,c,d] = ["C#", "javascript", "python", "react"];

// console.log(a);
// // console.log(b);
// console.log(c);
// console.log(d);

//배열의 나머지 요소 가져오기
// const [a,b, ...rest] = ["C#", "javascript", "python", "react", "C++"];

// console.log(a);
// console.log(b);
// console.log(rest.length);
// console.log(rest[0]);
// console.log(rest[1]);
// console.log(rest[2]);

// const arr1 = ['C#', 'javascript'];
// const arr2 = ['python', 'react', "C++"];
// const arr3 = [...arr1, ...arr2];
// //새로운 힙 메모리를 생성해서 카피본을 만들어서 arr3에 결합시키는 것.

// console.log(arr3);


//객체의 비구조 할당 방법
// let {a, b}= { a :  value1, b : value2 };

let user = {
    id : 'jamsu',
    pw : '1234',
    name : 'lch',
    age : 20
};

// let id = user.id;
// let pw = user.pw;
// let name = user.name;
// let age = user.age;

// let {id, pw, name, age} = { id : 'jamsu', pw : '1234', name : 'lch', age : 20 };
let {id, ...rest} = user;

console.log(id, rest.pw, rest.name, rest.age);

//배열에서 사용한 스프레드, 객체에서도 사용 가능하다.
