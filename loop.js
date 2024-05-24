// 별을 10개 출력하고 싶다.
// for(var i = 0; i < 10; i++){
//         console.log('*');
// }

// 2의 배수만 출력하고싶다
// for(var i = 2; i < 101; i+=2){
//     console.log(i);
// }

// // 1부터 10까지의 합을 출력
// let sum = 0;

// for(var i = 1; i < 11; i++){
//     sum = sum + i;
// }

// console.log(sum);

// 배터리 출력하기
// for(let i = 0; i < 101; i++)
//     {
//         console.log('충전중 : ' + i + '%');
//     }

// console.log("충전이 완료되었습니다.")

// 배터리 충전무한루프하기? //근데 이건 사실 그냥 조건 주는게 낫다. 더러운 코드임.
// var i = 0; 
// for(;;)
//     {
//         console.log('충전중 : ' + i + '%');
//         i++;
//         if(i > 101)
//             {
//                 break;
//             }
//     }

// Array 객체 만들기 두개는 배열 똑같음.
// var arr = new Array();
// var arr = [];
// let arr = ['자바스크립트', 'C언어', '파이썬'];

// console.log(arr[0]); //접근 방법은 배열의 요소의 인덱스값으로 접근한다.
// console.log(arr[1]);
// console.log(arr[2]);

// console.log(arr); //이 상태로 출력하면 배열이 통째로 기어나옴. 왜? object 형이니까.

// 배열에서 객체 다루기
// //뒤에 추가
// arr.push('ASP.NET');
// arr.push('C#.NET');
// console.log(arr);

// //뒤에 제거
// arr.pop('C#.NET');
// arr.pop('ASP.NET');
// console.log(arr);

// //앞에 추가
// arr.unshift('Java');
// arr.unshift('HTML');
// console.log(arr);

// //앞에 제거
// arr.shift('HTML');
// arr.shift('Java');
// console.log(arr);

// 개수를 신경쓰지 말고 출력하기.
// for(let i = 0; i < arr.length; i++)
//     {
//         console.log(arr[i]);
//     }

// while문으로 넘어간다
// let i = 0;
// while ( i < arr.length )
//     {
//         console.log(arr[i]);
//         i++;
//     }

// //미션 사용자로부터 단수를 입력받아서 해당 단수를 출력해라. while문 이용
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('단 수를 입력해주세요 : ', function(dan){
//     let i = 1;
//     while(i < 10){
//         console.log(dan + ' * ' + i + ' = ' + (dan * i));
//         i++
//     }
//     rl.close();
// })

//break문과 continue문
//break = 조건을 만족했으면 폭파하고 탈출해라
//continue = 조건을 만족했으면 지정된 부분까지 반복문을 돌리지 말아라.
//break의 예시
// let value = 0;
// while (true)
//     {
//         if ( value > 100)
//             break;
//         console.log('value의 값 : ' + value);
//         value++;
//     }
// console.log('value는 100보다 크다.')

//continue의 예시let value = 0;
// let value = 0;
// while (value < 10) {
//     if (value % 2 === 0) {
//         value++;
//         continue;
//     }
//     console.log('value의 값 : ' + value);
//     value++;
// }
// 삼항연산자로 바꾸기
// while(value < 10)
//     {
//         value++
//         value % 2 == 0 ?  : console.log('value의 값 : ' + value);
//     }

// 2단부터 9단까지 구구단 출력하기
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('단 수를 입력해주세요 : ', (dan) => {
// let i = 1;
// while(i < 10){
//             console.log(dan + ' * ' + i + ' = ' + (dan * i));
//             i++
//         }
//         rl.close();
//     })

// 2단부터 5단까지 출력하고, 6단부턴 빠져나가기

let dan = 2;

outside : while (dan < 10) //뒤의 숫자
    {
        let i = 1;
        while (i < 10){
            if ( dan >= 6 && i == 1)
                break outside;
            else {
                console.log(dan + " * " + i + " = " + (dan * i));
                i++;
            }
            
        }
        dan++;
    }