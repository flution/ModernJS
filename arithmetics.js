// console.log('긴급출동' + 119); // 긴급출동119(문자+숫자 합쳐짐)
// console.log(+"1024"+1); // 1025 (앞에 연산자를 더하면 타입캐스팅이 됨)
// console.log(+true); // 1 (truty는 1취급)
// console.log(+false); // 0  (falsy는 0취급)
// console.log('10' - 2); // 8 (문자 - 숫자 = 자동 숫자로 변환)

// // +=, -=, *=, /= 복합 할당 연산자 사용한다

// let a = 3;
// a += 2;
// console.log(a); // 5

// 증감 연산자 a++ ++a (전열 연산/후열 연산)

// 동등 연산자 == 와 일치 연산자 === (동등과 엄격함)
// let size1 = 1024;
// let size2 = '1024';

// console.log(size1 == size2); // true
// console.log(size1 === size2); // false

// console.log(300 > '200'); // true
// console.log('10' > 9); // true
// console.log(true == '1'); // true
// console.log(false == 1); // false

// null,  undefined

// console.log(null == undefined);  // true
// console.log(null === undefined); // false

// 삼항 연산자
// 조건 ? value1(true) : value2(false);

// let age = 30
// let result = age >= 19 ? "성인입니다." : "미성년입니다.";
// console.log(result);
// age = 17;
// console.log(result); //그러나 콜바이레퍼런스기 때문에 바뀌지 않는다.

// 논리 연산자

// console.log(true || true); // true 
// console.log(true || false); // false
// console.log(false || false); // false

// let id = 'jamsuham';
// let pw = '1111';

// let result = (id == 'jamsuham' && pw == '1112') 
// ? "로그인 되었습니다." : "아이디 또는 비밀번호를 다시 확인해 주십시오.";

// console.log(result); //를 또는 비밀번호를 다시 확인해 주십시오.

// and(&&)연산자의 특징은 둘 둥의 하나가 false면 무조건 false지만
// 양쪽이 다 true일때는 출력값을 우선해 출력한다.
// console.log(false && 'jamsuham'); //false
// console.log(true && '80'); //jamsuham // 환경구성할때 다시 설명해주겠다.

// let age = 30;
// let result = (age > 65 || age < 7) ? "지원 대상입니다." : "지원 대상이 아닙니다."
// console.log(result);

// console.log(!0) //true
// console.log(!1) //false

// nullish 병합연산자 '??' = 유효성 체크

// let id = 'jamsuham';
// let pw = '1111';

// let result = (id !== null  && id !== undefined) ?
// let result = (id ?? null) ?
// "아이디가 입력 되었습니다." : "아이디를 다시 확인해 주십시오.";
// console.log(result);

// 연산자 우선순위 : 증감/등위/논리/비트/비교/대입 등등..
// 2 * (3 + 4) = 14.
// 2 * 3 + 4 = 10.
// 2 + 3 * 4 = 14.

// 조건문
