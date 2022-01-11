
console.log("hi");
let name=prompt("what ur name");
console.log("hello",name ,"nice to see you");
function gameplay(){
    let sure=prompt("Ready To Play");
    if (sure === "yes" || sure === 'y'|| sure ==="sure" || sure === 'yeah' || "ye"){
        console.log('g');
        var arrayselection = [('r','R'),('p','P'),('s' ,'S')];
        var compselection = arrayselection[Math.floor(Math.random() * arrayselection.length)];
        alert("rock = r,paper = p and scissor = s");
        let playerselection=prompt("enter your choice");
        alert("computer choosed", compselection);
        if(playerselection == compselection){
            alert(" u both chose same") ;
            }
        else {
            if (playerselection == ("p",'P')) {
                if (playerselection == ('P','p') & compselection == ('R','r')) {
                    alert("Paper beats rock , hence u win");
                }
                else if (playerselection == ('P','p') & compselection == ('s','S')) {
                    alert("scissor beats paper , hence u lose");
                }
            }
            else if (playerselection == ("r",'R')) {
                if (playerselection == ('r','R') & compselection == ('p','P')) {
                    alert("Paper beats rock , hence u lose");
                }
                else if (playerselection == ('r','R') & compselection == ('s','S')) {
                    alert("rock beats scissor , hence u win"); }
            
            else if (playerselection == ("s",'S')) {
                if (playerselection == ('s','S') & compselection == ('p','P')) {
                    alert("scissor beats paper , hence u  win");
                }
                else if (playerselection == ('s','S') & compselection == ('r','r')) {
                    alert("rock beats scissor , hence u lose");
                }
        }

        }

            }
        
    }
    else {
        alert("ok see u next time u want to play the game");
    }}

gameplay() 
