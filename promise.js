const id = 'jamsu'; //아이디 입력을 이렇게 했다고 생각
const pw = '1111'; //비밀번호 입력을 이렇게 했다고 생각하면

const pro1 = (pid) => //아이디 체크 기능
{
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            if(pid == 'jamsu'){
            resolve('id matching success'); //해당 사항이 성공했다면
            }else{
            reject('fail')
        };
        }, 1000)
    });
}

const pro2 = (ppw) => { //비밀번호 체크 기능

    return new Promise(function(resolve, reject){
        setTimeout(function() {
            if(ppw == '1111'){
            resolve('pw matching success'); //해당 사항이 성공했다면
            }else{
            reject('fail')};
        }, 1000)
    });
}


    //then에서 받아서 result한다.
    //프로미스 체이닝.
// pro1.then(function(result){
//     console.log('result', result); //출력 : result success.
//     pro2.then(function(result){
//         console.log('result', result);
//     })
//         pro3.then(function(result){
//             console.log('result', result);
//         })
//             pro4.then(function(result){
//                 console.log('result', result);
//             })
// })

//가독성 좋게 바꾼 버전. //그러나, 만약에 reject로 처리된다면?
pro1(id)
.then(function(result){
    console.log('result1', result); //출력 : result success.
    return pro2(pw);
})
.then(function(result){
    console.log('result2', result); //출력 : result success.
})
.catch(function(err){ //이렇게 캐치가 가로채서 에러를 띄운다.
    console.log('err', err);
    return Promise.reject(err);
})


