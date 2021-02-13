var slideIndex = 1;
showDiv(slideIndex);

function plusDivs2(n) {
  showDiv(slideIndex += n);
}

function showDiv(n) {
  var i;
  var x = document.getElementsByClassName("Slides2");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}