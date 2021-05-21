$(document).ready(function(){


    $('#traer-datos').click(function(){
        //STAR WARS
        $.get({
            url: 'https://digimon-api.vercel.app/api/digimon',
            success: function(listaSW) {
 
             var tarjetas = $('#tarjetas')
             tarjetas.empty();
 
             console.log(listaSW)
 
             $.each(listaSW, function(indice, elemento){
                 tarjetas.append("<div class='card'>"+
                         "<img src='" + elemento.img + "' class='card-img-top' alt='" + elemento.name + "'>"+
                         "<div class='card-body'>"+
                             "<h5 class='card-title'>" + elemento.name + "</h5>"+
                             "<p class='card-text'><b>Nivel del Digimon:</b> " + elemento.level + "</p>"+


                         "</div>"+
                     "</div>");
             });
 
            },
            error: function(error) {
                console.error(error);
            }
        })
     })
 
})
