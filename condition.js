// 입출력 기본기.
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('프로그래밍 언어를 입력하시오 : ', function(data){
//     console.log('가장 좋아하는 언어는 : ' + data + '입니다');
//     rl.close();
// })

// 짝수 홀수 판별 알고리즘
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('정수를 입력하세요 : ', function(num){
//     num % 2 == 0 ? console.log('짝수입니다.') : console.log('홀수입니다.');
//     rl.close();
// })


//나이 판별 알고리즘
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('나이를 입력하세요 : ', function(age){
//     if(age > 19 && age < 65){
//         console.log("성인입니다.")
//     }else if(age >= 65){
//         console.log("어르신입니다.")
//     }else if(age >= 0 && age < 20){
//         console.log("미성년자입니다.")
//     }else{
//         console.log("올바른 값을 입력하세요.")
//     };
//     rl.close();
// })

//드라이브 포맷
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('C 드라이브를 포맷하시겠습니까? : ', function(ch){
//     switch(ch){
//         case 'y':
//             console.log("예, 드라이브를 포맷하겠습니다.");
//             break;
//         case 'n':
//             console.log("아니오, 드라이브를 포맷하겠습니다..");
//             break;
//         default:
//             console.log("유효하지 않은 문자입니다.");
//             break;
//     }
//     rl.close();
// })

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('주문하신 커피를 입력해주세요 : ', function(coffee){
    switch(coffee){
        case '아메리카노':
            console.log("주문하신 아메리카노 나왔습니다.");
            break;
        case '카페라떼':
            console.log("주문하신 카페라떼 나왔습니다.");
            break;
        case '카페모카':
            console.log("주문하신 카페모카 나왔습니다.");
            break;
        default:
            console.log("유효하지 않은 문자입니다.");
            break;
    }
    rl.close();
})