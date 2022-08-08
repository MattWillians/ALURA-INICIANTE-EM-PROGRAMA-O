//Imagens do jogo
let imagemDAestrada
let ator
let carro1
let carro2
let carro3
let carro4

let musica
let coin
let batida_galinha

//Carregar imagens!!
function preload(){
  imagemDAestrada = loadImage("imagens/estrada.png")
  imagemDOator = loadImage("imagens/ator.png")
  imagemDOcarro1 = loadImage("imagens/carro1.png")
  imagemDOcarro2 = loadImage("imagens/carro2.png")
  imagemDOcarro3 = loadImage("imagens/carro3.png")
  imagemDOcarro4 = loadImage("imagens/carro4.png")
  imagemDOcarro = [imagemDOcarro1, imagemDOcarro2, imagemDOcarro3, imagemDOcarro4,]
  
  musica = loadSound('sons/musica.mp3')
  coin = loadSound('sons/coin.mp3')
  batida_galinha = loadSound('sons/batida.mp3')
}
