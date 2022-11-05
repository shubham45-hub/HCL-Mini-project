const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Markup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1" 
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Test Protocol",
        c: "Hey Transfer Protocol",
        d: "Hypertext Transfer Protocol",
        ans: "ans4" 
    },
    {
        question: "Q4: What is the full form of JS?",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "JordenShoes",
        ans: "ans1" 
    },
    {
        question: "Q5: Who is the father of C language?",
        a: "Steve Jobs",
        b: "James Gosling",
        c: "Dennis Ritche",
        d: "Rasmus Lerdorf",
        ans: "ans3"  
    },
    {
        question: "Q6: Which of the following is not a valid C variable name?",
        a: "int number;",
        b: "float rate;",
        c: "int variable_count;",
        d: "int $main;",
        ans: "ans4"  
    },
    {
        question: "Q7: Which of the following declaration is not supported by C language?",
        a: "String str;",
        b: "char *str;",
        c: "float str = 3e2;",
        d: " Both String str; & float str = 3e2;",
        ans: "ans1"  
    },
    {
        question: "Q8: What is an example of iteration in C?",
        a: "for",
        b: "while",
        c: "do-while",
        d: "all of the mentioned",
        ans: "ans4"  
    },
    {
        question: "Q9: Functions can return enumeration constants in C?",
        a: "true",
        b: "false",
        c: "depends on the compiler",
        d: "depends on the standard",
        ans: "ans1" 
    },
    {
        question: "Q10: What is #include <stdio.h>?",
        a: "Preprocessor directive",
        b: "Inclusion directive",
        c: "File inclusion directive",
        d: "None of the mentioned",
        ans: "ans1" 
    },
    {
        question: "Q11: Which of the following are C preprocessors?",
        a: "#ifdef",
        b: "#define",
        c: "#endif",
        d: "all of the mentioned",
        ans: "ans4" 
    },
    {
        question: "Q12: How many number of pointer (*) does C have against a pointer variable declaration?",
        a: "7",
        b: "127",
        c: "255",
        d: "No Limits",
        ans: "ans4" 
    },
    {
        question: "Q13: Which of the following return-type cannot be used for a function in C?",
        a: "char *",
        b: "struct",
        c: "void",
        d: "none of the mentioned",
        ans: "ans4" 
    },
    {
        question: "Q14: What is the sizeof(char) in a 32-bit C compiler?",
        a: "1 bit",
        b: "2 bits",
        c: "1 byte",
        d: "2 bytes",
        ans: "ans3" 
    },
    {
        question: "Q15: scanf() is a predefined function in______header file.",
        a: "stdlib. h",
        b: "ctype. h",
        c: "stdio. h",
        d: "stdarg. h",
        ans: "ans3" 
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = ()=>{
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();

const getCheckAnswer = ()=>{
   let answer;
   answers.forEach((curAnsElem)=>{
      if(curAnsElem.checked){
        answer = curAnsElem.id;
      }
   });
   return answer;
}

const deselectAll = ()=>{
    answers.forEach((curAnsElem)=>curAnsElem.checked=false);
}

submit.addEventListener('click', ()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };
    
    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
           <h3> You scored ${score}/${quizDB.length} </h3>
           <button class="btn" onclick="location.reload()">Play Again </button>
        `;
        showScore.classList.remove('scoreArea');
    }
});