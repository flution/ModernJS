// let savedUser = '김태훈' //전역변수

// function account()
// {
//     console.log('account 함수 진입');
//     let savedUser = '정다은' // 지역변수
//     console.log('account 함수 탈출');
// }

// function account2()
// {
//     console.log('account2 함수 진입');
//     let savedUser = '김종현' // 지역변수
//     console.log('account2 함수 탈출');
// }

// function account3()
// {
//     var savedUser = '박효은'; // 1번 지역변수 절차가 먼저 선언해주면 가 뜸.
//     console.log('반갑습니다.' + savedUser + ' 님'); // var로 선언해주면 undefined가 뜸.
//     var savedUser = '박효은'; // 2번 var로 선언해주면 undefined가 뜸.
// }

// account3();
// console.log('반갑습니다.' + savedUser + ' 님');

var userName = '김세현';
var userPw = '1234';

function account(userId, userPw) // 디폴트 값이 있다면 좋은점?
//굳이 내가 신경 쓸 필요가 없어짐. 그러나 없다면 피곤해진다.
{
    console.log(userId);
    console.log(userPw);

    var saveName = '김세현';
    var savePw = '1111';

    // if(userpw == undefined) //유저 패스워드가 알수없으면 1111이야.(디폴트처리)
    //     {
    //         userpw = '1111';
    //     }

    userPw = userPw || '1111'; //suserpw가 false일때 1111을 자동 삽입한다.

    if(userId == saveName)
    {
        if(userPw = savePw)
            {   
                console.log("반갑습니다 " + userId + "님.");
            }
        
    }
}

// account(userName, userPw); // 가능
// account(userName); // 가능
account() // 가능

// C#에서 매개변수를 미리 설정해놓고 하나만 맞으면 OK 처리 한다.
