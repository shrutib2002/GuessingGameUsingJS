let input = document.getElementById('input');
let btn = document.getElementById('btn');
let wrng = document.querySelector('.wrng');
let guesses = document.getElementById('guesses');


let answer = Math.floor(Math.random()*100)+1;
let numG = 0;

btn.addEventListener('click',()=>{
    guessNumber();
})

function guessNumber(){
    if(input.value< 1 || input.value>100 || isNaN(input.value)){
        wrng.innerHTML = "Enter Between 1 to 100";
    }
    else{
        numG++;
        guesses.innerHTML = "Number of Guesses: "+numG;
        if(input.value>answer){
            wrng.innerHTML = "Too High";
            input.value='';
        }
        else if(input.value<answer){
            wrng.innerHTML = "Too Low";
            input.value='';
        }
        else{
            wrng.innerHTML = "You Won!";
            btn.disabled = true;
            setTimeout(()=>{
                resetGame();
            },5000);
        }
    }
}
function resetGame(){
    numG = 0;
    answer = Math.floor(Math.random()*100)+1;
    input.value = '';
    guesses.innerHTML = "Number of Guesses: 0";
    wrng.innerHTML = '';

}