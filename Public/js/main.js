/*$("#txt1").hide();*/
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
$("#p1").click(function () {
    $(".modal").show();
});
$(".close").click(function () {
    $(".modal").hide();
});