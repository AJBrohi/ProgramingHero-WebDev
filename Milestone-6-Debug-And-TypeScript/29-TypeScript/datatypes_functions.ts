let age: number = 50;
let club: string = 'Real Madrid';
const isFamous: boolean = true;

function add(num1: number, num2: number) {
    return num1 + num2;
}

add(3, 2);

function add1(num1: number | string, num2: number | string) {
    // return num1 + num2;
} // not recommended


add1('adam', 'sand');

function doubleItAndConsole(num: number){
    const result = num * 2;
    console.log(result);
}

doubleItAndConsole(10);


let multiply2:(x: number, y: number) => number;

multiply2 = (x,y) => x * y;

multiply2(5,6);