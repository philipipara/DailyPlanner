$(document).ready(function(){
  
  var nowMoment = moment();
  var displayMoment = doucment.getElementbyId("#currentDay");
    displayMoment.innerHTML= nowMoment;

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









});