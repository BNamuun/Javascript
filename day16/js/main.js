let now = new Date();
console.log( now);

let Newyear2022 = new Date('2022-12-31');
console.log(Newyear2022);

console.log(now.getDate());
let dayNow  = now.getDate();
let hourNow  = now.getHours();
let minNow  = now.getMinutes();



let day2022 = Newyear2022.getDate();
let hour2022 = Newyear2022.getHours();
let min2022 = Newyear2022.getMinutes();
console.log(Newyear2022.getDate());


console.log(`Өнөөдрөөс шинэ он гартал ${day2022 - dayNow} өдөр ${Math.abs(hour2022 - hourNow)} цаг ${Math.abs(min2022 - minNow)} минут байна` );

