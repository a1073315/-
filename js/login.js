$(document).ready(function () {

    // 呈現input mail的placeholder
    $("#mail").focus(function (e) { 
        e.preventDefault();
        $(".loginform-group1 i").removeClass("far fa-envelope");
    });
    $("#mail").focusout(function (e) { 
        e.preventDefault();
        $(".loginform-group1 i").addClass("far fa-envelope");
    });


    // 呈現input password的placeholder
    $("#password").focus(function (e) { 
        e.preventDefault();
        $(".loginform-group2 i").removeClass("fas fa-lock");
    });
    $("#password").focusout(function (e) { 
        e.preventDefault();
        $(".loginform-group2 i").addClass("fas fa-lock");
    });

});