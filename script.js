const quiz=[
{question:"What should be your FIRST step when approaching a market entry case?",options:["Calculate TAM-SAM-SOM","Clarify client's objective","List competitors","Recommend entry mode"],answer:1},
{question:"Which factor most directly de-risks SpiceBite's UAE entry?",options:["6% market growth","Limited competitors","3.5M Indian diaspora","Global brand recognition"],answer:2},
{question:"How should a 2.5–3 year UAE payback period be interpreted?",options:["Abandon entry","Accept if strategic value exists","Negotiate rent first","Reduce menu prices"],answer:1},
{question:"Best UAE entry mode for SpiceBite?",options:["Wholly owned","Acquisition","Franchise partner","Export model"],answer:2},
{question:"Primary impact of importing ingredients?",options:["Illegal","Increases COGS","No impact","2-year delay"],answer:1},
{question:"Before recommending offline expansion, LearnBridge should:",options:["Build financial model","Benchmark NPS","Diagnose churn cause","Select cities"],answer:2},
{question:"Offline tutoring market insight?",options:["Pivot fully offline","10x larger opportunity","Cannot compete","Stop online investment"],answer:1},
{question:"Offline revenue per student implies:",options:["Online better","Improved unit economics","Raise online prices","No difference"],answer:1},
{question:"Best scaling model after validation?",options:["Company-owned","Franchise","Bandwidth issue","Avoid franchise"],answer:1},
{question:"Key competitive advantage?",options:["Lower rents","Hybrid model","First mover","Lower salaries"],answer:1}
];
let currentQuestion=0;let score=0;
const question=document.getElementById("question");
const options=document.getElementById("options");
const nextBtn=document.getElementById("nextBtn");
const progress=document.getElementById("progress");
function loadQuestion(){
progress.innerHTML=`Question ${currentQuestion+1}/${quiz.length}`;
question.innerText=quiz[currentQuestion].question;
options.innerHTML="";
quiz[currentQuestion].options.forEach((option,index)=>{
const btn=document.createElement("button");
btn.innerText=option;btn.classList.add("option");
btn.onclick=()=>selectAnswer(index);
options.appendChild(btn);});}
function selectAnswer(index){
const buttons=document.querySelectorAll(".option");
buttons.forEach(btn=>btn.disabled=true);
if(index===quiz[currentQuestion].answer){buttons[index].classList.add("correct");score+=10;}
else{buttons[index].classList.add("wrong");buttons[quiz[currentQuestion].answer].classList.add("correct");}}
nextBtn.onclick=()=>{currentQuestion++;
if(currentQuestion<quiz.length){loadQuestion();}
else{document.querySelector(".quiz-container").innerHTML=`<h1>Quiz Completed!</h1><h2>Your Score: ${score}/100</h2>`;}}
loadQuestion();