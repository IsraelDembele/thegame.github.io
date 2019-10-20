$(document).ready(function () {
    var TimeRemaining;
    var timeLeft = 10;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;
    var userChoice;
    var submit = $("#submit");
    var quiz = $("#quiz");
    var option1 = $("#option1");
    var option2 = $("#option2");
    var option3 = $("#option3");
    var option = $(".option");
    var timer = $("#timer");
    var i = 0;
    var time;

    // var question1 ={
    // q1 : "how many countries make up the continent of Africa?", 
    // r1: "46",
    // r2: "54", 
    // r3: "1",
    // correct: "r2"
    // }

    // var question2 ={
    //     q1 : "how many countries make up the continent of Africa?", 
    //     r1: "46",
    //     r2: "54", 
    //     r3: "1",
    //     correct: "r2"
    //     }

    //     var question3 ={
    //         q1 : "how many countries make up the continent of Africa?", 
    //         r1: "46",
    //         r2: "54", 
    //         r3: "1",
    //         correct: "r2"
    //         }
    // var questions = [question1, question2, question3];

    var questions = [
        {
            q1: "111how many countries make up the continent of Africa?",
            r1: "46",
            r2: "54",
            r3: "1",
            correct: "r2"
        },
        {
            q1: "2222how many countries make up the continent of Africa?",
            r1: "46",
            r2: "54",
            r3: "1",
            correct: "r2"
        },
        {
            q1: "33333how many countries make up the continent of Africa?",
            r1: "46",
            r2: "54",
            r3: "1",
            correct: "r2"
        }
    ]

    function count(){
       time = setInterval(function(){
            timeLeft = timeLeft - 1;
            timer.html(timeLeft);
            console.log(timeLeft);
            if(timeLeft == 0){
                i = i +1;
                unanswered = unanswered + 1;

                timeLeft = 10;
                if(i < questions.length){
                    timeLeft = 10;
                    start();
                } else{
                    end();
                }
                }
        },1000);
    }


    function end(){
        alert("correctAnswers: "+ correctAnswers+ "incorrectAnswers: "+incorrectAnswers);
        correctAnswers = 0 ;
        incorrectAnswers = 0;
        unanswered = 0; 
        i = 0; 
        clearInterval(time);
    }

    function start() {
        quiz.html(questions[i].q1);
        option1.html(questions[i].r1);
        option2.html(questions[i].r2);
        option3.html(questions[i].r3);
        timer.html(timeLeft);

    }

    function checker() {
        if (userChoice == questions[i].correct) {
            correctAnswers = correctAnswers + 1;
        }
        else {
            incorrectAnswers = incorrectAnswers + 1;
        }
    }


    start();
    count();

    submit.on('click', function () {
        option.prop('checked', false);
        checker();
        console.log("correctAnswers: ", correctAnswers, "incorrectAnswers: ",incorrectAnswers);
        i = i + 1;
        if(i < questions.length){
            timeLeft = 10;
            start();
        } else{
            end();
        }

    });

    option.on('change', function () {
        userChoice = this.value;
        option.not(this).prop('checked', false);
    });




    // console.log(timeLeft);


})