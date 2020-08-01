window.onload = choose;

function choose() {
    var index = Math.floor(Math.random() * 5);
    document.getElementById("post").src = "post/randomPosts/p" + index + ".txt";
}