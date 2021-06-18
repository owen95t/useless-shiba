let timer;
//let image = document.getElementById("shiba");
let calm;
let angry;

init();

function init(){
  window.addEventListener('mousemove', () => {
    mouseMoved();
    clearTimeout(timer);
    timer = setTimeout(stopped, 100);
  });
  preloadImages();
}

function mouseMoved(){
  console.log('mousemoved');
  document.getElementById('message').innerHTML = 'STOP MOVING YOUR MOUSE!!!';
  document.body.style.backgroundColor = "red";
  document.getElementById("shiba").src = 'angry-shiba.jpeg';
}

function stopped(){
  console.log('mouse stopped');
  document.getElementById('message').innerHTML = 'Dont move your mouse';
  document.body.style.backgroundColor = "lightgreen";
  document.getElementById("shiba").src = 'calm-shiba.jpeg';
}

function preloadImages() {
  calm = new Image();
  calm.src = 'happy-shiba.jpeg';
  angry = new Image();
  angry.src = 'angry-shiba.jpeg';
}

// function changeImage(){
//   console.log('CHANGE IMAGE CALLED');
//   let img = document.getElementById("shiba");
//
//   if(att == "happy-shiba.jpeg"){
//     img.src = "angry-shiba.jpeg";
//   }else{
//     img.src = "happy-shiba.jpeg";
//   }
//   console.log("image Source: " + document.getElementById("shiba").src);
// }
