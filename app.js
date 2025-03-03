// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigos;
let listaDeAmigos = [];
let EntradalistaDeAmigos = document.getElementById('listaAmigos');
let i=0;
let randomnumber;
let validacionIntento = true;
function agregarAmigo(){
    nombreAmigos = document.getElementById('amigo').value;
    if(nombreAmigos != ""){
    listaDeAmigos.push(nombreAmigos);
    if(validacionIntento){
        EntradalistaDeAmigos.innerHTML += listaDeAmigos[i] + "<br></br>";
    }else{
        EntradalistaDeAmigos.innerHTML = listaDeAmigos[0] + "<br></br>";
        for(let j = 1;j<listaDeAmigos.length; j++){
        EntradalistaDeAmigos.innerHTML += listaDeAmigos[j] + "<br></br>";
        }
        validacionIntento = true;
    }
    i++;
    }else{
        alert("porfavor, ingresa un nombre valido");
    }
}
function sortearAmigo(){
    if(listaDeAmigos.length > 0){
        randomnumber = Math.floor(Math.random() * listaDeAmigos.length);
        EntradalistaDeAmigos.innerHTML = `El amigo secreto sorteado es: ${listaDeAmigos[randomnumber]}`;
        listaDeAmigos.splice(randomnumber, 1);
        validacionIntento = false;
    }else{
        alert("porfavor, ingresa un amigo");
    }
}