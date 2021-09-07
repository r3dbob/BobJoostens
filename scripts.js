document.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
    case 37:
    plusSlides(-1)
    break;
    case 39:
    plusSlides(1)
    break;
    }
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function openOV () {
    document.getElementById('main').classList.add('animOut');
    document.getElementById('topBar').style.backgroundColor = "#2c2c2c";
    document.getElementById('topBtn').style.animation = "fadeOut 0.3s ease both";
    setTimeout(function() {
        window.location.href = "https://archive.bobjoostens.be";
    }, 400);
    }

function test () {
    document.getElementById('ovBody').style.animation = "fadeOut 0.3s ease both"; 
    setTimeout(function() {
        location.reload();
    }, 400);
}

function show (cat, n) {
    var parta = "url('images/"
    var partb = "/"
    var partc = ".jpg')"
    var projectCode = parta.concat(cat, partb, n, partc);
    document.getElementById('work').style.backgroundImage = projectCode;
}