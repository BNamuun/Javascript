let pick = document.getElementsByClassName('products')[0]
let colors = document.getElementsByClassName('colors')[0]
let blue = colors.getElementsByClassName('blue')[0];
let white = colors.getElementsByClassName('white')[0];
let black = colors.getElementsByClassName('black')[0];
 let fimg = pick.getElementsByTagName('img')[2]
//  black.getElementsByTagName('img')[1].add('active')
//  console.log(fimg);
//  fimg.src = 'img/t-2.jpg'
black.addEventListener('click', selectBlack)
function selectBlack(){ 
    pick.getElementsByTagName('img')[0].classList.remove('active')
    pick.getElementsByTagName('img')[0].classList.add('disactive')
    pick.getElementsByTagName('img')[1].classList.remove('disactive')
    pick.getElementsByTagName('img')[1].classList.add('active')
    pick.getElementsByTagName('img')[2].classList.remove('active')
    pick.getElementsByTagName('img')[2].classList.add('disactive')
}
white.addEventListener('click', selectWhite)
function selectWhite(){ 
    pick.getElementsByTagName('img')[0].classList.remove('active')
    pick.getElementsByTagName('img')[0].classList.add('disactive')
    pick.getElementsByTagName('img')[1].classList.remove('active')
    pick.getElementsByTagName('img')[1].classList.add('disactive')
    pick.getElementsByTagName('img')[2].classList.remove('disactive')
    pick.getElementsByTagName('img')[2].classList.add('active')
}
blue.addEventListener('click', selectBlue)
function selectBlue(){ 
    pick.getElementsByTagName('img')[0].classList.remove('disactive')
    pick.getElementsByTagName('img')[0].classList.add('active')
    pick.getElementsByTagName('img')[1].classList.remove('active')
    pick.getElementsByTagName('img')[1].classList.add('disactive')
    pick.getElementsByTagName('img')[1].classList.remove('active')
    pick.getElementsByTagName('img')[1].classList.add('disactive')
}