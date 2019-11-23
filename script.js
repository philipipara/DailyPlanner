
var save = document.querySelector("#saveBtn");


$("#saveBtn").click(function(){
    document.getElementById("#task").html("textarea");
    localStorage.setItem("textarea");

    
});


$("#saveBtn").click(function(){
    var userInput = $("#task").val();
    document.getElementById("#task").html("textarea");
    localStorage.setItem("#task");

});

var currentDate = moment().format("MMMM Do YYYY");
console.log(currentDate);
var hour = moment().hour();
var moment = moment();
console.log(moment);
console.log(hour);

$("#currentDay").text(currentDate);