
let nextCount = 0;
function nextQuestion(){

    //move pointer to the next question
    nextCount++;

    //load question
    const title = document.getElementById("title");
    const question1Div = document.getElementById("answerDiv");
    const question2Div = document.getElementById("optionsDiv");
    const question3Div = document.getElementById("priceDiv");
    switch (nextCount) {
        case 1:
            //load question 1
            title.innerHTML = "What do you want to learn?";
            question1Div.style.display = "flex";
            break;
        case 2:
            //load question 2
            title.innerHTML = "How familiar are you with the topic?";
            question1Div.style.display = "none";
            question2Div.style.display = "initial";
            break;
        case 3:
            //load question 3
            title.innerHTML = "What's your budget?";    
            question1Div.style.display = "none";
            question2Div.style.display = "none"; 
            question3Div.style.display = "flex";
            const btn = document.getElementById("nextBtn");
            btn.style.width = "19%"
            btn.value = "View Courses";
            break; 
        case 4:
            
            break;       
    }
}

function redirect(path){
    window.location.href = path;
}

nextQuestion();