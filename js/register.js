$(document).ready(function () {


    // 呈現input mail的placeholder
    $("#mail").focus(function (e) { 
        e.preventDefault();
        $(".registerform-group1 i").removeClass("far fa-envelope");
    });
    $("#mail").focusout(function (e) { 
        e.preventDefault();
        $(".registerform-group1 i").addClass("far fa-envelope");
    });


    // 呈現input password的placeholder
    $("#password").focus(function (e) { 
        e.preventDefault();
        $(".registerform-group2 i").removeClass("fas fa-lock");
    });
    $("#password").focusout(function (e) { 
        e.preventDefault();
        $(".registerform-group2 i").addClass("fas fa-lock");
    });
    $("#password2").focus(function (e) { 
        e.preventDefault();
        $(".registerform-group3 i").removeClass("fas fa-lock");
    });
    $("#password2").focusout(function (e) { 
        e.preventDefault();
        $(".registerform-group3 i").addClass("fas fa-lock");
    });

});