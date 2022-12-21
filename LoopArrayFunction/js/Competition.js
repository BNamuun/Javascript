let ateam_1 = 100;
let ateam_2 = 110;
let ateam_3 = 120;
let bteam_1 = 130;
let bteam_2 = 150;
let bteam_3 = 110;

let avg_ateam = (ateam_1 + ateam_2 + ateam_3)/3;
let avg_bteam = (bteam_1 + bteam_2+ bteam_3)/3;
console.log(avg_ateam);
console.log(avg_bteam)
if(avg_ateam >=100 && avg_bteam >=100){
    if(avg_ateam > avg_bteam){
        console.log("A bag turuulsen");
    }
    else if(avg_ateam == avg_bteam ){
        console.log("Baguud tentssen");
    }
    else{
        console.log("B bag turuulsen");
    }
    
}
else{
    console.log("Hojil bhgui");
}
