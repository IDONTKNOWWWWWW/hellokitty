const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = document.getElementById('peso').value
    const altura = document.getElementById('Altura').value
    
    let bami = (peso /(altura * altura)).toFixed(2);
    

    const valuee = document.getElementById('value');
    let dest = '';

    document.getElementById('info').classList.remove('hidden');


    var imagem = document.getElementById("teste");
    
    if (bami < 18) {
        imagem.src = "./assets/images/pirulito-de-chocolate-hello-kitty-gatinho.jpg";
        dest = "Imc do Pirulito da hello kitty";
    } 

    if (bami == 23){
        imagem.src = "./assets/images/sapo.jpg"
        dest = "Imc do keroppi";
    }
    if (bami > 18){
        imagem.src = "./assets/images/cinnamoroll_zu2z.png";
        dest = "Imc do cinnamorroll";
    }
    if (bami > 21){
        imagem.src = "./assets/images/kuromi.jpg";
        dest = "Imc da kuromi";
    }

    if (bami > 24) {
        imagem.src = "./assets/images/Hello.jpg";
        dest = "Imc da hello kitty";
    } 

    if (bami > 26){
        imagem.src = "./assets/images/melody.jpeg";
        dest = "Imc da My Melody";
    }

    if (bami > 30){
        imagem.src = "./assets/images/pumpmu.jpg"
        dest = "Imc do pompompurin";
    }

    if (bami > 50){
        imagem.src = "./assets/images/planeta.gif";
        dest = "Imc da via lactea";
    }
    
    

    
    
    
    

    
    
    valuee.textContent = bami;
    document.getElementById('descrição').textContent = dest;
});

function limitaalt (evt) {
    var input = evt.target;
    var value = input.value;

    
    if (value.length <= 3) {
        return;
    }

    input.value = input.value.substr(0, 4); 
}

function limitapeso (evt) {
    var input = evt.target;
    var value = input.value;

    
    if (value.length <= 3) {
        return;
    }

    input.value = input.value.substr(0, 3); 
}

function virgula (evt) {
    var input = evt.target;
    var valor = input.value;
    
    
    if (valor.length > 1 && valor.length  < 4 && Number.isInteger(parseFloat(valor))) {

        input.value = valor /10 ; 
       
        return;
        
    }
}

document.getElementById('Altura').addEventListener('input', virgula )
document.getElementById('Altura').addEventListener('input', limitaalt)
document.getElementById('peso').addEventListener('input', limitapeso)
