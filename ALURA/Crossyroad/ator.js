//Variavel de movimento DO ATOR (VARIAVEL Y)
let pos_inicial_y = 366
let pos_inicial_x = 55
var batida = false
let pontos = 0

//LOCAL DO ATOR
function atorImagem(){
  image(imagemDOator, pos_inicial_x, pos_inicial_y, 30, 30)
}

//Controles da GALINHA (CIMA, BAIXO, ESQUERDA, DIREITA)
function controles(){
  if (keyIsDown(UP_ARROW)){
      pos_inicial_y -= 4
  }
  if (keyIsDown(DOWN_ARROW)){
    if(limiteMapaY()){
      pos_inicial_y += 4
    }
  }
  if (keyIsDown(LEFT_ARROW)){
      pos_inicial_x -= 4   
  }
  if (keyIsDown(RIGHT_ARROW)){
    if(limiteMapaX_2()){
      pos_inicial_x += 4
    }
  }
}

function Bater(){
  for (let i = 0; i < imagemDOcarro.length; i = i + 1){
    batida = collideRectCircle(x_carros[i], y_carros[i], 80, 80, pos_inicial_x, pos_inicial_y, 15, 15)
    if(batida){
      bateu()
      batida_galinha.play()
      if (pontosPositivos())
        pontos -= 1
    }
  }
}

function bateu(){
  pos_inicial_y = 366
}

function pontuacao(){
  textAlign(CENTER)
  textSize(25)
  fill(192, 235, 0)
  text(pontos, width / 2, 25)
}

function marcaponto(){
  if(pos_inicial_y < 15){
    pontos += 1
    pos_inicial_y = 366
    coin.play()
  }
}

function pontosPositivos(){
  return pontos > 0
}

function limiteMapaY(){
  return (pos_inicial_y < 369)
}

function limiteMapaX(){
  if (pos_inicial_x < 1)
    pos_inicial_x = 1
}

function limiteMapaX_2(){
   if (pos_inicial_x || 479){
     return pos_inicial_x < 470
 }
}



