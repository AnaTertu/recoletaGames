postScore();
    var thisquizscore;
    function postScore() {
      var xhttp = new XMLHttpRequest(), s, x, n;
      thisquizscore = 48;
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          x = this.responseText;
          if (x == "OK" || x == "A" || x == "B" || x == "C" || x == "D") {
            console.log(x);
          } else if (x == "NEWBEST") {
            window.addEventListener("load", drawUserPoints);
          } else {
            console.log("Z");
          }
        }
      };
      xhttp.open("POST", "https://mypage.w3schools.com/mypage/set_quiz_score2.php", true);
      xhttp.withCredentials = true;
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send("s=" + thisquizscore + "&q=JS&a=2011043234322341222121311");
    }
    function drawUserPoints() {
      var n;
      if (document.getElementById("usergetspoint")) {
        document.getElementById("usergetspoint").style.display = "none";
        document.getElementById("usergetspoint").innerHTML = thisquizscore;
        document.getElementById("usergetspoint").style.display = "inline-block";
        n = Math.round(thisquizscore);
        degrees = n * 3.6;
        if (degrees > 359) degrees = 359;
        document.getElementById("mypage_circle1").setAttribute("d", loginDrawCircle(26, 35, 24, 0, 359));
        document.getElementById("mypage_circle2").setAttribute("d", loginDrawCircle(26, 35, 24, 0, degrees));
      }
    }
