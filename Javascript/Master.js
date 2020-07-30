var backgrd = document.getElementById("Parallax");

document.addEventListener("scroll", function(){
  var offset = window.pageYOffset;
  var bgOffset = -offset*0.1;
  backgrd.style.backgroundPositionY = bgOffset+"px";
})
