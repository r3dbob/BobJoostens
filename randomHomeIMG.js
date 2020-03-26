window.onload = choose;

var myPix = new Array("img/walls/0.png", "img/walls/1.jpg", "img/walls/2.jpg", "img/walls/3.jpg", "img/walls/4.jpg", "img/walls/5.jpg", "img/walls/6.jpg", "img/walls/7.jpg", "img/walls/8.jpg");

var myVid = new Array("img/video/RADIO.mp4", "img/video/CONTROL.mp4", "img/video/ASFTTU.mp4", "img/video/FACES.mp4", "img/video/MATREND.mp4", "img/video/ROBOT_2.mp4", "img/video/RADIO.mp4", );

function choose() {
    var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("homeIMG").src = myPix[randomNum];
    var randomNum2 = Math.floor(Math.random() * myVid.length);
     document.getElementById("homeVID").src = myVid[randomNum2];
}