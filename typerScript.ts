var userSeq:string[] = [];
var gameSeq : string[] = [];
var colors : string[] = ['yellow', 'red', 'green', 'purple'];
var startGame = false;
var level = 0;
var h3: any = document.querySelector('h3') ;

document.addEventListener('keypress', function () {
    console.log(false);
    if (startGame == false) {
        console.log('game started');
        startGame = true;
        levelUp();
    }
});

function levelUp(){ 
    userSeq=[];
    level++;
   h3.innerHTML  = `level ${level}`;
   let rdmIdx:number = Math.floor(Math.random()*4);
   let rdmColr:string = colors[rdmIdx];
    let rdmBtn: HTMLElement = document.querySelector(`.${rdmColr}`)!;
   gameSeq.push(rdmColr);
   flashBtn(rdmBtn);   
};

function flashBtn(btn: HTMLElement ):void {
    btn.classList.add('flash');
    setTimeout(
        function(){
            btn.classList.remove('flash');
        },200
    )
};

function flashBtnUser(btn){
    btn.classList.add('greens');
    setTimeout(
        function(){
            btn.classList.remove('greens');
        },200
    )
};

function btnClick(){
    if(startGame == true){
        let btn = this;
        console.log(this);
        flashBtnUser(btn);
        let userColr = btn.getAttribute('id');
        userSeq.push(userColr);
        checkAns(userSeq.length-1);
    }
};

let btns  = document.querySelectorAll('.btn');
for(let b  of btns){        
    b.addEventListener('click',btnClick);
};

function checkAns(idx){
    if (userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,500);   
        }
    }else{
        h3.innerHTML= 'Game Over! pres any key to start again.'+ ' Your score was '+level;
        const body = document.querySelector('body');
        if (body) {
            (body as HTMLElement).style.backgroundColor = 'red';
        }    
        setTimeout(function(){
              (body as HTMLElement).style.backgroundColor = 'white';
        },200);
        heighestScore();
        resetSeq();
    }
};

function resetSeq(){
    startGame = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}
                                            //  HEIGHEST SCORE
let hValue = document.querySelector('.hValue')!;
let heighestValue:number[] = [];
let heighest  = 0;
function heighestScore(){
    heighestValue.push(level);
    for (let i=0; i<= heighestValue.length; i++){
        if (heighest < heighestValue[i]){
           heighest = heighestValue[i];
        }
    }
    hValue.innerHTML = `heighest Score : ${heighest}`
}
