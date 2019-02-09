var data = ["hello", "asdf", "ikikik"];
var index = 0;
//var dataA = ["40%", "30%", "20%"];
//var indexA = 0;

function submitAnswer() {
    var radios = document.getElementsByName("choice");
    var i = 0, len = radios.length;
    var checked = false;
    var userAnswer;
    //var nextQ;
    var msg = document.getElementById("msg-container").innerHTML;
    var msg = document.getElementById("explanation").innerHTML;
    document.getElementById("next").innerHTML = data[0];
    index = index + 1;

    for (; i < len; i++) {
        if (radios[i].checked) {
            checked = true;
            userAnswer = radios[i].value;
        }


    }
    // if user click submit button without selecting any option, print "please select choice answer".
    if (!checked) {
        document.getElementById("msg-container").innerHTML = "Please select an answer"
        return;
    }
    // Correct answer
    else if (userAnswer === "Option1") {
        document.getElementById("msg-container").innerHTML = "Answer is Correct!"
    }
    // Incorrect answer
    else {
        document.getElementById("msg-container").innerHTML = "Answer is Incorrect!"
    }

    if (checked)
        document.getElementById("explanation").innerHTML = "According to earthecho.org even though the United States only hosts 5% of the global population, it produces 40% of the world's waste."




    // display the hidden msg.
    document.getElementById("msg-container").style.display = "inline";


}

function nextQ() {
    document.getElementById("next").innerHTML = data[index];
    index = index + 1;
    console.log(index);

    //document.getElementById("next").innerHTML = dataA[indexA];
    //indexA = indexA + 1;
    //console.log(indexA);

}
