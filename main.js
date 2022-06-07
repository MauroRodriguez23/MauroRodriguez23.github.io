
let playCancion1 = document.getElementById('play1');
let playCancion2 = document.getElementById('play2');

let volumen = document.getElementById('volumen');
const audio1 = document.getElementById('audio1');
const audio2 = document.getElementById('audio2');


volumen.addEventListener('click', function(){
    let vol = this.value
    audio1.volume = vol;
    audio2.volume = vol;
})





playCancion1.addEventListener("click", reproducir1);

function reproducir1(){
  if (audio1.paused || audio1.ended) {
    audio1.play();
    playCancion1.querySelector(".play_btn").style.display = 'none';
    playCancion1.querySelector(".pause_btn").classList.toggle("hide");
  } else {
    audio1.pause();
    playCancion1.querySelector(".play_btn").style.display = 'block';
    playCancion1.querySelector(".pause_btn").classList.toggle("hide");
  }
};

playCancion2.addEventListener('click', reproducir2);

function reproducir2(){
  if (audio2.paused || audio2.ended) {
    audio2.play();
    playCancion2.querySelector(".play_btn").style.display = 'none';
    playCancion2.querySelector(".pause_btn").classList.toggle("hide");
  } else {
    audio2.pause();
    playCancion2.querySelector(".play_btn").style.display = 'block';
    playCancion2.querySelector(".pause_btn").classList.toggle("hide");
  }
};