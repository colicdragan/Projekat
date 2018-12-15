/*$("#txt1").hide();*/
$(document).ready(function(){
    var name;
    var com;
    var like;
    var comments = [];
    var i = 0;
    var h;
    var countComDay = 0, countComAlp = 0, countComDream = 0;
    var countRep = 0;
    var test, acc;
    var cur_id, tema, rep = false;

    $("#post4").click(function () {
        $("#sidebar").hide();
        $("#cc").removeClass("col-sm-8").addClass("col-sm-10");
        $("#txt1").show()
    });
    $("#txt1").hide().click(function () {
        $("#sidebar").show();
        $("#cc").removeClass("col-sm-10").addClass("col-sm-8");
        $("#txt1").hide()
    });
    $("#hp7").click(function () {
        $(".modal").show();
        like = "Day  ";
    });
    $("#hp5").click(function () {
        $(".modal").show();
        like = "Alp  ";
    });
    $("#hp4").click(function () {
        $(".modal").show();
        like = "Dream";
    });
    $(".close").click(function () {
        $(".modal").hide();
        rep = false;
        cur_id = null;
        $("#Com").val("");
    });

    $(".btn-success").click(function () {

        name = $("#Name").val();
        com = $("#Com").val();
        $(".modal").hide();


        if (rep){
            h = document.getElementById(cur_id);
            acc ="ic" + i;
            h.insertAdjacentHTML("afterend", "<div class='row' id=" + acc +"></div>");
            h = document.getElementById(acc);
        }else{
            h = document.getElementById("ic");
        }

        acc ="comment" + i;
        h.insertAdjacentHTML("afterbegin", "<div class='col-sm-9' id=" + acc +"></div>");
        acc ="user" + i;
        h.insertAdjacentHTML("afterbegin", "<div class='col-sm-3' id=" + acc +"></div>");


        /*test = document.getElementById("ic");
        console.log(test);*/

        h = document.getElementById("user" + i);
        h.insertAdjacentHTML("afterbegin", "<h5 class='bold'>" + name + "</h5>");

        h = document.getElementById("comment" + i);
        acc = like + i;
        if (!(rep)) {h.insertAdjacentHTML("afterbegin", "<button  class='btn-default btn-sm' class='btn3' id='" + acc + "'>Reply</button>")};
        h.insertAdjacentHTML("afterbegin", "<h5 class='ww'>" + com + "</h5>");

        rep = false;
        cur_id = null;
        $("#Com").val("");

        i++;
        $("#comm").html(i + " COMMENTS");
        switch(like) {
            case "Day  ":
                countComDay++;
                break;
            case "Alp  ":
                countComAlp++;
                break;
            case "Dream":
                countComDream++;
        }
        if (countComDay > countComAlp){
            if (countComDay > countComDream){
                $("#post1").html("Cold winter days");
                $("#p1").html(countComDay + " COMMENTS");
                if (countComAlp > countComDream){
                    $("#post2").html("A day exploring the Alps");
                    $("#p2").html(countComAlp + " COMMENTS");
                    $("#post3").html("American dream");
                    $("#p3").html(countComDream + " COMMENTS");
                }else{
                    $("#post2").html("American dream");
                    $("#p2").html(countComDream + " COMMENTS");
                    $("#post3").html("A day exploring the Alps");
                    $("#p3").html(countComAlp + " COMMENTS");
                }
            }else{
                $("#post1").html("American dream");
                $("#p1").html(countComDream + " COMMENTS");
                $("#post2").html("Cold winter days");
                $("#p2").html(countComDay + " COMMENTS");
                $("#post3").html("A day exploring the Alps");
                $("#p3").html(countComAlp + " COMMENTS");
            }
        }else{
            if (countComAlp > countComDream){
                $("#post1").html("A day exploring the Alps");
                $("#p1").html(countComAlp + " COMMENTS");
                if (countComDay > countComDream){
                    $("#post2").html("Cold winter days");
                    $("#p2").html(countComDay + "COMMENTS ");
                    $("#post3").html("American dream");
                    $("#p3").html(countComDream + " COMMENTS");
                }else{
                    $("#post2").html("American dream");
                    $("#p2").html(countComDream + " COMMENTS");
                    $("#post3").html("Cold winter days");
                    $("#p3").html(countComDay + " COMMENTS");
                }
            }else{
                $("#post1").html("American dream");
                $("#p1").html(countComDream + " COMMENTS");
                $("#post2").html("A day exploring the Alps");
                $("#p2").html(countComAlp + " COMMENTS");
                $("#post3").html("Cold winter days");
                $("#p3").html(countComDay + " COMMENTS");
            }
        }

    });

    /*$("button").click(function() {
        console.log(this.id); // or alert($(this).attr('id'));
    });*/
    $(document).on("click","button",function(){
        cur_id = this.id;
        h = document.getElementById(cur_id);
        if (cur_id.length > 5){
            rep = true;
            $(".modal").show();
            like = cur_id.substring(0, 5);
        }
    })


});



/*
function b() {
    console.log("colic");
    console.log(this.id); // or alert($(this).attr('id'));
    console.log($(this).attr('id')); // or alert($(this).attr('id'));
}
*/