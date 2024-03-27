let score=0;
let cross=true;
let socreUpd=document.querySelector('.score')
let audio= new Audio("music.mp3")
let audiogo = new Audio("gameover.mp3")
setTimeout(() => {
    audio.play();
}, 1000);
document.onkeydown= function(e){
    let dino=document.querySelector(".dino")
    if(e.keyCode==38){
    dino.classList.add("animateDino");
    setTimeout(() => {
        dino.classList.remove('animateDino')
    }, 700);
    }
    if(e.keyCode==37){
        console.log(e.keyCode)
        dx= parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=(dx-112) + "px";
        }
        if(e.keyCode==39){
            console.log(e.keyCode)
            dx= parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
            dino.style.left=dx + 112 + "px";
            }
   
}

setInterval(() => {
    
    let dino=document.querySelector('.dino');
    let dragon=document.querySelector('.dragon');
    let gameOver=document.querySelector('.gameOver');
// geting values of dino class
    dx= parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    dy= parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    // console.log(dx,dy)
// getting values of dragon class
    ox= parseInt(window.getComputedStyle(dragon,null).getPropertyValue('top'));
    oy= parseInt(window.getComputedStyle(dragon,null).getPropertyValue('left'));

    offsetY=Math.abs(dx-ox)
    offsetX=Math.abs(dy-oy)
    if(offsetY< 53 && offsetX<113){
        dragon.classList.remove("dragonAni");
        gameOver.style.visibility="visible";
        audiogo.play();
        setTimeout(() => {
            audiogo.pause()
            audio.pause()
        }, 1000);
    }
    else if(offsetX<145 && cross){
        score+=1;
        udpateScore(score);
        cross=false;
        setTimeout(() => {
            cross= true;
        }, 1000);

    }
}, 10)

function udpateScore(score){
   socreUpd.innerHTML="Your Score is :" + score;

}