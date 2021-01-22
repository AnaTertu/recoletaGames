
// const quiz = [
//     {
//         q: 'Costuma comer?',
//         options:['Sozinha(o)?', 'Com a família ou amigos'],
//         answer:1
//     }
// ]

postScore();
function clickRadio(element) {
  var n, i, x;
  n = element.id;
  for (i = 1; i < 5; i++) {
    x = document.getElementById("label" + i);
    if (x) {x.className = x.className.replace(" checkedlabel", "");}
  }
  document.getElementById("label" + n).className += " checkedlabel";
}
function clickNextButton(n) {
  submitAnswer(n + 1);
}
function submitAnswer(n) {
  var f = document.getElementById("quizform");
  f["nextnumber"].value = n;
  f.submit();
}
function startTimer() {
  var tobj = document.getElementById("timespent")
  var t = "0:00";
  var s = 00;
  var d = new Date();
  var timeint = setInterval(function () {
    s += 1;
    d.setMinutes("0");
    d.setSeconds(s);
    min = d.getMinutes();
    sec = d.getSeconds();
    if (sec < 10) sec = "0" + sec;
    document.getElementById("timespent").value = min + ":" + sec;
  }, 1000);
  tobj.value = t;
}
if (window.addEventListener) {              
  window.addEventListener("load", startTimer);
} else if (window.attachEvent) {                 
  window.attachEvent("onload", startTimer);
}
