

// // Password field
// var secret
// const pass = 1234;

// do {
//     secret = prompt("Password: ")
// }
// while (secret != pass);
//     alert("Zov bna");


// // 1. 10 хүртэлх натурал тоог хэвлэх программ бич
//     let num = 1;
//     while (num <= 10){
//         console.log(num)
//         num++
//     }

// 2. 10 хүртэлх натурал тооны сондгой тоонуудыг хэвлэх программ бич
//  let even

//  for(even = 1; even<=10;){
//     console.log(even);
//     even = even +2
//  }





// ternary operator
// const lyr = "Mac"
// const text1 = `pad pad ${lyr},  pad pad` 
// console.log(text1);





const pass = 123;
var secret

// for(let i=1; i<=5; i++) {
//     let secret = prompt("Password")
//     if(secret == pass){
//         alert("Successfully")
//         break
//     }
//     if(i>=5){
//         alert("You are blocked")
//     }
// }
for(let i=5; i>0; i--) {
    let secret = prompt(`Enter your pass, You have ${i} chance`)
    if(secret == pass){
        alert("Successfully")
        break
    }
}
alert("you are blocked")

