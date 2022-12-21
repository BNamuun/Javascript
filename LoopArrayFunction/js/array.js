// // even and odd
// let arr = [5 ,6,  4 , 12 , 19, 121, 1, 7, 9, 63];
// let even =[];
// let odd = [];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2 ==0){
//         even +=' ' +  arr[i]
//     }
//     else{
//         odd +=' ' + arr[i]
//     }
// }
// console.log(even);
// console.log(odd);




// // Massiv urjver

// let arr1 = [3, 45, 23, 78, 34]
// let arr2 = [4, 2, 34, 4, 12, 1]
// let array = []
// for(i = 0; i<arr1.length; i++){
//     array [i] = arr1[i] * arr2[i];
// }
// console.log(array);

// Duplicate counter
let numbers =[1, 2, 3, 4, 3,  1]
let numToTen = [1,2,3,4,5,6,7,8,9]
let dublicated = 0;
let count = 0;

for(let i = 0; i  <numToTen.length; i++)
{
    for(let j = 0; j < numbers.length ; j++)
    {
        if(numToTen[i] == numbers[j]){
            // dublicated = numbers[i]
            count +=1
        }
        else{
            count += 0;
        }
        console.log(`${numToTen[i]} : ${count} `);
    }
}

