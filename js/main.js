$(document).ready(function() {
    $(".slider-inner img").hide();
    $(".slider-inner").each(function() {
        $(this).find("img:first").show();
    });
    $(".prev").click(function() {
        var currentImg = $(this).next("div").find("img:visible");
        var prevImg = currentImg.prev();
        if (currentImg.index() == 0) {
            $(currentImg).hide();
            $(this).next("div").find("img:last").show();
        } else {
            $(currentImg).hide();
            prevImg.show();
        }
    });
    $(".next").click(function() {
        var currentImg = $(this).prev("div").find("img:visible");
        $(currentImg).hide();
        $(currentImg).next("img").show();
        var tamanho = $(this).prev("div").find("img:visible").length;
        if (tamanho == 0) { //se acabou as imagens, volta a mostrar a inicial
            $(this).prev("div").find("img:first").show();
        }
    });
});