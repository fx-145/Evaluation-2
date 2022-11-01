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
                    
    
}
else{
    alert("ce navigateur ne supporte pas canvas")
}

two()
three()
four()
five()
six()