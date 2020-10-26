// function([string1, string2],target id,[color1,color2])    
consoleText(['Velkommen,'], 'title', ['#929ecc']);
setTimeout(function () {
  consoleText(['lad os udforske ugens emne'], 'under-title', ['#000000']);
}, 1800)

setTimeout(function () {
  consoleText(['og lære sammen!'], 'title-end', ['#000000']);
}, 2000 + 27 * 100)

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function () {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function () {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 100)
}

function openMenu() {
  var x = document.getElementById("links");
  if (x.style.display === "inline-block") {
    x.style.display = "none";
  } else {
    x.style.display = "inline-block";
  }
}