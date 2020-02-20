window.onload = choosePic;

var myPix = new Array("img/walls/0.png", "img/walls/1.jpg", "img/walls/2.jpg", "img/walls/3.jpg", "img/walls/4.jpg", "img/walls/5.jpg", "img/walls/6.jpg", "img/walls/7.jpg");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("homeIMG").src = myPix[randomNum];
}