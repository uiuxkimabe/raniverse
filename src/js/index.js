const cta = document.querySelector('.cta');
const playSertaMulia = document.querySelector('#sertamulia');
const mainOpen = document.querySelector('main');
cta.addEventListener('click',()=> {
   mainOpen.classList.add('active')
   playLaguSertaMuliaSegment();
   
})

// Function Lagu Serta Mulia Di Mulai
function playLaguSertaMuliaSegment() {
   playSertaMulia.currentTime = 117;
   playSertaMulia.play();
   const stopAt = 248;
   function onTimeUpdate() {
      if (playSertaMulia.currentTime >= stopAt) {
         playSertaMulia.pause();
         playSertaMulia.removeEventListener('timeupdate', onTimeUpdate);
      }
   }
   playSertaMulia.addEventListener('timeupdate', onTimeUpdate);
}