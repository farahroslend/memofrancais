//Flipping the flashcards on x-axis
var ax = 'x';
$(document).ready(function() {

 $('#card').flip({
  trigger: 'manual',
  axis: 'x'
 });

 $('#right').click(function() {
  if (ax != 'x') {
   $("#card").flip({
    axis: 'x'
   });
   ax = 'x';
  }
  else {
   $("#card").flip('toggle');
  }
 });

});


// Flashcard navigation counter and content update

function click_updatesCounter() {
 // set currentCounter variable to the contents of "counter" or 1 if "counter" doesn't exist yet
 let currentCounter = sessionStorage.getItem("counter") || 1;
 // increment currentCounter and store it in sessionStorage with the name "counter"
 if (currentCounter == 20) {
  //console.log("Do nothing");
 }
 else {
  sessionStorage.setItem("counter", ++currentCounter);
 }
 var res = currentCounter + " " + "out of" + " " + 20;
 document.getElementById("demo").innerHTML = res;

 //Updating index for the flashcard frontal display
 var myArrayFront = ["niveau", "vitesse", "echantillon", "cible", "coût", "panne", "feu", "consigne", "hors spec", "débit", "lourd", "légère", "vanne", "soupape", "tube côté", "calandre", "taux", "lit", "temps de résidence", "sel"];
 var indexForFlashcardFront = currentCounter - 1;
 document.getElementById("FlashcardFront").innerHTML = myArrayFront[indexForFlashcardFront];

 var myArrayBack = ["level", "speed", "sample", "target", "cost", "breakdown", "fire", "signal", "off spec", "flowrate", "heavy (distillation)", "light (distillation)", "valve", "safety valve", "tube side", "shell", "rate", "bed", "residence time", "salt"];
 var indexForFlashcardBack = currentCounter - 1;
 document.getElementById("FlashcardBack").innerHTML = myArrayBack[indexForFlashcardBack];
}

function click_updatesCounterLEFT() {
 // set currentCounter variable to the contents of "counter" or 1 if "counter" doesn't exist yet
 let currentCounter = sessionStorage.getItem("counter") || 1;
 // increment currentCounter and store it in sessionStorage with the name "counter"
 if (currentCounter == 1) {
  //console.log("Do nothing");
 }
 else {
  sessionStorage.setItem("counter", --currentCounter);
 }
 var res = currentCounter + " " + "out of" + " " + 20;
 document.getElementById("demo").innerHTML = res;

 //Updating index for the flashcard frontal display
 var myArrayFront = ["niveau", "vitesse", "echantillon", "cible", "coût", "panne", "feu", "consigne", "hors spec", "débit", "lourd", "légère", "vanne", "soupape", "tube côté", "calandre", "taux", "lit", "temps de résidence", "sel"];
 var indexForFlashcardFront = currentCounter - 1;
 document.getElementById("FlashcardFront").innerHTML = myArrayFront[indexForFlashcardFront];

 var myArrayBack = ["level", "speed", "sample", "target", "cost", "breakdown", "fire", "signal", "off spec", "flowrate", "heavy (distillation)", "light (distillation)", "valve", "safety valve", "tube side", "shell", "rate", "bed", "residence time", "salt"];
 var indexForFlashcardBack = currentCounter - 1;
 document.getElementById("FlashcardBack").innerHTML = myArrayBack[indexForFlashcardBack];
}


//Flipping the flashcards on y-axis

/*var ax = 'y';
$(document).ready(function() {
 
 $('#card').flip({
  trigger: 'manual',
  axis: 'y'
 });
 
 $('#right').click(function() {
  if (ax != 'y') {
   $("#card").flip({
    axis: 'y'
   });
   ax = 'y';
  }
  else {
   $("#card").flip('toggle');
  }
 });
 
});*/


//JS codes for quiz
var myArrayBack = ["level", "speed", "sample", "target", "cost", "breakdown", "fire", "signal", "off spec", "flowrate", "heavy (distillation)", "light (distillation)", "valve", "safety valve", "tube side", "shell", "rate", "bed", "residence time", "salt"];
var correctOptionPlacer = Math.round(Math.random());
if (correctOptionPlacer = 1) {
 document.getElementById("optionA").innerHTML = myArrayBack[currentCounter];
 var wrongoptionIndex = (20 + 1) - currentCounter;
 document.getElementById("optionB").innerHTML = myArrayBack[wrongoptionIndex];
}
else {
 document.getElementById("optionB").innerHTML = myArrayBack[currentCounter];
 var wrongoptionIndex = (20 + 1) - currentCounter;
 document.getElementById("optionA").innerHTML = myArrayBack[wrongoptionIndex];
}

//the real codes for Quiz

function click_updatesCounter() {
 // set currentCounter variable to the contents of "counter" or 1 if "counter" doesn't exist yet
 let currentCounter = sessionStorage.getItem("counter") || 1;
 // increment currentCounter and store it in sessionStorage with the name "counter"
 if (currentCounter == 20) {
  //console.log("Do nothing");
 }
 else {
  sessionStorage.setItem("counter", ++currentCounter);
 }
 var res = currentCounter + " " + "out of" + " " + 20;
 document.getElementById("demo").innerHTML = res;


 var myArrayFront = ["niveau", "vitesse", "echantillon", "cible", "coût", "panne", "feu", "consigne", "hors spec", "débit", "lourd", "légère", "vanne", "soupape", "tube côté", "calandre", "taux", "lit", "temps de résidence", "sel"];
 document.getElementById("FlashcardFront").innerHTML = myArrayFront[currentCounter - 1];


 //Updating content for optionA & optionB displays
 var myArrayBack = ["level", "speed", "sample", "target", "cost", "breakdown", "fire", "signal", "off spec", "flowrate", "heavy (distillation)", "light (distillation)", "valve", "safety valve", "tube side", "shell", "rate", "bed", "residence time", "salt"];
 var correctOptionPlacer = Math.round(Math.random());

 var symmetryMiddle = 20 / 2;

 if (currentCounter == symmetryMiddle) {
  var correctOptionPlacer = Math.round(Math.random());
  if (correctOptionPlacer == 1) {
   document.getElementById("optionA").innerHTML = myArrayBack[currentCounter - 1];
   var wrongoptionIndex = ((20 - 1) + 1) - currentCounter; //remember JS starts indexing with 0, not 1 like Matlab
   document.getElementById("optionB").innerHTML = myArrayBack[0];
  }
  else {
   document.getElementById("optionB").innerHTML = myArrayBack[currentCounter - 1];
   var wrongoptionIndex = ((20 - 1) + 1) - currentCounter;
   document.getElementById("optionA").innerHTML = myArrayBack[0];
  }
 }

 else {

  if (correctOptionPlacer == 1) {
   document.getElementById("optionA").innerHTML = myArrayBack[currentCounter - 1];
   var wrongoptionIndex = ((20 - 1) + 1) - currentCounter; //remember JS starts indexing with 0, not 1 like Matlab
   document.getElementById("optionB").innerHTML = myArrayBack[wrongoptionIndex];
  }
  else {
   document.getElementById("optionB").innerHTML = myArrayBack[currentCounter - 1];
   var wrongoptionIndex = ((20 - 1) + 1) - currentCounter;
   document.getElementById("optionA").innerHTML = myArrayBack[wrongoptionIndex];
  }

 }
}
