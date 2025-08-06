const cta = document.querySelector('.cta');
const openingMsg = document.querySelector('.message');
const playSertaMulia = document.querySelector('#sertamulia');
const pageJumbotron = document.querySelector('#jumbotron');
cta.addEventListener('click',()=> {
   playLaguSertaMuliaSegment();
   openingMsg.classList.add('active');
   openingMsg.style.width = "100%"
   pageJumbotron.style.display = 'block';
   pageJumbotron.style.height = '100vh';
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
