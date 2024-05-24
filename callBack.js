order = (callback) => //콜백은 함수포인터다.
    {
        callback(); //함수포인터의 주소값으로 호출한다.
    }

const coffee = () =>
    {
        console.log("주문하신 아메리카노 나왔습니다.") //이벤트 리스너는 죄다 콜백함수다.
    }

setTimeout(coffee, 3000); // 단 한번만 호출.
/// setInterval // 주기적으로 호출하는 아이

//이벤트 리스너 = 콜백함수 // solid 원칙 말고, 여러개의 이벤트를 할 수 있도록 만듦.
//addEventListener(이벤트명, 콜백함수)

