// insertion d'un élément html canvas
const canvas = document.getElementById('diceCanvas');
// initialisation du contexte et initialisation de 2 variables de coordonnées x et y
let ctx;
let x;
let y;
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
    return randomNumber
  }
  getRandomIntInclusive(1,6)
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
  }


// dessiner le point du tour joueur 1
const canvasP1 = document.getElementById('canvasP1');
// initialisation du contexte
   let ctxP1
    if (canvasP1.getContext) {
       ctxP1 = canvasP1.getContext('2d');

// Insertion de 'Joueur 1' et de la fonction qui insére le point qui indique son tour
      ctxP1.font = '96px Lato';
      ctxP1.fillText('Joueur 1', 350, 200);
      function drawTurnPointP1() {
        ctxP1.beginPath();
        ctxP1.lineWidth = '5';
        ctxP1.fillStyle = 'B90808F';
        ctxP1.arc(900, 170, 40, 0, 2 * Math.PI);
        ctxP1.fill();
    }
    drawTurnPointP1()
}


  // Insérer le score global joueur 1
      ctxP1.font = '288px Lato';
      ctxP1.fillText('99', 280, 600);
    
  

// Insérer le score current joueur 1
ctxP1.font = '96px Lato';
ctxP1.fillText('Current', 350, 1100);
ctxP1.fillText('4', 400, 1400)
    

// dessiner le point du tour joueur 2
const canvasP2 = document.getElementById('canvasP2');
// initialisation du contexte
   let ctxP2
    if (canvasP2.getContext) {
       ctxP2 = canvasP2.getContext('2d');

// Insertion de 'Joueur 2' et de la fonction qui insére le point qui indique son tour
      ctxP2.font = '96px Lato';
      ctxP2.fillText('Joueur 2', 350, 200);
      function drawTurnPointP1() {
        ctxP2.beginPath();
        ctxP2.lineWidth = '5';
        ctxP2.fillStyle = 'B90808F';
        ctxP2.arc(900, 170, 40, 0, 2 * Math.PI);
        ctxP2.fill();
    }
}
    drawTurnPointP1()


  // Insérer le score global joueur 2
  
  ctxP2.font = '288px Lato';
  ctxP2.fillText('100', 280, 600);


// Insérer le score current joueur 2
ctxP2.font = '96px Lato';
ctxP2.fillText('Current', 350, 1100);
ctxP2.fillText('5', 400, 1400)

  
