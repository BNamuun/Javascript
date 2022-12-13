let n = Math.floor(Math.random() * 20) + 1;
const buttons = document.getElementsByTagName('button');
const resetbtn = document.getElementsByTagName('button')[1];
let scoreEl = document.getElementsByClassName('score')[0];
const Val = document.getElementsByTagName('input')[0];

const messageEl = document.getElementsByClassName('message')[0];
const Highscore = document.getElementsByClassName('highscore')[0];
function CheckNum(){
  let score = Number(scoreEl.innerHTML) 
  const InpVal = Number(Val.value);
  const highEl = Number(Highscore.innerHTML);
  if (isNaN(InpVal)){
    messageEl.innerHTML = 'Тоо оруулна уу!'
  } 
  else{
    if (InpVal > n)
   {
     if(score - 1 == 0){
       afterLose();
     }else{

       messageEl.innerHTML = 'Их байна';
     } 
       
     scoreEl.innerHTML = score - 1; 
      }
    else if (InpVal < n)
    { 
      if(score - 1 == 0){
        afterLose();
      }
      else{
        messageEl.innerHTML = 'Бага байна';
      }
      scoreEl.innerHTML = score - 1; 
    }
    else 
    {
      
      messageEl.innerHTML = 'Зөв таалаа';
      document.body.style.backgroundColor = 'coral'
      buttons[1].style.display = 'none'
      if(score > highEl){
        Highscore.innerHTML = score;
      }
    }
  
  }
  function afterLose(){
    messageEl.innerHTML = 'Та хожигдлоо';
    buttons[1].style.display = 'none' 
  }
}
function ResetGame() {
    n = Math.floor(Math.random() * 20) + 1;
    document.body.style.backgroundColor = '#222'
    scoreEl.innerHTML = 20;
    Val.value = ''
    messageEl.innerHTML = 'Тааж эхлээрэй'
    resetbtn.style.display = 'block'
}