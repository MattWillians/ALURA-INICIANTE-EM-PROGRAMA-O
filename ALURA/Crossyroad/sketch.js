//Tamanho do CANVAS
function setup() {
  createCanvas(500, 400);
  musica.loop()
}

//MENU INICIAL
function draw() {
  background(imagemDAestrada)
  atorImagem()
  imagemCarros()
  movimentoCarro()
  controles()
  reiniciarPosicaoCarro()
  Bater()
  pontuacao()
  marcaponto()
  limiteMapaX()
}
