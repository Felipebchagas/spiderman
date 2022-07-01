$(function () {

    $('.botao-menu-mobile').click(function () {

        var listMenu = $('.s-item-list');

        if (listMenu.is(':hidden') == true) {
            $('.botao-menu-mobile i').removeClass("fa-bars");
            $('.botao-menu-mobile i').addClass("fa-times");
            //listMenu.fadeIn(2000)
            listMenu.slideToggle(1000)
        } else {
            $('.botao-menu-mobile i').addClass("fa-bars");
            $('.botao-menu-mobile i').removeClass("fa-times");
            //listMenu.fadeOut();
            listMenu.slideToggle()
        }

    })
})


