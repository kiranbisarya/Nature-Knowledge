function submitAnswer() {
  var radios = document.getElementsByName("choice");
  var i = 0, len = radios.length;
  var checked = false;
  var userAnswer;
  var msg = document.getElementById("msg-container").innerHTML;


  for( ; i < len; i++ ) {
     if(radios[i].checked) {
       checked = true;
       userAnswer = radios[i].value;
     }
  }
  // if user click submit button without selecting any option, print "please select choice answer".
  if(!checked) {
    document.getElementById("msg-container").innerHTML = "Please select an answer"
    return;
  }
  // Correct answer
  else if(userAnswer === "Option1") {
     document.getElementById("msg-container").innerHTML = "Answer is Correct!"
  }
  // Incorrect answer
  else {
     document.getElementById("msg-container").innerHTML = "Answer is Incorrect!"
  }

  // display the hidden msg.
  document.getElementById("msg-container").style.display = "inline";

}

function nextQ() {
  document.getElementById("next").innerHTML = "Paragraph changed.";
}
