$(document).ready(function(){
  

  var nineSlot = localStorage.getItem("nineSlot");
    $("#9A").val(nineSlot);

  var tenSlot = localStorage.getItem("tenSlot");
    $("#10A").val(tenSlot);

  var elevenSlot = localStorage.getItem("elevenSlot");
    $("#11A").val(elevenSlot);

  var twelveSlot = localStorage.getItem("noonSlot");
    $("#12p").val(twelveSlot);

  var oneSlot = localStorage.getItem("oneSlot");
    $("#1P").val(oneSlot);

  var twoSlot = localStorage.getItem("twoSlot");
    $("#2P").val(twoSlot);

  var threeSlot = localStorage.getItem("threeSlot");
    $("#3P").val(threeSlot);

  var fourSlot = localStorage.getItem("fourSlot");
    $("#4P").val(fourSlot);

  var fiveSlot = localStorage.getItem("fiveSlot");
    $("#5P").val(fiveSlot);



//save to local storage

$(".btn").on("click", function(e){
   e.preventDefault();
   

var nineAm = $("#9A").val();
var tenAm = $("#10A").val();
var elevenAm= $("#11A").val();
var noonPm = $("#12P").val();
var onePm = $("#1P").val();
var twoPm= $("#2P").val();
var threePm = $("#3P").val();
var fourPm= $("#4P").val();
var fivePm = $("#5P").val();

localStorage.setItem("nineSlot", nineAm);
localStorage.setItem("tenSlot", tenAm);
localStorage.setItem("elevenSlot", elevenAm);
localStorage.setItem("noonSlot", noonPm);
localStorage.setItem("oneSlot", onePm);
localStorage.setItem("twoSlot", twoPm);
localStorage.setItem("threeSlot", threePm);
localStorage.setItem("fourSlot", fourPm);
localStorage.setItem("fiveSlot", fivePm);

});

    setInterval(function(){
      $("#currentDay").text(moment().format("MMMM D YYYY")) 
      }, 1000);

var nineTime = moment().set("hour",9).format("H");
var tenTime = moment().set("hour",10).format("H");
var elevenTime = moment().set("hour",11).format("H");
var twelveTime = moment().set("hour",12).format("H");
var oneTime = moment().set("hour",13).format("H");
var twoTime = moment().set("hour",14).format("H");
var threeTime = moment().set("hour",15).format("H");
var fourTime = moment().set("hour",16).format("H");
var fiveTime = moment().set("hour",17).format("H");


var now = moment().format("H");

 


if (now < nineTime){
   $("#9A", "col-md-1").css("background-color", "#green")
} else if (now === nineTime){
   $("#9A").css("background-color", "red")
} else {$("#9A").css("background-color", "#6C757D")};

if (now < tenTime){
   $("#10A").css("background-color", "green")
} else if (now === tenTime){
   $("#10A").css("background-color", "red")
} else {$("#10A").css("background-color", "#6C757D")};

if (now < elevenTime){
   $("#11A").css("background-color", "#green")
} else if (now === elevenTime){
   $("#11A").css("background-color", "red")
} else {$("#11A").css("background-color", "#6C757D")};

if (now < twelveTime){
   $("#12P").css("background-color", "green")
} else if (now === twelveTime){
   $("#12P").css("background-color", "red")
} else {$("#12P").css("background-color", "#6C757D")};

if (now < oneTime){
   $("#1P").css("background-color", "#green")
} else if (now === oneTime){
   $("#1P").css("background-color", "red")
} else {$("#1P").css("background-color", "#6C757D")};

if (now < twoTime){
   $("#2P").css("background-color", "#green")
} else if (now === twoTime){
   $("#2P").css("background-color", "red")
} else {$("#2P").css("background-color", "#6C757D")};

if (now < threeTime){
   $("#3P").css("background-color", "#green")
} else if (now === threeTime){
   $("#3P").css("background-color", "red")
} else {$("#3P").css("background-color", "#6C757D")};

if (now < fourTime){
   $("#4P").css("background-color", "green")
} else if (now === fourTime){
   $("#4P").css("background-color", "red")
} else {$("#4P").css("background-color", "#6C757D")};

if (now < fiveTime){
   $("#5P").css("background-color", "green")
} else if (now === fiveTime){
   $("#5P").css("background-color", "red")
} else {$("#5P").css("background-color", "#6C757D")};




});