console.log('functions');

// 1. f(x,y) = x^2 + y^2
function f1(x,y){
    console.log(Math.pow(x, 2) + Math.pow(y, 2));
}
// calling the f1 funciton

f1(3,4);
// console.log(f1);

// 2. Calling th f2 function 
function f2(x){
    console.log(x, Math.E);
}
f2(1);
// console.log(f2);

//  3. Calling the f3 function
 function f3(a, b){
    console.log(Math.pow(a, 2) + Math.pow(b, 2));
 }
 f3(2, 3);

 // 4. Calling th f4 function 

 function f4(y){
    console.log(Math.sqrt(Math.pow(y,2) + Math.pow(y, 2)));
 }

 f4(2)
 // 5. Calling the f5 function

function f5(y){
    console.log(Math.pow(y,2) - 2 * y + 4);
}
f5(2)

 // 6. Calling the f6 function
 function f6(a, b){
    console.log(a - b*(Math.pow(a,2) + Math.pow(b,2) - a));
 }
 f6(2,3)

  // 7. Calling the f7 function
function f7(a,b){
    console.log(2 * (a + b));
}
f7(3, 4)

// 8. Calling the f8 function
function f8(a,b){
    console.log(Math.pow((a + b),2));
}
f8(2, 2)

// 9. Calling the f9 function
function f9(a, b){

    console.log(Math.pow(a,2) - Math.pow(b,2));
}
f9(2, 3)

// 10. Calling the f10 function 
function f10(a,b){
    console.log(a * b);
}
f10( 3, 4)

// 11. Calling the f11 function
function f11(a, b){
    console.log(3 * Math.pow((a*b),2));
}
f11(3,4)

// 12. Calling the f12 function
function f12(x, y){
    console.log(3 * Math.pow(x,3) - 2 * Math.pow(y,3));
}
f12(2, 3)

// 13. Calling the f13 function

function f13(a,b){
    console.log(a / b);
}
f13(10,2)

// 14. Calling the f14 function
function f14(y){
    console.log(Math.pow(y,3) - 3 * Math.pow(y,2) + 8);
}
f14(3)

// 15. Calling the f15 function
 function f15(x, y){
    console.log(Math.pow((1/x),2) - Math.pow((1/y),2));
 }
 f15(2,2)

// 16. Calling the f16 function
function f16(x,y){
    console.log(Math.sqrt(Math.pow(x,2) - Math.pow(y,2)));
}
f16(2,1)

// 17. Calling the f17 function
function factorial(x){
    let multiplication = 1;
    for(let i =1; i<=x; i++){
        multiplication = multiplication *i;
    }
    console.log(multiplication);
}
factorial(5)
// 18. Calling the f18 function

function E(m,c){
    console.log(m * Math.pow(c,2));
}
E(2,3)

function myFunction(p1, p2){
    // console.log(p1 + p2);
    return p1 + p2
}
console.log(myFunction(2,3 )); 

function isEven(number){
    if(number%2 == 0){
        return 'Even'
    }
    else{
        return "Odd"
    }
}
console.log(isEven(10)); 
console.log(isEven(5)); 

function isEven(number){
    if(number%2 == 0){
        return 'Even'
    }
    else{
        return "Odd"
    }
}
console.log(isEven(10)); 
console.log(isEven(5)); 

//  find highest value
function findMax(a,b){
    let max =  0;
    if(a > b){
        max = a;
    }
    else{
        max = b;
    }
    return max
}
console.log(findMax(10,5));

let maxVal = function(a,b){
    if(a>b){
        return a
    }
    else{
        return b
    }
};
console.log(maxVal(5,15)); 

let maxValue = (a,b) => {
    if(a>b){
        return a
    }
    else{
        return b
    }
};
console.log(maxValue(20,15)); 
