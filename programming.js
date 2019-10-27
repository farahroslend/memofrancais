 //Flipping the flashcards

 var ax = 'x';
 $(document).ready(function() {
  $('#card').flip({
   trigger: 'manual',
   axis: 'x'
  });
  $("#card").on('flip:change', function() {
   $('#card').flip('toggle');
  });
  $('#left').click(function() {
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


 // Flashcard navigation counter

 function click_updatesCounter() {
  // set currentCounter variable to the contents of "counter" or 1 if "counter" doesn't exist yet
  let currentCounter = sessionStorage.getItem("counter") || 1;
  // increment currentCounter and store it in sessionStorage with the name "counter"
  if (currentCounter == 10) {
   //console.log("Do nothing");
  }
  else {
   sessionStorage.setItem("counter", ++currentCounter);
  }
  var res = currentCounter + " " + "out of" + " " + 10;
  document.getElementById("demo").innerHTML = res;
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
  var res = currentCounter + " " + "out of" + " " + 10;
  document.getElementById("demo").innerHTML = res;
 }
 