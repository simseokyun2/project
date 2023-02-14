// 간단한 변수 타입지정가능

let 이름: string = 'Sim'
let 나이: number = 27;
let 출생지역: string = '강릉';

let 아티스트: { song: string, singer: string } = { song: 'as it was', singer: 'harry styles' }





let project: { member: string[], days: number, started: boolean } = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
}

type 내타입 = string | number;

let 이름4: 내타입 = 123;

function 함수(x: number) {
    return x * 2
}






// object 안 나이 지정

