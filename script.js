
var data = ["How many tons of carbon dioxide do you think have been added to our atmosphere ? ",
    "As a country, what percent of the world's waste do you think has been produced by the U.S.?",
    "What percent of a typical landfill consists of solely packaging material?",
    "How many jobs do you think were created in the wind power sector in 2015 alone?", 
    "According to statistics, how many trees do you think could be saved if all newspapers were to be recycled?", 
    "What percent of water on earth is drinkable?",
    "Of the 150 glaciers present in northern Montana in 1910, how many do you think remain today?",
    "How many tons of Carbon Dioxide do you think we add to the atmosphere each MINUTE?",
    "What percent chance greater risk do you have of dying from lung cancer when living in a heavily air-polluted.",
    "What percent of all U.S. consumption of energy do you think comes from Solar Panels?",
    "How many children do you think die worldwide anually due to polluted water?",
    "What percent of U.S. carbon emmissions come from transportation alone?",
    "How many metric tons of carbon dioxide were prevented from entering into the atmosphere due to recycling in recent years?",
    "How many jobs in wind energy are projected to be created by 2030?",
    "How many species of animals do you think have become extinct in the last 100 years?",
    "What percent of antibiotic medication do you think is used for livestock in the U.S?",
    "How many jobs do you think have been created for solar energy?",
    "When do you think was the first hydroelectric generating facility created in the U.S.?",
    "What percent more effective do you think wind farms in the ocean are than from land?"];
//var data = ["hello", "asdf", "ikikik"];
var index = 0;
var dataA = ["40%", "30%", "20%"];
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

    document.getElementById("explanation").innerHTML = dataA[index];

}
