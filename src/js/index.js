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
      about.style.display = 'block';
   }, 10000);
   
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

// Confetti
function startConfetti() {
   const duration = 15 * 1000,
   animationEnd = Date.now() + duration;

   let skew = 1;

   function randomInRange(min, max) {
   return Math.random() * (max - min) + min;
   }

   (function frame() {
   const timeLeft = animationEnd - Date.now(),
      ticks = Math.max(200, 500 * (timeLeft / duration));

   skew = Math.max(0.8, skew - 0.001);

   confetti({
      particleCount: 1,
      startVelocity: 0,
      ticks: ticks,
      origin: {
         x: Math.random(),
         // since particles fall down, skew start toward the top
         y: Math.random() * skew - 0.2,
      },
      colors: ["#ffffff"],
      shapes: ["circle"],
      gravity: randomInRange(0.4, 0.6),
      scalar: randomInRange(0.4, 1),
      drift: randomInRange(-0.4, 0.4),
   });

   if (timeLeft > 0) {
      requestAnimationFrame(frame);
   }
   })();
}

ctaNext.addEventListener('click', () => {
   startConfetti();
}