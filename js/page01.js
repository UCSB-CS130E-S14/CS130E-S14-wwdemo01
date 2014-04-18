
$(document).ready(function(){


  $("#startButton").click( function(){

      console.log("Button clicked!");

      var worker = new Worker('../js/worker01.js');
      


      worker.addEventListener('message', function(e) {
	  console.log('Worker said: ', e.data);
      }, false);

      worker.postMessage('Hello World'); // Send data to our worker.



  }); // this ends the call to the .click function
}); // this ends the call to the .ready function

