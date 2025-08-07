const cta = document.querySelector('.cta');
const openingMsg = document.querySelector('.message');
const playSertaMulia = document.querySelector('#sertamulia');
const nextBtntoJumbotron = document.querySelector('main .message figcaption a');
const openingVideo = document.querySelector('main .message video')
const pageJumbotron = document.querySelector('#jumbotron');
cta.addEventListener('click',()=> {
   playLaguSertaMuliaSegment();
   openingMsg.classList.add('active');
   openingMsg.style.width = "100%";
   openingMsg.style.height = "90%";
   setTimeout(() => {
      pageJumbotron.style.display = 'block';
      pageJumbotron.style.height = '100vh';
      nextBtntoJumbotron.style.display = 'block';
      // openingVideo.removeAttribute('autoplay');
      // openingVideo.pause();
   }, 65000);
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