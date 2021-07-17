$(document).ready(function () {


    // 置頂
    $(".top").click(function (e) {
        e.preventDefault(); 
        $('html,body').animate({
            scrollTop:0
        },1500); //逐漸滑動回到最上方
    
        
    });
    

    // 漢堡鈕
    $('.showmenu').on('click',  function(e){
        e.preventDefault();
 
        $("body").toggleClass("menu-show");
    });

});