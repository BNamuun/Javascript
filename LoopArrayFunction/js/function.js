// let min  = 1000;
// // let sortedArr =[]
// // let find = 0;
// const ar = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20];
// // function arraySorter(ar){
//     for(let i = 0; i <ar.length; i++)
//     {
//         for(let j = 0; j < ar.length ; j++)
//         {
//             if(min >= ar[j]){
//                 min = ar[j]
//                 ar.splice(ar[j],1)
//             }
//         }
//     }
// }s

// console.log(arraySorter(ar));
// console.log(min);


// const arr = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20];
// let sorted = 0;
// for(let i = 0; i < arr.length; i++){
//     for( let j =i+1; j < arr.length; j++){
//         // debugger;
//         if(arr[i] > arr[j]){
//             sorted = arr[i]
//             arr[i] = arr[j]
//             arr[j] = sorted
//             for(let jj = 0; jj< arr.length; jj++){
//                 console.log(arr[jj]);
//             }
//         }
//     }
// }
// for(let k = 0; k < arr.length; k++){
//     console.log(arr[k]);
// }



// Gonchigsumlaa, нийт төлөх төлбөр  олдог функц
// function TotalFee(x){
//     // let x = Number(prompt("хоолны дүнг оруулна уу"))
//     let nemegdel = 0;
//     percent_15 = 15;
//     percent_20 = 20;
//     let Total  = 0;
//     if(x>=5000 && x<=30000){
//         nemegdel = (x * percent_15)/100;
//         Total = x + nemegdel;
//         console.log(`Tаны төлөх төлбөр ${Total}`);
//     }
//     else if(x > 30000){
//         nemegdel = (x * percent_20)/100;
//         console.log(`Tаны төлөх төлбөр ${x + nemegdel}`);
    
//     }
//     else{
//         console.log(`Таны төлөх төлбөр ${x}`);
//     }
// }
// TotalFee(100000); 

// Гончигсумлаа, нэмэгдэл төлбөр олдог функц
// function addFee(y){
//     let nemegdel = 0;
//     percent_15 = 15;
//     percent_20 = 20;
//     let Total  = 0;
//     if(y>=5000 && y<=30000){
//         nemegdel = (y * percent_15)/100;
//         console.log(`Tаны нэмэгдэл төлбөр ${nemegdel}`);
//     }
//     else if(y > 30000){
//         nemegdel = (y * percent_20)/100;
//         console.log(`Tаны нэмэгдэл төлбөр ${nemegdel}`);
    
//     }
//     else{
//         console.log(`Таны нэмэгдэл төлбөр ${'0'}`);
//     }
// }
// addFee(350000); 

   

