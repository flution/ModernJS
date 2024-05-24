// function Plus(a, b)
// {
//     return a + b; // 함수를 종료한다, 뒤에있는 값을 바깥으로 내보낸다.
// }

// Plus = (a,b) => a + b //새로운 문법. 애로우 펑션.


// var result = Plus(10, 20);
// console.log(result);

// Week = () => {
//     console.log('Mon');
//     console.log('Tue');
//     console.log('Wed');
//     console.log('Thu');
//     console.log('Fri');
//     console.log('Sat');
//     console.log('Sun');

//     return //여기서 끝내겠다, 뒤에 있는 값을 반환하겠다 이므로 값이 없으면 끝내겠다. 만 서술
// }

// Week();

var nickName = function() 
{
    console.log('jamsu');
}

nickName();

nickName = () => 
    {
        console.log('jamsuham');
    }

nickName();

var userName = nickName;

userName();
//함수를 변수에 넣을 수 있나? yes. 변수 선언하고 값을 함수에 넣으면 된다.
//이게 콜백 아닌가?