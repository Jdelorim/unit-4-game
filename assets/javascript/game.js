

$(document).ready(function(){

var currentHP;
var countChar = 0;
var pickChar = true;
var phase = 1;
var charText = "<h3>" + "Pick Your Character" + "<h3>";
var counterAtt = 0;
var emChar = "";
var emId = "";
var emId2 = "";
var emHP = 0;
var fighterChar = "";
var attack = 0;
var inBattle = false;
var winCount = 0;
var lost = false;
$("#character").html(charText);


$("#Obi-Wan").on("click",function() {
   if(pickChar) {

   $("#LukeSkywalker").appendTo("#enemies");
   $("#LukeSkywalker").css("background-color","red");
    $("#DarthVader").appendTo("#enemies");
    $("#DarthVader").css("background-color","red");
    $("#Emperor").appendTo("#enemies");
    $("#Emperor").css("background-color","red");
    charText = "<h3>" + "Your Character" + "<h3>";
    $("#character").html(charText);
    fighterChar = "#Obi-WanHP";
    currentHP = 120;
    pickChar = false;
    countChar = 1;
    attack = 8;
    console.log(pickChar);
    console.log("HP: ",currentHP);
    
    } else if(!pickChar && countChar !== 1 && inBattle === false && !lost) {
       $("#Obi-Wan").appendTo("#Defender");
       $("#Obi-Wan").css("background-color","black");
       $("#Obi-Wan").css("color","white");
       phase = 2;
       emChar = "Obi-Wan Kenobi";
       emId ="#Obi-WanHP";
       emId2 = "#Obi-Wan";
       console.log(emId);
       emHP = 120;
       counterAtt = 15;
       inBattle = true;
       console.log("phase: ",phase);
       
   } 
});


$("#LukeSkywalker").on("click",function() {
  if(pickChar){   
    $("#Obi-Wan").appendTo("#enemies");
    $("#Obi-Wan").css("background-color","red");
     $("#DarthVader").appendTo("#enemies");
     $("#DarthVader").css("background-color","red");
     $("#Emperor").appendTo("#enemies");
     $("#Emperor").css("background-color","red");
     charText = "<h3>" + "Your Character" + "<h3>";
     $("#character").html(charText);
     fighterChar = "#lukeSkywalkerHP";
     currentHP = 100;
     pickChar = false;
     countChar = 2;
     attack = 6;
     console.log(pickChar);
     console.log("HP: ",currentHP);
    }   else if (!pickChar && countChar !== 2 && inBattle === false && !lost) {
        $("#LukeSkywalker").appendTo("#Defender");
        $("#LukeSkywalker").css("background-color","black");
        $("#LukeSkywalker").css("color","white");
        phase = 2;
        counterAtt = 10;
        emChar = "Luke Skywalker";
        emId ="#lukeSkywalkerHP";
        emId2 = "#LukeSkywalker";
        emHP = 100;
        inBattle = true;
        console.log("phase: ",phase);
    }
 });

 $("#DarthVader").on("click",function() {
   if(pickChar){
    $("#Obi-Wan").appendTo("#enemies");
    $("#Obi-Wan").css("background-color","red");
     $("#LukeSkywalker").appendTo("#enemies");
     $("#LukeSkywalker").css("background-color","red");
     $("#Emperor").detach().appendTo("#enemies");
     $("#Emperor").css("background-color","red");
     charText = "<h3>" + "Your Character" + "<h3>";
     $("#character").html(charText);
     fighterChar = "#darthVaderHP";
     currentHP = 150;
     pickChar = false;
     countChar = 3;
     attack = 10;
     console.log(pickChar);
   } else if (!pickChar && countChar !== 3 && inBattle === false && !lost) {
    $("#DarthVader").appendTo("#Defender");
    $("#DarthVader").css("background-color","black");
    $("#DarthVader").css("color","white");
    phase = 2;
    counterAtt = 20;
    emChar = "Darth Vader";
    emId ="#darthVaderHP";
    emId2 = "#DarthVader"
    emHP = 150;
    inBattle = true;
    console.log("phase: ", phase);
}
 });
 $("#Emperor").on("click",function() {
    if(pickChar){
    $("#Obi-Wan").appendTo("#enemies");
    $("#Obi-Wan").css("background-color","red");
     $("#DarthVader").appendTo("#enemies");
     $("#DarthVader").css("background-color","red");
     $("#LukeSkywalker").appendTo("#enemies");
     $("#LukeSkywalker").css("background-color","red");
     charText = "<h3>" + "Your Character" + "<h3>";
     $("#character").html(charText);
     fighterChar = "#emperorHP";
     currentHP = 180;
     pickChar = false;
     countChar = 4;
     attack = 14;
     console.log(pickChar);
    } else if (!pickChar && countChar !== 4 && inBattle === false && !lost) {
        $("#Emperor").appendTo("#Defender");
        $("#Emperor").css("background-color","black");
        $("#Emperor").css("color","white");
        phase = 2;
        counterAtt = 25;
        emchar = "The Emperor"
        emId ="#emperorHP";
        emId2 = "#Emperor";
        emHP = 180;
        inBattle = true;
        console.log("phase: ",phase);
    }
 });

 $("#attack").on("click",function(){
    if(phase === 2 && !lost){
       var addATT = attack;
        emHP = emHP - attack;
        
        currentHP = currentHP - counterAtt;

        $("#attStatus").html("You attacked " + emChar + " for " + attack);
        $("#countStatus").html(emChar + " attacked you back for " + counterAtt + " damage");
        $(fighterChar).text(currentHP);
        $(emId).text(emHP);

        console.log("attack");
        console.log("currentHP:", currentHP);
        console.log("counterAtt",counterAtt);
        attack = attack + addATT;
        if (emHP <= 0 ){
            $(emId2).remove();
            inBattle = false;
            winCount++;
           
            $("#winner").html("<h1>" + " You Win! Next Battle! " + "</h1>" );
            if(winCount === 3){
             $(attStatus).empty();
             $(countStatus).empty();
             $("#winner").html("<h1>" + " You Win! Play Again! " + "</h1>" );
            }
         } 
         if(currentHP <= 0){
            $("#winner").html("<h1>" + " You Loose! Try Again! " + "</h1>" );
            lost = true;
            $(attStatus).empty();
            $(countStatus).empty();
        }
    }else{
        console.log("pick char");
    }
 });

  $("#restart").on("click",function(){
        reloader();
  });
  function reloader(){
      location.reload();
  }

    










});
