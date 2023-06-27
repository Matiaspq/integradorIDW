function cambiarFondo(){ 
    let colores = ["#FF0000", "#FFF300", "#46FF00", "#00FFB9", "#0000FF", "#FFFFFF"]
    let r = Math.random()*6;
    let color = colores[parseInt(r)];
    document.body.style.backgroundColor = color;
}

function incrementar(){
    let y=document.querySelector("#contador");
    y.innerHTML++;
}

function tamaño(){
    document.querySelector("#tamaño").style.padding="15px";
}

function reset(){
    document.querySelector("#tamaño").style.padding="";
}

function tamañotexto(){
    document.querySelector("#tamañotext").style.padding="15px";
}

function cambiarcolor(){ 
    let colores = ["#FF0000", "#FFF300", "#46FF00", "#00FFB9", "#0000FF", "#FFFFFF"]
    let r = Math.random()*6;
    let color = colores[parseInt(r)];
    document.querySelector("#colortexto").style.color=color;
}

function cambiarcont(){ 
    let textos = ["Hola", "Hello", "Text", "Javascript", "HTML", "CSS", "Aprobado", "Reprobado"]
    let r = Math.random()*8;
    let texto = textos[parseInt(r)];
    document.querySelector("#contenido").innerHTML=texto;
}

function hora(){
    var tiempo = new Date();
    var hora = tiempo.getHours();
    var minuto = tiempo.getMinutes();
    var segundo = tiempo.getSeconds();

    hora = agregarCero(hora);
    minuto = agregarCero(minuto);
    segundo = agregarCero(segundo);

    var reloj = hora + ":" + minuto + ":" + segundo;
    document.querySelector("#reloj").textContent=reloj;
    
}

function agregarCero(num) {
    if (num<10){
        return "0"+num;
    }else{
        return num;
    }
}

function contregresivo(){
    let c=document.querySelector("#regresivo");
    c.innerHTML--;
}

function animal(){
    let seleccionado=document.querySelector("#animales").value;
    let lugar=document.querySelector("#imagen");
    let imagen=document.createElement("img");
    if (seleccionado=="perro"){
        imagen.setAttribute("src","perro.jpg");
        imagen.setAttribute("alt","imagen de un perro");
    }
    else if(seleccionado=="gato"){
        imagen.setAttribute("src","gato.jpg");
        imagen.setAttribute("alt","imagen de un gato");
    }
    else if(seleccionado=="leon"){
        imagen.setAttribute("src", "leon.jpg");
        imagen.setAttribute("alt","imagen de un leon");
    }
    else if(seleccionado=="tigre"){
        imagen.setAttribute("src", "tigre.jpg");
        imagen.setAttribute("alt","imagen de un tigre");
    }
    lugar.innerHTML="";
    lugar.appendChild(imagen);
}

setInterval(hora, 1000);
setInterval(contregresivo,1000);


