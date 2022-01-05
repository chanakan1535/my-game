window.onload=function(){
    var img = document.getElementById("popver1");
    var audio = new Audio("dog.mp3");

    img.addEventListener('mousedown', function(){
        img.src ='img/2.jfif'
        audio.play();

    })
    img.addEventListener('mouseup', function(){
        img.src="img/1.jfif"
        audio.play();
    })
}
