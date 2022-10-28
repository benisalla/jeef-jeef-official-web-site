consoleText(["nous some ?", "nous some ?", "nous some ?"], "text", [
  "tomato",
  "rebeccapurple",
  "lightblue",
]);
function consoleText(words, id, colors) {
  if (colors === undefined) colors = ["#fff"];
  var visible = true;
  var con = document.getElementById("console");
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function () {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);
  window.setInterval(function () {
    if (visible === true) {
      con.className = "console-underscore hidden";
      visible = false;
    } else {
      con.className = "console-underscore";

      visible = true;
    }
  }, 400);
}
["resize", "load"].forEach(function (e) {
  window.addEventListener(e, function () {
    var x = document.querySelector(".container-cellule");
    var dispLarge = document.querySelector("#displayLarge");
    var dispMobile = document.querySelector("#displayMobile");
    if (window.innerWidth > 660) {
      x.style.display = "flex";
      dispLarge.style.display = "block";
      dispMobile.style.display = "none";
    } else {
      x.style.display = "none";
      dispLarge.style.display = "none";
      dispMobile.style.display = "flex";
    }
  });
});
