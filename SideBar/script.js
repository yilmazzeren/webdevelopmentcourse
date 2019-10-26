$(document).ready(function () {

    $("#menu").click(function () {

        $("#mySideNav").show(3000, function () {
            $("#mySideNav").css({
                width: "250px",
            });
            $("header").css({
                marginLeft: "250px",
            })
            $("nav").css({
                marginLeft: "250px",
            })
            $("main").css({
                marginLeft: "250px",
            });
            $("body").css({
                backgroundColor: "rgba(0,0,0,0.4)",
            })
        });
    });

    $("#close").click(function () {
        $("#mySideNav").css({
            width: "0px",
        });
        $("header").css({
            marginLeft: "0px",
        })
        $("nav").css({
            marginLeft: "0px",
        })
        $("main").css({
            marginLeft: "0px",
        })
        $("body").css({
            backgroundColor: "white",
        })
    });

});