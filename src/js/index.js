const cta = document.querySelector('.cta');
const playSertaMulia = document.querySelector('#sertamulia');
const mainOpen = document.querySelector('main');
const jumbotron = document.querySelector('#jumbotron');
const ctaNext = document.querySelector('.cta-next');
const about = document.querySelector('#about');
cta.addEventListener('click',()=> {
   mainOpen.classList.add('active')
   playLaguSertaMuliaSegment(117, 248);
   setTimeout(() => {
      jumbotron.style.display = 'block';
   }, 2000);
   setTimeout(() => {
      ctaNext.style.display = 'block';
      about.style.display = 'flex';
   }, 65000);
   
})

// Function Lagu Serta Mulia Di Mulai
function playLaguSertaMuliaSegment(start, stop) {
   playSertaMulia.currentTime = start;
   playSertaMulia.play();
   const stopAt = stop;
   function onTimeUpdate() {
      if (playSertaMulia.currentTime >= stopAt) {
         playSertaMulia.pause();
         playSertaMulia.removeEventListener('timeupdate', onTimeUpdate);
      }
   }
   playSertaMulia.addEventListener('timeupdate', onTimeUpdate);
}