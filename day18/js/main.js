// // Fibonacci
// n = 8;
// a1 = 0;
// a2 = 1;
// let sum = 0;
// for(let i = 0; i < n; i++){
//     sum = a1 + a2;
//     a1 = a2;
//     a2 = sum;
//     console.log(sum);
// }


// Pascal's triangle
n = 3
var output = new Array(n)
for(let i = 0; i < n; i++){
    // console.log(1);
 output[i] = new Array(n);
    for(let j = 0; j < i + 1; j++){
        output[i][j] = 1
    }
}
console.log(output);

// let tictactoe = 
// [   ['x', 'o', 'x'], 
//     ['o', 'o', 'x'], 
//     ['x', 'x', 'o'] 
// ];
// console.log(tictactoe);
// console.log(tictactoe[1])
// console.log(tictactoe[1][1])

// tictactoe[0][1] = '1';

// // input -ээр тухайн tictactoe-ийн баганын болоод мөрийн индэксийг 
// // дарааллуулж аваад 3 дахь удаад нь юугаар солихийг нь өгнө.

// console.log('for loop with for loop')
// // tictactoe-ийн бүх мөрний элементүүдийг хэвлэж харуулна уу
// for(let i = 0; i < tictactoe.length; i++) {
//     // console.log(tictactoe[i]);
//     // double FOR loops
//     let output = ''
//     for(let j = 0; j < tictactoe[i].length; j++) {
//         output = output + "| " +  tictactoe[i][j] + " |";
//     }
//     console.log(output);
// }

