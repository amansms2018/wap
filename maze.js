var x=0;
$(document).ready(function () {
    'use strict';
    var fail=0;


    $("#start").click(function () {
        $("#status").text("...On Progress");
        $(".boundary").css({"background-color":"#eeeeee"});
        fail=0;
    });
    // $("start").mouseleave(function() {
    //     alert("pageX: " + this.pagex.pageX + ", pageY: " + this.pageY);
    // });

    $( document ).on( "mousemove", function( event ) {
        $("#xyposition").text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
        x= event.pagex;
    });


    $(".boundary").mouseover(function () {
        $(this).css({"background-color": "#ff8888"});
        $("#status").text("You Lost");
        fail=1;
    });

    //

    $("#maze div.boundary + div.boundary + div.boundary + div.boundary + div.boundary").mouseover(function () {
        $(this).css({"background-color": "#ff8888"});
        $("#status").text("You Lost");
        fail=1;
    });
    ////

    $("#end").mouseover(function (event) {
        if (event.pageX-860>=0){
        alert(" it is illegal move , please follow the correct path !!");
            $("#status").text("....");
        }
        if(fail!=1)  {
            $("#status").text("You win!:]");}

    });
});