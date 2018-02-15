//  create an app object
const triviaApp = {};

//  create a function that will grab a random category of question
triviaApp.getInfo = () => {
    $.ajax({
        url: 'https://opentdb.com/api.php?amount=20&difficulty=medium&type=multiple',
            dataType: 'json',
            method: 'GET',
    
    }).then(function(info) {

        // for(let i = 0; i < 6; i++) {
        // let groupQuestion = (group) => {
        const infoz = info.results;
        console.log(infoz);
        const results = info.results[0].question;
        triviaApp.getQuestion(info.results[0].question);
        triviaApp.getAnswer(info.results[0].correct_answer);
        triviaApp.getWrongAnswer(info.results[0].incorrect_answers);
        // }
        // }
        console.log(results);

    });
//  create a new function for a timer once the question is displayed
}

triviaApp.nextQuestion = () => {
    // $('button').on('click', function(next) {
        for (i = 0; i < 6; i++) {
            info.results[i].question
            console.log(i);
        }
    // });
}

//  create a function that will grab the question
triviaApp.getQuestion = (question) => {
    //  displays question
    const displayQuestion = $('<h2>').text(question);
    $('.question').append(question);
    // for (let i = 0; i < 6; i++) {
    //     console.log([i]);
    // }
};

triviaApp.getAnswer = (answerRight) => {
    //  shows right answer option
    triviaApp.randomAnswers();
    $('.answers').append('<label><input class="right" type="radio" name="answer">' + answerRight + '</label>');
    console.log(answerRight);
    //  on click determines if right answer
    let rightUserChoice = $('.right').on('click', function (answerRight) {
        // console.log('correct');
    })
}

triviaApp.getWrongAnswer = (answerWrong) => {
    //  breaking apart 3 incorrect answers into separate answers
    answerWrong.forEach((answerBreakdown) =>{
        triviaApp.randomAnswers();
        
        //  shows wrong answer options
        $('.answers').append('<label><input class="wrong" type="radio" name="answer">' + answerBreakdown + '</label>');
        //  on click determines if wrong answer
        let wrongUserChoice = $('.wrong').on('click', function (answerWrong) {
            // console.log('wrong click');
    //     // console.log(answerWrong);
    })
})
    // triviaApp.userAnswer();
}

triviaApp.randomAnswers = () => {
    var questions = $("#answers");

    questions.html(
        questions.find("label").sort(function () {
            return Math.round(Math.random()) - 0.5;
        })
    );
}

triviaApp.matchedAnswer

// create a new function that would evaluate the userSelection to the correct answer
triviaApp.userAnswer = (userChoice) => {
    $('form').on('submit', function(e){
        e.preventDefault();
        console.log('submit');
        const answerSelection = $('input[name=answer]:checked').val();   
        const rightSelection = $('input:radio.right:checked').val();

        if (answerSelection === rightSelection){
            console.log('yay');   
        } else {
            console.log('wrong');
        }
    })
}

triviaApp.teams

triviaApp.userScore = () => {


}



//  create an object with two users to distinguish which team gets the point
//  create a for in loop????? if === to correct answer. add a point to teams score
//  once a team hits (x) of points, game over 
//  then start process again


//init function
triviaApp.init = () => {
    triviaApp.getInfo();
    triviaApp.getQuestion();
    triviaApp.userAnswer();
    triviaApp.nextQuestion();
}

//document ready function
$(function(){
    triviaApp.init();
});
