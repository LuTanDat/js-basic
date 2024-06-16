console.log("Hello world".toUpperCase());

let a = 5;
let b = 6;
let d = '5';
let e = Number(d); // or let e = +d

console.log(a + b);//11

// cong vs chuoi thi convert qua chuoi
console.log(a + d);//55

// tru nhan chia convert qua so, roi moi tinh
console.log(a - d);//0
console.log(a * d);//25

console.log(a === d, typeof a, typeof d);

console.log('e value: ', e, 'type: ', typeof e);