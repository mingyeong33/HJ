$(function(){
    $(".ham").click(function(){
        $(".m-menu").stop().animate({right:'0px'});
    });

    $(".close").click(function(){
        $(".m-menu").stop().animate({right:'-250px'});
    });
    

    $(".card").on({
        mouseover:function(){
            $(this).css({
                transform: 'rotateY(180deg)'
            });
        },
        mouseout:function(){
            $(this).css({
                transform: 'rotateY(0deg)'
            });
        }
    });

});
