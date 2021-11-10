$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
           $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
           }
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
    });
});

//textpath svg
var textPath = document.querySelector('#text-path');

var textContainer = document.querySelector('#text-container');

var path = document.querySelector(
    textPath.getAttribute('href')
);

var pathLength = path.getTotalLength();
console.log(pathLength)

function updateTextPathOffset(offset){
    textPath.setAttribute('startOffset', offset);
}
updateTextPathOffset(pathLength);

function onScroll(){
    requestAnimationFrame(function(){
        var rect = 
        textContainer.getBoundingClientRect();
        var scrollPercent = rect.y / window.innerHeight;
        updateTextPathOffset(scrollPercent * 1.3 * pathLength);

    });

}
//logo svg
window.addEventListener('scroll',onScroll);

var scroll = window.requestAnimationFrame ||
    function(callback) {window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll');
function loop() {
  elementsToShow.forEach(function(element){
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });
  scroll(loop);
}
loop();
function isElementInViewport(el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
      }
      function handler(entries){
        for (const entry of entries){
          if (entry.isIntersecting){
            entry.target.classList.add("active");
          }else {
              entry.target.classList.remove("active");
          }
          }
        }
      
        const observer = new IntersectionObserver(handler, {threshold: 0.1,
        });
      
        observer.observe(document.querySelector(".kesvg"))
//show or hide button
function myFunction() {
    var slidercon = document.getElementById("slidercon");
    var btn = document.getElementById("btn")
    if (slidercon.style.display === "none") {
        slidercon.style.display = "block";
        btn.classList.add('show');
        btn.innerHTML = "Skjul Billeder"
    } else {
        slidercon.style.display = "none";
        btn.classList.remove('show');
        btn.innerHTML = "Vis Billeder"
    }
}
