$(function(){

    var texto = "Análisis PESTEL de Dahua";
    maquina("typer",texto,10);

});


function maquina(contenedor,texto,intervalo){
   // Calculamos la longitud del texto
   longitud = texto.length;
   // Obtenemos referencia del div donde se va a alojar el texto.
   tagHtml = document.getElementById(contenedor);
   tagHtml.innerHTML="";
   var i=0;
   // Creamos el timer
   timer = setInterval(function(){
      // Vamos añadiendo letra por letra y la _ al final.
      tagHtml.innerHTML = tagHtml.innerHTML.substr(0,tagHtml.innerHTML.length-1) + texto.charAt(i) + "_";
      // Si hemos llegado al final del texto..
      if(i >= longitud){
         // Salimos del Timer y quitamos la barra baja (_)
         clearInterval(timer);
         tagHtml.innerHTML = tagHtml.innerHTML.substr(0,longitud);

         maquina("typer",texto,1000);
         return true;
      } else {
         // En caso contrario.. seguimos
         i++;
      }
   },intervalo);
};

// link utilizados
// https://es.stackoverflow.com/questions/61215/realizar-efecto-m%C3%A1quina-de-escribir-con-pausa