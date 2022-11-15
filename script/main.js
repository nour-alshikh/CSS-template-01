$(document).ready(function(){
    $('.loading .loader').fadeOut(2000,function(){
        $('body').css('overflow', 'auto')
        $(window).scrollTop(0)
        $('.loading').fadeOut(1000,function(){
            $('loading').remove()
        })
    })
})

$('.home .button').click(function(){
    $(window).scrollTop(0)
})

$(window).scroll(function(){
    if ($(window).scrollTop() > 100){
        $('.home .button').css('display', 'flex')
    }else{
        $('.home .button').css('display', 'none')
    }
})

let aboutOffset = $('.about').offset().top
$(window).scroll(function(){
    if ($(window).scrollTop() > aboutOffset - 100){
        $('nav').css('backgroundColor', 'black')
    }else{
        $('nav').css('backgroundColor', 'transparent')
    }
})