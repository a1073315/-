$(document).ready(function () {
    $(".list a").click(function (e) { 
        e.preventDefault();
        
    });
    
    $(".like").click(function (e) { 
        e.preventDefault();
        $(this).find(".fa-heart").toggleClass("fas");
    });
});