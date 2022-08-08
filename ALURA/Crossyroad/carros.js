let x_carros = [300, 300, 300, 300]
let y_carros = [15, 95, 175, 255]
let velocidadeCarros = [-6, -12, -7, -10]
let altura = 100
let comprimento = 130

//Carrega imagens de todos os carros

function imagemCarros(){
  for (let i = 0; i < imagemDOcarro.length; i = i + 1 ){
    image(imagemDOcarro[i], x_carros[i], y_carros[i], altura, comprimento)
  }
}

//MOVIMENTAÇÃO DOS CARROS!
function movimentoCarro(){
  for (let i = 0; i < 5; i = i + 1){
    x_carros[i] += velocidadeCarros[i]
  }
}

function reiniciarPosicaoCarro(){
  for (let i = 0; i < 5; i = i + 1){
    if(x_carros[i] < -100){
      x_carros[i] = 600
    }
  }
}

