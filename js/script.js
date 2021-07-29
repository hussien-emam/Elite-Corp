$(function(){
 //Adjust slider height
 var winH   = $(window).height(),
     upperH = $('.upper-bar').innerHeight(),
     navH   = $('.navbar').innerHeight();
     $('.slider,.carousel-item').height(winH-(upperH+navH));

     //Featuerd Work Shuffle
     $('.featured-work ul li').on('click',function(){
         $(this).addClass('active').siblings().removeClass('active');
         if ($(this).data('class')==="all") {
             $(".shuffle-image .col-md-3").show(1000);
         }else{
        $(".shuffle-image .col-md-3").hide();
            $($(this).data('class')).parent().show(1000);
         }
     })
});
