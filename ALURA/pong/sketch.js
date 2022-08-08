//Variables of the Ball
let x_bola = 300;
let y_bola = 200;
let d_bola = 20;
let raio = d_bola / 2;

//Ball Velocity and moviment
let velocidadeXbola = 6;
let movimentoY = 6;

//Pong racket
let x_raquete = 5;
let y_raquete = 150;
let altura_raquete = 10
let largura_raquete = 90

//Bot Racket
let x_raquetebot = 585
let y_raquetebot = 150
let movimentobot;

// Bounce the ball if true
let rebatida = false

//Scoreboard counter
let pontosjogador = 0;
let pontosbot = 0;

//Sound egine
let raquetada;
let pontada;
let trilha;

//Bot error's
let chancebotErrar = 0;
bolinhaNaoFicaPresa();

//Pre-Load Sounds
function preload(){
  trilha = loadSound('trilha.mp3');
  pontada = loadSound('ponto.mp3');
  raquetada = loadSound('raquetada.mp3');
}

//Setup the canvas
function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

//Controls the entire game
function draw() {
  background(16, 71, 7);
  mostrabolinha();
  movimentobola();
  bordamapa();
  raquete(x_raquete, y_raquete);
  raquete(x_raquetebot, y_raquetebot);
  movimento_raquete();
  colisaoraquete();
  rebater_bola(x_raquete, y_raquete);
  rebater_bola(x_raquetebot, y_raquetebot);
  botplay();
  placar();
  score();  
}

//Show the BALL in screen
function mostrabolinha(){
  fill(255)
  circle(x_bola, y_bola, d_bola);
}

//MOVES the ball
function movimentobola(){
  x_bola += velocidadeXbola;
  y_bola += movimentoY;
}

//Makes a Limit in the MAP
function bordamapa(){
  if (x_bola + raio > width ||x_bola - raio < 0){
   velocidadeXbola *= -1;
  }
  if (y_bola + raio > height || y_bola - raio < 0){
      movimentoY *= -1;
      }
}

//Draw the Racket
function raquete(x, y){
  rect(x, y, altura_raquete, largura_raquete);
}

//Player Moviments
function movimento_raquete(){
   if (keyIsDown(UP_ARROW)) {
    y_raquete -= 10;
  }
    if (keyIsDown(DOWN_ARROW)) {
    y_raquete += 10;
  }

}

//Makes the ball touch the racket
function colisaoraquete(){
  if (x_bola - raio < x_raquete + altura_raquete && y_bola - raio < y_raquete + largura_raquete && y_bola + raio > y_raquete) {
    velocidadeXbola *= -1
    raquetada.play()

  }
}

//Makes the ball bounce if touches the racket
function rebater_bola(x, y){
  colidir = collideRectCircle(x, y, altura_raquete, largura_raquete, x_bola, y_bola, raio);
  if (colidir){
    velocidadeXbola *= -1;
    raquetada.play()

  }
}

//Calculates and makes the bot miss the ball
function botplay(){
  calcularChancedeErro()
  movimentobot = y_bola - y_raquetebot - largura_raquete / 2 - 30
  y_raquetebot += movimentobot + chancebotErrar
}
  
function calcularChancedeErro(){  
  if (pontosbot >= pontosjogador){
    chancebotErrar += 1
    if(chancebotErrar >= 39){
      chancebotErrar = 40
    }
  } else {
    chancebotErrar -= 1
    if (chancebotErrar <= 35){
      chancebotErrar = 35
    }
  }
} 
  
//Show the SCOREBOARD in screen
function placar(){
  stroke(255)
  textAlign(CENTER);
  textSize(18);
  fill(color(111, 176, 168))
  rect(150, 10, 40, 20)
  fill(color(255))
  text(pontosjogador, 170, 28)
  fill(color(111, 176, 168))
  rect(450, 10, 40, 20)
  fill(color(111, 176, 168))
  fill(color(255))
  text(pontosbot, 470, 28)
}

//Get the scoreboard points
function score(){
  if (x_bola > 590){
    pontosjogador += 1
    pontada.play()
  }
  if (x_bola < 10){
    pontosbot += 1
    pontada.play()
  }
}

//Avoid the ball getting stuck in any corner
function bolinhaNaoFicaPresa(){
    if (x_bola - raio < 0){
    x_bola = 23
    }
}
  
  