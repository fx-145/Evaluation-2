// insertion d'un élément html canvas
const canvas = document.getElementById('diceCanvas');
// initialisation du contexte et initialisation de 2 variables de coordonnées x et y
let ctx;
let x;
let y;
// Initialisation des scores current et global pour le joueur 1 et le joueur 2. C'est au joueur 1 de jouer (yourTurn = 1 )
let currentScoreP1 = 0;
let currentScoreP2 = 0;
let globalScoreP1 = 0;
let globalScoreP2 = 0;
let yourTurn = 1;
console.log(yourTurn)
// condition d'execution du code canevas si pris en charge par le navigateur, déclaration en 2d
if (canvas.getContext) {
    ctx = canvas.getContext('2d');
    // On indique au contexte de constuire un carré à 500px du top, 250px du left, 80px de largeur et 80px de hauteur
    function dice() {
        let x = 350;
        let y = 200;
        ctx.fillStyle = "#B92808";
        ctx.fillRect(x, y, 320, 320);

    }
    // dessiner les points du dé
    function drawdicepoints() {
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.fillStyle = '#FFFFFF';
        ctx.arc(x, y, 20, 0, 2 * Math.PI);
        ctx.fill();
        
    }

    //dessiner les points du dé en fonction de coordonées sur canevas
    function one() {
        dice()
        x = 510;
        y = 360;
        drawdicepoints()
    }
    
    function two() {
        dice()
        x = 430;
        y = 280;
        drawdicepoints()
        x = 590;
        y = 440;
        drawdicepoints()
    }

    function three() {
        dice()
        x = 430;
        y = 280;
        drawdicepoints()
        x = 590;
        y = 440;
        drawdicepoints()
        x = 510;
        y = 360;
        drawdicepoints()
    }

    function four() {
        dice()
        x = 430;
        y = 280;
        drawdicepoints()
        x = 430;
        y = 440;
        drawdicepoints()
        x = 590;
        y = 440;
        drawdicepoints()
        x = 590;
        y = 280;
        drawdicepoints()
    }

    function five() {
        dice()
        x = 430;
        y = 280;
        drawdicepoints()
        x = 430;
        y = 440;
        drawdicepoints()
        x = 590;
        y = 440;
        drawdicepoints()
        x = 590;
        y = 280;
        drawdicepoints()
        x = 510;
        y = 360;
        drawdicepoints()
    }
        

    function six() {
        dice()
        x = 430;
        y = 280;
        drawdicepoints()
        x = 430;
        y = 440;
        drawdicepoints()
        x = 590;
        y = 440;
        drawdicepoints()
        x = 590;
        y = 280;
        drawdicepoints()
        x = 430;
        y = 360;
        drawdicepoints()
        x = 590;
        y = 360;
        drawdicepoints()
    }

    // dessiner le point du tour joueur 1
   // function drawTurnPointP1() {
     //   ctx.beginPath();
      //  ctx.lineWidth = '5';
      //  ctx.fillStyle = 'B90808F';
      //  ctx.arc(x, y, 20, 0, 2 * Math.PI);
      //  ctx.fill();
    //}
                    
    
}
else{
    alert("ce navigateur ne supporte pas canvas")
}

//two()
//three()
//four()
//five()


// fonction de calcul aléatoire du dé entre 1 et 6
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    randomNumber = Math.floor(Math.random() * (max - min +1)) + min;
   // return randomNumber
   // console.log(randomNumber)
   
  
  
  //console.log(randomNumber)

  


  if (randomNumber === 1) { one();
  }
  if (randomNumber === 2) { two();
  }
  if (randomNumber === 3) { three();
  }
  if (randomNumber === 4) { four();
  }
  if (randomNumber === 5) { five();
  }
  if (randomNumber === 6) { six();
    return randomNumber
  
  }

}
//getRandomIntInclusive(1,6)
//console.log(randomNumber)
// dessiner le point du tour joueur 1
const canvasP1 = document.getElementById('canvasP1');
// initialisation du contexte
   let ctxP1
    if (canvasP1.getContext) {
       ctxP1 = canvasP1.getContext('2d');

// Insertion de 'Joueur 1' et de la fonction qui insére le point qui indique son tour
      ctxP1.font = '96px Lato';
      ctxP1.textAlign = 'center';
      ctxP1.textBaseline = 'middle';
      ctxP1.fillText('Player 1', 500, 200);
      function drawTurnPointP1() {
        ctxP1.beginPath();
        ctxP1.lineWidth = '5';
        ctxP1.fillStyle = 'B90808F';
        ctxP1.arc(900, 200, 40, 0, 2 * Math.PI);
        ctxP1.fill();
    }
    drawTurnPointP1()
}


  // Insérer le score global joueur 1
      function displayGlobalScoreP1(){
      ctxP1.font = '288px Lato';
      ctxP1.textAlign = 'center';
      ctxP1.textBaseline = 'middle';
      ctxP1.fillText(globalScoreP1, 500, 600);
}
    
displayGlobalScoreP1()

// Insérer le score current joueur 1
function displayCurrentScoreP1() {ctxP1.font = '96px Lato';
ctxP1.textAlign = 'center';
ctxP1.textBaseline = 'middle';
ctxP1.fillText('Current', 500, 1100);
ctxP1.textAlign = 'center';
ctxP1.textBaseline = 'middle';
ctxP1.fillText(currentScoreP1, 500, 1350);
ctxP1.strokeRect(200,1000,600,500);

}
displayCurrentScoreP1() 


// dessiner le point du tour joueur 2
const canvasP2 = document.getElementById('canvasP2');
// initialisation du contexte
   let ctxP2
    if (canvasP2.getContext) {
       ctxP2 = canvasP2.getContext('2d');

// Insertion de 'Joueur 2' et de la fonction qui insére le point qui indique son tour
      ctxP2.font = '96px Lato';
      ctxP2.textAlign = 'center'
      ctxP2.textBaseline = 'middle';
      ctxP2.fillText('Player 2', 500, 200);
      function drawTurnPointP2() {
        ctxP2.beginPath();
        ctxP2.lineWidth = '5';
        ctxP2.fillStyle = 'B90808F';
        ctxP2.arc(200, 200, 40, 0, 2 * Math.PI);
        ctxP2.fill();
    }
}
    drawTurnPointP2()


  // Insérer le score global joueur 2
  
  function displayGlobalScoreP2(){
  ctxP2.font = '288px Lato';
  ctxP2.textAlign = 'center';
  ctxP2.textBaseline = 'middle';
  ctxP2.fillText(globalScoreP2, 500, 600);
  }
  displayGlobalScoreP2()

// Insérer le score current joueur 2
function displayCurrentScoreP2() {
ctxP2.font = '96px Lato';
ctxP2.textAlign = 'center';
ctxP2.textBaseline = 'middle';
ctxP2.fillText('Current', 500, 1100);
ctxP2.textAlign = 'center';
ctxP2.textBaseline = 'middle';
ctxP2.fillText(currentScoreP2, 500, 1350);
ctxP2.strokeRect(200,1000,600,500);

}
displayCurrentScoreP2() 

  
// Cliquer sur le bouton "Roll dice" lance le dé
//document.getElementById("btn1").onclick = function() {getRandomIntInclusive(1,6)};
//document.getElementById("btn1").addEventListener("click", getRandomIntInclusive(1,6));


let btnRollDice = document.querySelector('#btn1');
let btnHold = document.querySelector('#btn2');
let btnNewGame = document.querySelector('#btn3');
function display() {
    btnHold.disabled = false;
    if (yourTurn === 1)
    {   
        getRandomIntInclusive(1,6);
        //console.log(randomNumber);
        if (randomNumber === 1) {
            ctxP1.clearRect(300,1000,400,500)
            currentScoreP1 = 0;
            displayCurrentScoreP1();
            yourTurn = 2;
            btnHold.disabled = true;
            p2Turn()

        } else{
            currentScoreP1 = randomNumber;
            ctxP1.clearRect(300,1000,400,500)
            displayCurrentScoreP1();
            yourTurn = 1;
        }
    } else {if (yourTurn === 2){
        
        getRandomIntInclusive(1,6);
        //console.log(randomNumber);
        if (randomNumber === 1) {
            
            ctxP2.clearRect(300,1000,400,500)
            currentScoreP2 = 0;
            displayCurrentScoreP2();
            yourTurn = 1;
            btnHold.disabled = true;
            p1Turn()

        } else{
            currentScoreP2 = randomNumber;
            ctxP2.clearRect(300,1000,400,500)
            displayCurrentScoreP2();
            yourTurn = 2;

    }
}
}
}

function hold() {
    if (yourTurn === 1) {
        globalScoreP1 = globalScoreP1 + currentScoreP1;
        if (globalScoreP1 < 100) {
            ctxP1.clearRect(200, 400, 550, 600);
            displayGlobalScoreP1();
            console.log(globalScoreP1);
            currentScoreP1 = 0
            ctxP1.clearRect(300, 1000, 400, 500)
            displayCurrentScoreP1()
            yourTurn = 2;
            btnHold.disabled = true;
            p2Turn()
        } else {
            ctxP1.clearRect(200, 400, 550, 600);
            displayGlobalScoreP1();
            console.log('Player 1 win!');
            btnHold.disabled = true;
            btnRollDice.disabled = true;
        }

    } else {
        if (yourTurn === 2) {
            globalScoreP2 = globalScoreP2 + currentScoreP2
            if (globalScoreP2<100){
            ctxP2.clearRect(200, 400, 550, 600)
            displayGlobalScoreP2()
            console.log(globalScoreP2)
            currentScoreP2 = 0
            ctxP2.clearRect(300,1000,400,500)
            displayCurrentScoreP2()
            yourTurn = 1;
            btnHold.disabled = true;
            p1Turn()
            } else {
                ctxP2.clearRect(200, 400, 550, 600);
                displayGlobalScoreP2();
                console.log('Player 2 win!');
                btnHold.disabled = true;
                btnRollDice.disabled = true;  
            }
        }
    }
}

function p1Turn(){
    drawTurnPointP1();
    ctxP2.clearRect(40,130,200,300)
}
function p2Turn(){
    drawTurnPointP2();
    ctxP1.clearRect(800,130,200,300) 
}
function reload(){
    window.location.reload();
}
   

btnRollDice.addEventListener('click', display);
btnHold.addEventListener('click', hold);
btnNewGame.addEventListener('click', reload);

p1Turn()