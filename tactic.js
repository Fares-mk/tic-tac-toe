var cell=document.querySelectorAll(".cell");
var player="X";
var gameWinner=true;
var counter=0
var winner=[[0,1,2],[6,7,8],[3,4,5],[0,4,8],[2,4,6],[1,4,7],[0,3,6],[2,5,8]];
cell.forEach((cell)=> cell.addEventListener("click",  function (){
    if(cell.textContent !=="" || !gameWinner)return;
    cell.textContent=player;
    counter++;
    checkWinner();
    player=player==="X"?"O":"X";
}

))
 function  checkWinner(){
    for(let pattern of winner){
        let a=cell[pattern[0]].textContent;
        let b=cell[pattern[1]].textContent;
        let c=cell[pattern[2]].textContent;
        var winnerr=player;
        if(a!=="" &&a===b && b===c){
            setTimeout(function(){
                alert(`${winnerr} is the winner`)
            gameWinner=false;
            cell.forEach(function (c){
                c.textContent="";
                gameWinner=true;
                counter=0;
            },1000);
            });
            return;
        }
        if(counter==9 ){
            setTimeout(function(){
                alert("draw");
                cell.forEach(function (c){
                c.textContent="";
                gameWinner=true;
                counter=0; 
            },1000);
            });
            return;
        }
    }}