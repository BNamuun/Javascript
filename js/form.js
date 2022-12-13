
// const num = 10;
// let output = '';

// for(i = 1; i <= num; i++){
//     // output = "*"
//     // console.log(output);
//     for(j =1; j <= num; j++){
//         if(i == 1 || i == num) {

//             output += "* "
//         }
//         if(j == 1){
//             output += "* "
//         }
//     }
//     output += '\n'
// }
// console.log(output);


const num = 9;
let output = ''

for(let i = 1; i <= num; i++){
    for(let j = 1; j <= num; j++){
        if(i ==1 || i ==num || j==1 || j ==num || i==j || i == num + 1 - j) {
            output += "* "
        }
        else{
            output += "  "
        }
    }
    output += '\n'
}
console.log(output);