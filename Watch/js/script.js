$(".fingerprint").click(function(){
    var date = new Date();
    var days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if( (new Date(year, 1, 29)).getDate() == 29 ) days_in_month[1] = 29;

    document.getElementById('month').innerHTML = date.getMonth() + 1;
    document.getElementById('day').innerHTML = date.getDate();
    document.getElementById('year').innerHTML = date.getFullYear();

    document.getElementById('hours').innerHTML = date.getHours();
    document.getElementById('minutes').innerHTML = date.getMinutes();

    $(".fingerprint").remove();
})

$("#reset").click(function(){
    $("#month").remove();
    $("#day").remove();
    $("#year").remove();
    $("#hours").remove();
    $("#minutes").remove();
})