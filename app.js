const p1 = {
    score : 0,
    display : document.querySelector('#p1display'),
    button : document.querySelector('#p1button')
}
const p2 = {
    score : 0,
    display : document.querySelector('#p2display'),
    button : document.querySelector('#p2button')
}


const goal = document.querySelector('#goal')
let goalNum = 3;
let isGameOver = false;
const resetbtn = document.querySelector('#reset')

goal.addEventListener('change', function(){
    goalNum = parseInt(this.value);
    reset();
})


function updatedScore(player, opponent){
    if(!isGameOver){
        player.score += 1;
        player.display.textContent = player.score; 
        if(player.score === goalNum){
            player.button.classList.add('has-text-success');
            opponent.button.classList.add('has-text-danger');
            isGameOver = true;
        }
    }   
}

function reset(){
    isGameOver= false;
    for (let i of [p1,p2]){
        i.score = 0;
        i.display.textContent = 0;
        i.button.classList.remove('has-text-success','has-text-danger');
    }
}



p1.button.addEventListener('click',function(){
    updatedScore(p1,p2);
})
p2.button.addEventListener('click',function(){
    updatedScore(p2,p1);
})

resetbtn.addEventListener('click',reset)