feather.replace();

$(function() {
  $("#dragMenu").draggable();
  });

var modal = document.querySelector("#aboutPop");
var closeButton = document.querySelector("#close");
var openButton = document.querySelector("#aboutLink");

closeButton.addEventListener("click", function() {
  modal.classList.toggle("closed");
});

openButton.addEventListener("click", function() {
  modal.classList.toggle("closed");
});

/* Fullscreen Function */
/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { 
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { 
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { 
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { 
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { 
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { 
    document.msExitFullscreen();
  }
}

/* Fullscreen Fuynction End */


let maxX, maxY;

function placeImg() {
    const imgSrcArray = ['../images/1.jpg','../images/2.jpg','../images/3.jpg','../images/4.jpg','../images/5.jpg','../images/6.png','../images/1.jpg','../images/2.jpg','../images/3.jpg','../images/4.jpg','../images/5.jpg','../images/6.png'];
    const {random: r} = Math;
    


    
    
      
      for(var i=0;i<imgSrcArray.length;i++){
        var x = r() * maxX;
        var y = r() * maxY;
        var link = `<a class="img-1" href="#"><img class="images" style="left: ${x}px; top: ${y}px;" src="${imgSrcArray[i]}"/><span>This is image number ${i}</span></a>`;
        var bodyHtml = document.getElementById("content-section").innerHTML;
        document.getElementById("content-section").innerHTML = bodyHtml + link;
      
    }
  

}


onload = function() {
    maxX = 3000 - 128;
    maxY = 3000 - 160;
    placeImg();
}

onresize = function() {
    maxX = 3000 - 128;
    maxY = 3000 - 160;
}