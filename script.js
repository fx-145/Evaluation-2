// insertion d'un élément html canvas pour le dessin du dé
const canvas = document.getElementById('diceCanvas');
// initialisation du contexte et initialisation de 2 variables de coordonnées x et y
let ctx;
let x;
let y;
// Initialisation du tour: c'est au joueur 1 de jouer (yourTurn = 1 )
let yourTurn = 1;

// condition d'execution du code canevas si pris en charge par le navigateur, déclaration en 2d
if (canvas.getContext) {
    ctx = canvas.getContext('2d');
    // On indique au contexte de constuire un carré à 350px du top, 200px du left, 320px de largeur et 320px de hauteur
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

    
                   
    //Dessiner l'annonce du vainqueur du jeu: la fonction winner se declenchera dès que le score global atteint 100
function winner(){
    x= 0
    y= 600
    ctx.fillStyle = "#B92808";
    ctx.fillRect(x, y, 1200, 300);
    x= 500
    y= 700
    ctx.fillStyle = "#335BFF";  
    ctx.font = '120px Lato';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    if (yourTurn === 1){
     ctx.fillText('PLAYER 1 WINS!', x, y);
    } else{
     ctx.fillText('PLAYER 2 WINS!', x, y);
    }
 }
}
else{
    alert("ce navigateur ne supporte pas canvas")
}


// fonction de calcul aléatoire du dé entre 1 et 6
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    randomNumber = Math.floor(Math.random() * (max - min +1)) + min;
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

// dessiner le point du tour joueur 1
const canvasP1 = document.getElementById('canvasP1');
// initialisation du contexte
   let ctxP1
    if (canvasP1.getContext) {
       ctxP1 = canvasP1.getContext('2d');

// Insertion du point qui indique le tour de Player 1
        function drawTurnPointP1() {
        ctxP1.beginPath();
        ctxP1.lineWidth = '5';
        ctxP1.fillStyle = '#B92808';
        ctxP1.arc(1000, 200, 120, 0, 2 * Math.PI);
        ctxP1.fill();
       // drawTurnPointP1();
      }
    
} else{
    alert('ce navigateur ne supporte pas canvas')
}

class Player{
    constructor(name){
        this.name = name
        this.globalScore = 0
        this.currentScore = 0
    }
}

let player1 = new Player('Player 1')
let player2 = new Player('Player 2')



  // Insérer le score global joueur 1
     function displayGlobalScoreP1(){
        $(document).ready(function() {
           $("#scoreP1").text(player1.globalScore)})}
        displayGlobalScoreP1()


// Insérer le score current joueur 1
     function displayCurrentScoreP1() {
    $(document).ready(function() {
        $("#currentScoreP1").text(player1.currentScore)})}
     displayCurrentScoreP1() 




// dessiner le point du tour joueur 2
const canvasP2 = document.getElementById('canvasP2');
// initialisation du contexte
   let ctxP2
    if (canvasP2.getContext) {
       ctxP2 = canvasP2.getContext('2d');

// Insertion du point qui indique le tour de Player 2
        function drawTurnPointP2() {
        ctxP2.beginPath();
        ctxP2.lineWidth = '5';
        ctxP2.fillStyle = '#B92808';
        ctxP2.arc(1000, 200, 120, 0, 2 * Math.PI);
        ctxP2.fill();
        //drawTurnPointP2()
    }
}else{
    alert('ce navigateur ne supporte pas canvas')}

    


  // Insérer le score global joueur 2
  function displayGlobalScoreP2(){
    $(document).ready(function() {
       $("#scoreP2").text(player2.globalScore)})}
    displayGlobalScoreP2()


// Insérer le score current joueur 2
 function displayCurrentScoreP2() {
$(document).ready(function() {
    $("#currentScoreP2").text(player2.currentScore)})}
 displayCurrentScoreP2() 

  

let btnRollDice = document.querySelector('#btn1');
let btnHold = document.querySelector('#btn2');
let btnNewGame = document.querySelector('#btn3');
function display() {
    btnHold.disabled = false;
    if (yourTurn === 1) {
        getRandomIntInclusive(1,6);
        if (randomNumber === 1) {
            ctxP1.clearRect(300,1000,400,500)
            player1.currentScore = 0;
            displayCurrentScoreP1();
            yourTurn = 2;
            btnHold.disabled = true;
            p2Turn()

        } else{
            player1.currentScore = player1.currentScore + randomNumber;
            displayCurrentScoreP1();
            yourTurn = 1;
        }
    } else {if (yourTurn === 2){
        
        getRandomIntInclusive(1,6);
        if (randomNumber === 1) {
            player2.currentScore = 0;
            displayCurrentScoreP2();
            yourTurn = 1;
            btnHold.disabled = true;
            p1Turn()

        } else{
            player2.currentScore = player2.currentScore + randomNumber;
            displayCurrentScoreP2();
            yourTurn = 2;

    }
}
}
}



function hold() {
    if (yourTurn === 1) {
        player1.globalScore = player1.globalScore + player1.currentScore;
        if (player1.globalScore < 100) {
            //ctxP1.clearRect(200, 300, 600, 600);
            displayGlobalScoreP1();
            player1.currentScore = 0;
            //ctxP1.clearRect(300, 1000, 400, 500);
            displayCurrentScoreP1();
            yourTurn = 2;
            btnHold.disabled = true;
            p2Turn()
        } else {
            ctxP1.clearRect(200, 380, 550, 600);
            displayGlobalScoreP1();
            winner()
            btnHold.disabled = true;
            btnRollDice.disabled = true;
        }

    } else {
        if (yourTurn === 2) {
            player2.globalScore = player2.globalScore + player2.currentScore;
            if (player2.globalScore<100){
            displayGlobalScoreP2();
            player2.currentScore = 0;
            ctxP2.clearRect(300,1000,400,500);
            displayCurrentScoreP2();
            yourTurn = 1;
            btnHold.disabled = true;
            p1Turn()
            } else {
                displayGlobalScoreP2();
                winner()
                btnHold.disabled = true;
                btnRollDice.disabled = true;
                
            }
        }
    }
}

function p1Turn(){
    drawTurnPointP1();
    ctxP2.clearRect(830,80,300,300)
}
function p2Turn(){
    drawTurnPointP2();
    ctxP1.clearRect(830,80,300,300) 
}
function reload(){
    window.location.reload();
}
   

btnRollDice.addEventListener('click', display);
btnHold.addEventListener('click', hold);
btnNewGame.addEventListener('click', reload);


// Démarrage du jeu par Player 1: affichage
p1Turn()
