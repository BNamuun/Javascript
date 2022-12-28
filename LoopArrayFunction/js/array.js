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
// let numbers =[1, 2, 3, 4, 3,  1]


// // duplicate counter
// let numbers = '12343155'
// let numToTen = [1,2,3,4,5,6,7,8,9]
// let dublicated = 0;
// let count = 0;

// for(let i = 0; i  <numToTen.length; i++)
// {
//     for(let j = 0; j < numbers.length ; j++)
//     {
//         if(numToTen[i] == numbers[j]){
//             // dublicated = numbers[i]
//             count +=1
//         }
//     }
//     console.log(`${numToTen[i]} : ${count} `);
//     count = 0;
// }



// // Count word
// let input = prompt('Хайх үгээ оруулна уу: ')
// let data = ['Засгийн', 'газарт', '6.4', 'сая', 'тонн', 'нүүрс', 'алдагдсан',
//  'гэх', 'мэдээлэл', 'ирээгүй', 'байна.', 'Бодит', 'байдалд', 'ийм', 'их', 'хэмжээний', 
//  'нүүрс', 'алдагдсан', 'гэх', 'асуудал', 'эргэлзээтэй', 'байна.', 'Хууль', 'хяналтын', 
//  'байгууллага', 'хяналт', 'шалгалтын', 'ажил', 'явуулж', 'байна.'];

// input = input.toLowerCase();
// countWord = 0;
// for( let i = 0; i< data.length; i++){
//     if(input == data[i].toLowerCase()){
//         countWord++
//     }

// }
// if(countWord == 0){
//     alert(`Таны хайсан ${input} үг олдсонгүй, дахин оролдоно уу!`)
// }
// else{

//     console.log(`${input} гэдэг үг ${countWord} ш байна.`);
// }

 



// // Simple Array 1
// let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// for( let i = 0; i < itCompanies.length; i++){
//     console.log(itCompanies[i]);
//     console.log(`${itCompanies[i]}'s length is : ${itCompanies[i].length}`);
//     console.log(itCompanies[i].toUpperCase());
// }
// console.log(itCompanies[0]);
// console.log(itCompanies[Math.floor(itCompanies.length/2)]);
// console.log(itCompanies[itCompanies.length - 1]);


// let Sentences = ''
// for( let j = 0; j < itCompanies.length; j++){
//     Sentences += itCompanies[j] + ', '
// }
// console.log(`${Sentences} зэрэг мэдээллийн технологийн томоохон компаниуд`);


// Simple Array 2
// Array - ын хувьсагчийг itCompanies гэж зарлаж, Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon зэрэг анхны утгыг оруулна уу.
// Array - аас эхний 3 компанийг хайчилж ав
// Array - аас сүүлийн 3 компанийг хайчилж ав
// Мэдээллийн технологийн дунд компани эсвэл компаниудыг arrey - аас хайчилж ав
// Эхний мэдээллийн технологийн компанийг array - аас хас
// Сүүлийн мэдээллийн технологийн компанийг array - аас хас

// let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// let firstTh = itCompanies.slice(0,3)
// console.log(firstTh);
// console.log(itCompanies.slice(4,itCompanies.length));
// console.log(itCompanies[3]);
// itCompanies.shift();
// console.log(itCompanies);
// itCompanies.pop();
// console.log(itCompanies);



// 1. arrayOfNumbers гэсэн variable зарлаад дараах тоонуудыг оруул. 43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11
// 2. Array доторх тоонуудын нийлбэрийг ол.
// 3. Хамгийн их тоог ол.
// 4. Хамгийн бага тоог ол.
// 5. Array - ийн эхэнд дурын 1 тоог нэм.
// 6. Array - ийн төгсгөлд дурын 1 тоог нэм.
// let arrayOfNumbers = [3, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11]
// let sum = 0;
// for( let i = 0; i< arrayOfNumbers.length; i++){
//     sum = sum + arrayOfNumbers[i]
// }
// console.log(sum);
// let maxval = arrayOfNumbers[0]
// for( let j = 0; j< arrayOfNumbers.length; j++){
//     if(maxval < arrayOfNumbers[j]){
//         maxval = arrayOfNumbers[j]
//     }
// }
// console.log(maxval);

// let minVal = arrayOfNumbers[0]
// for( let j = 0; j< arrayOfNumbers.length; j++){
//     if(maxval > arrayOfNumbers[j]){
//         maxval = arrayOfNumbers[j]
//     }
// }
// console.log(minVal);

// arrayOfNumbers.push(100)
// console.log(arrayOfNumbers);

// arrayOfNumbers.unshift(500, 600)
// console.log(arrayOfNumbers);


// // davhardsan utga 
// let arr = [4, 2, 34, 4, 1, 12, 1, 4];
// let array = []
// for( let i = 0; i < arr.length; i++){
//     for( let j = i + 1; j < arr.length; j++){
//            if(arr[i] === arr[j]){
//                 let dublicated = false;

//                 for(let k = 0; k < array.length; k++){
//                     if(arr[i] === array[k]){
//                         dublicated = true;
//                     }
//                 }
//                 if(!dublicated){
//                     array.push(arr[i])
//                 }
//             }
        
//     }
    
// }
// console.log(array);



// Routine
// let activities = [['Aжил', 10], ['Идэх', 1], ['Ярилцах', 2], ['Тоглох', 3], ['Унтах', 3]]
// console.table(activities);
// let x = [];
// let percent = 0;
// for(i =0; i < activities.length; i++){
//     // x[i] = activities[i][1];
//     x[i] = Math.floor((activities[i][1]*100)/24);  
//     // console.log(x[i]);
//     activities[i][2] = x[i] + '%';
// }

// console.table(activities);



// //Pascaliin gurvaljin

// const n = Number(prompt('Паскалын гурвалжин хэвлэх мөрийн тоог оруулна уу: '));

// //2 hemjeest array uusgeh 
// const a = new Array(5)
// for(let i = 0; i < n; i++){
//     a[i] = new Array(n)
// }
// // initial value
// a[0][0] = 1;
// // pascaliin gurvaljin uusgeh
// for(let i = 1; i < n; i++){
//     for(let j = 0; j < i + 1; j++){
//         a[i][j] = sum(a[i - 1][j], a[i - 1][j - 1])
//     }
// }

// function sum(a = 0, b = 0){
//     return a + b;
// }

// let result = ''
// for( let i = 0; i< n; i++){
//     for(let j = 0; j < n - i - 1; j++){
//         result += ' ';
//     }
//     for(let j = 0; j < i + 1; j++){
//         result = result + a[i][j] + ' ';
//     }
//     result += '\n'
// }
// console.log(a);
// console.log(result);