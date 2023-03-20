
const quiz=[
{
 question:"ques1: what is mahendra's favrite sport?",
 a:"volleyball",
 b:"badminton",
 c:"cricket",
 d:"football",
 ans:"ans1"
},
{
  question:"ques2: who is mahendra's oldest friend ?",
  a:"pratham",
  b:"zaid",
  c:"tarun",
  d:"sobuu",
  ans:"ans2"
},
{
  question:"question 3 : what is speed of light?",
  a:"3*10^8m/s",
  b:"2^10^8m/s",
  c:"~3*10^8m/s",
  d:"10m/s m/s",
  ans:"ans3"
},
{
  question:"question 4 : what is full of html ?",
  a:"hyper text markup language",
  b:"hyper tension math language",
  c:"home top mar language",
  d:" nahi atta ",
  ans:"ans1"
},
{
  question:"question 5 : what is full of css ?",
  a:"nhi pata yrr",
  b:"cascad style sheets",
  c:"contemporary style sheets",
  d:"yaad nhi ",
  ans:"ans2"
},
{
  question:"question 6 : kisi lagi meri site ?",
  a:"average",
  b:"good",
  c:"worst",
  d:"not so good",
  ans:"ans2"
}
];
//  question1=document.querySelector(".question");
// const option1=document.querySelector("#option1");
// const option2=document.querySelector("#option2");
// const option3=document.querySelector("#option3");
// const option4=document.querySelector("#option4");

//    const loadQuestion= () =>{
// //   document.getElementById('#question').innerHTML = quiz[0].question;
//  console.log(quiz[0].question);
//   }
var i=0;
var score=0;
var name;
var pwd;
function mylogin(){
document.getElementById("login").style.display='none';
document.getElementById("b1").style.display='flex';
}
// dmdmmd{}
function mysubmit2(){
 name=document.getElementById("Email").value;
 pwd = document.getElementById("pwd").value;
if(name==pwd){
   alert("Thank you " + name + " for sign in ");
   document.getElementById("b1").style.display='none';
   document.getElementById("content1").style.display='flex';
}
else{
   alert("incorrect id or username retry ");
   document.getElementById("login").style.display='flex';
document.getElementById("b1").style.display='none';
}
  }
function mystart(){
alert('the quiz is going to start');
document.getElementById("op").style.display='block';
document.getElementById("next").style.display='flex';
document.getElementById("submit").style.display='flex';
// document.getElementsByTagName("box11").style.display='flex';
myfun();
document.getElementById("start").style.display='none';
}
function myfun(){
var question1= document.getElementById("question");
question1.innerHTML=quiz[i].question;
var option1=document.querySelector("#option1");
option1.innerHTML=quiz[i].a;
var option2=document.querySelector("#option2");
option2.innerHTML=quiz[i].b;
var option3=document.querySelector("#option3");
option3.innerHTML=quiz[i].c;
var option4=document.querySelector("#option4");
option4.innerHTML=quiz[i].d;
}
function mynext(){
mycheck();
if(i<=5){
myfun();
}
else{
alert(name + ' it is a last question !! please click on submit if you done  ');
document.getElementById("next").style.display='none';
}
}
function mysubmit(){
document.getElementById("score").style.display='flex';
document.getElementById("submit").style.display='none';
document.getElementById("next").style.display='none';
document.getElementById("op").style.display='none';
console.log(question.innerHTML);
document.getElementById("question").innerHTML="Thank You For Giving Your Valuable Time";
console.log(question.innerHTML);
myscore();   
}
function myscore(){
alert( name + ' your calculated score = > '+ score);
}
function mycheck(){
var ansid;
if(document.getElementById("ans1").checked){
ansid=ans1;
}
else if(document.getElementById("ans2").checked){
ansid=ans2;
}
else if(document.getElementById("ans3").checked){
ansid=ans3;
}
else if(document.getElementById("ans4").checked){
ansid=ans4;
}
if(ansid.id==quiz[i].ans){
score++;
}
// alert( ansid.id + quiz[i].ans + ' ' + score);
i=i+1;
}

