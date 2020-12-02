//Se ejecuta hasta que este listo el documento HTML
$(document).ready(main);

function main(){
    //Seleccionamos el evento click
    $('#menu a').on('click',content);
    
    $("#title").hover(titleEnter,titleLeave);
    $("#cliente").hover(titleEnter,titleLeave);
    
}

function content(){
    //Click selecciona el elemento href
    var lines = $(this).attr('href');
    //Selecionamos el body y html para animar, con animate
    $('body, html').animate({
        scrollTop:$(lines).offset().top-50
    },1000);
    
    //return false;
}
function titleEnter(){
    $(this).animate({
        height:'150px'
    });
}
function titleLeave(){
    $(this).animate({
        height:'100px'
    });
}