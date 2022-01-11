let userselection;
let playerscore = 0;
let compscore = 0;
let rounds = 0;
let btn1 = document.querySelector('.btn1') ;
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
btn1.addEventListener('click', function fire () { 
     userselection = "fire";
     if(rounds < 5 ){
       gameplay();
       return userselection;
     }
});
btn2.addEventListener('click', function water () { 
     userselection = "water";
     if(rounds < 5 ){
        gameplay();
        return userselection;
      }
 });
btn3.addEventListener('click', function sand () { 
     userselection = "sand";
     if(rounds < 5 ){
        gameplay();
        return userselection;
      }
});

function gameplay(){
    var arrayselection = ['fire','water','sand'];
    var compselection = arrayselection[Math.floor(Math.random() * arrayselection.length)];
    console.log(compselection)
    if (compselection == userselection) {
        alert("Draw") ;
    }
    else if(
        (userselection == 'fire' && compselection == 'water') ||
        (userselection == 'water' && compselection == 'sand') ||
        (userselection == 'sand' && compselection == 'fire')
      ) {
          alert("winner")
          playerscore++;
          rounds++;

      }
      
      else {
        alert("loser");
        compscore++;
        rounds++;
    }
      document.getElementById("rounds").innerHTML = "ROUNDS  " + rounds + "/5";
      document.getElementById("userscore").innerHTML = "Your Score = " +  playerscore;
      document.getElementById("compscore").innerHTML = "Computer Score = " + compscore;
   
}


