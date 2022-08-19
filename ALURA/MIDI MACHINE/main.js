function tocaSom(tagAudio){

    const verificar = document.querySelector(tagAudio);

    if(verificar && verificar.localName === 'audio'){
        verificar.play()
    } 
    else {
        alert('ESTE ELEMENTO OU OBJETO NÃO EXISTE')
    }
}


const listaDeTeclas = document.querySelectorAll('.tecla');

/*
let contador = 0

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    
    listaDeTeclas[contador].onclick = function (){
        tocaSom(idAudio)
    };
    contador += 1;
} 
*/

for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function (){
        tocaSom(idAudio)
    };


    tecla.onkeydown = function(evento){

        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa')
        }
    } 
    
    tecla.onkeyup = function(){

        tecla.classList.remove('ativa')
    } 
 
    tecla.classList.remove('ativa')

}

