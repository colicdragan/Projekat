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
    var cur_id, cap, theme_id, rep = false, img_c, dateC, date, date1, date2;

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
        like = "DayCW";
        $("#theme").html("Cold winter days");
    });
    $("#hp5").click(function () {
        $(".modal").show();
        like = "AlpEA";
        $("#theme").html("A day exploring the Alps");
    });
    $("#hp4").click(function () {
        $(".modal").show();
        like = "Dream";
        $("#theme").html("American dream");
    });
    $(".close").click(function () {
        $(".modal").hide();
        rep = false;
        cur_id = null;
        $("#Com").val("");
    });

    $("#btns").click(function () {
        name = $("#Name").val();
        com = $("#Com").val();

        switch(like) {
            case "DayCW":
                countComDay++;
                img_c = "<span class='cap_2'>Cold winter days </span>";
                break;
            case "AlpEA":
                countComAlp++;
                img_c = "<span class='cap_2'>A day exploring the Alps </span>";
                break;
            case "Dream":
                countComDream++;
                img_c = "<span class='cap_2'>American dream </span>";
        }



        console.log(dateC);

        if (name.length > 0 && com.length > 0){
            $(".modal").hide();

            date = new Date();
            date1 = date.toString();
            date2 = date.toLocaleDateString();
            dateC = date2 + date1.substring(15,24);

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
            h.insertAdjacentHTML("afterbegin", "<h5 class='bold'>" + name + " " + dateC + "</h5>");

            h = document.getElementById("comment" + i);
            acc = like + i;
            if (!(rep)) {h.insertAdjacentHTML("afterbegin", "<button  class='btn-default btn-sm' class='btn3' id='" + acc + "'>Reply</button>")};
            acc += "com";
            console.log("dodeljen id za komentar " + acc);
            h.insertAdjacentHTML("afterbegin", "<h5 class='ww' id='" + acc + "'>" + img_c + com + "</h5>");

            rep = false;
            cur_id = null;
            $("#Com").val("");

            i++;
            $("#comm").html(i + " COMMENTS");

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
            /*Uzimanje ID od komentara na koji se piše odgovor*/
            theme_id = cur_id + "com";
            cap = $("#" + theme_id).html();
            $("#theme").html(cap);
        }
    })


});