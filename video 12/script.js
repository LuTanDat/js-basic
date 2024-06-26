console.log("Hello world");


let arr = ['mu', 'mancity', 'liver', 'chelsea']

// biet so lan lap
// for (let i = 0; i < arr.length; i++) {
//   console.log('Top ', i + 1, arr[i])
// }


// chua biet so lan lap
// let i = 0;
// while (i < arr.length) {
//   console.log('Top ', i + 1, arr[i])
//   i++;
// }


// let i = 0;
// do {
//   console.log('Top ', i + 1, arr[i])
//   i++;
// } while (i < 1)


let i = 0;
let flag = false;
while (!flag) {
  console.log('Top ', i + 1, arr[i])
  i++;
  // dieu kien dung
  if (i === 10) flag = true;
}
