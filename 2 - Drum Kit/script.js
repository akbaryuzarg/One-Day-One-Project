function playSound(e) {
   const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
   if (!sound) {return;};
   key.classList.toggle('active');

   // console.log(sound);
   // console.log(e);

   sound.currentTime = 0;
   sound.play();
}

function removeTransition(e) {
   // skip kalau property nya bukan transform
   if (e.propertyName !== 'transform') {
      return;
   } 
   this.classList.remove('active'); // ngilangin class active kalau transform nya udh beres
}


const keys = Array.from(document.querySelectorAll('.key')); // ngambil div keys (bentuknya node list, jadi ubah ke array)
// Foreach untuk pengulangan tiap elemen array
keys.forEach(key => {
   key.addEventListener('transitionend', removeTransition);
});

window.addEventListener('keydown', playSound);