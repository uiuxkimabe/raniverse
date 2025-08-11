const cta = document.querySelector('.cta');
const playSertaMulia = document.querySelector('#sertamulia');
const playYasudah = document.querySelector('#yasudah');
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
   }, 66000);
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
})

// Part Ramal


// Part Kuis
const btnRamal = document.querySelector(".btn-ramal"); //Seleksi Tombol Ramal
const resultRamal = document.querySelector(".hasil-ramal");
const health = document.querySelectorAll(".health-content"); //Seleksi Hasil Sehat
const career = document.querySelectorAll(".career-content"); //Seleksi Hasil Karir
const love = document.querySelectorAll(".love-content"); //Seleksi Hasil 

// destructuring content
const [health1, health2, health3] = health; //desc health content
const [career1, career2, career3] = career; //desc career content
const [love1, love2, love3] = love; //desc love content

function pilihan(health, career, love) {
  // Section Health
  switch (health) {
    case "A":
      health1.style.display = "block";
      break;
    case "a":
      health1.style.display = "block";
      break;
    case "B":
      health2.style.display = "block";
      break;
    case "b":
      health2.style.display = "block";
      break;
    case "C":
      health3.style.display = "block";
      break;
    case "c":
      health3.style.display = "block";
      break;

    default:
      break;
  }

  // Section Career
  switch (career) {
    case "A":
      career1.style.display = "block";
      break;
    case "a":
      career1.style.display = "block";
      break;
    case "B":
      career2.style.display = "block";
      break;
    case "b":
      career2.style.display = "block";
      break;
    case "C":
      career3.style.display = "block";
      break;
    case "c":
      career3.style.display = "block";
      break;

    default:
      break;
  }

  // Section Love
  switch (love) {
    case "A":
      love1.style.display = "block";
      break;
    case "a":
      love1.style.display = "block";
      break;
    case "B":
      love2.style.display = "block";
      break;
    case "b":
      love2.style.display = "block";
      break;
    case "C":
      love3.style.display = "block";
      break;
    case "c":
      love3.style.display = "block";
      break;

    default:
      break;
  }
}

let ask1;
let ask2;
let ask3;

// Tampilan Hasil Ramal
btnRamal.addEventListener("click", () => {
  ask1 = prompt(
    "Jika harus memilih, ingin seperti apa kamu 5/10 tahun ke depan ? \nA. Menjadi CEO \nB. Presiden \nC. Traveller \n\n*) Pilih A, B, atau C dengan huruf kapital "
  );
  ask2 = prompt(
    "Ruangan mana yang jadi tempat favoritmu di rumah ? \nA. Kamar Tidur \nB. Dapur \nC. Ruang Tamu \n\n*) Pilih A, B, atau C dengan huruf kapital "
  );
  ask3 = prompt(
    "Kamu ingin orang seperti apa untuk menjadi pasangan ? \nA. Pintar \nB. Good Looking  \nC. Kaya \n\n*) Pilih A, B, atau C dengan huruf kapital "
  );
  resultRamal.style.height = "300px";
  btnRamal.style.display = "none";
  pilihan(ask1, ask2, ask3);
});

// Klik CTA Next
ctaNext.addEventListener('click', () => {
   playYasudah.play()
});