const questions = document.querySelectorAll("#question")

questions.forEach(function(question){
    question.addEventListener("click", function(){
        const answer = question.nextElementSibling;

        const allAnswers = document.querySelectorAll("#answer");

        allAnswers.forEach(function(ans){
            if(ans !== answer){
                ans.style.display = "none";
            }
        });

        if(answer.style.display === "block"){
            answer.style.display = "none";
        }else{
            answer.style.display = "block";
            answer.style.maxHeight = answer.scrollHeight + "px";
            answer.style.maxHeight.transition = ".4s ease-in-out";
        }
    })
})