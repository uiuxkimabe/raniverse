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
const ctaPesan = document.querySelector('.cta-pesan');
const ctaUniverse = document.querySelector('.cta-to-universe');
ctaNext.addEventListener('click', () => {
   playYasudah.play()
   setTimeout(() => {
      ctaPesan.style.display = 'block';
      ctaNext.style.display = 'none';
   }, 60000);
});

ctaPesan.addEventListener('click',()=> {
  const pesanShow = document.querySelector('.pesanPenting');
  pesanShow.style.height = "100vh";
  resultRamal.style.display = 'none';
  mainOpen.style.display = 'none';
  ctaPesan.style.display = 'none';
  setTimeout(() => {
    typing()
  }, 1000);
})

const typingElement = document.querySelector('span#element');
// Function typing
function typing() {
    let typed = new Typed('#element', {
        strings: ['<i>Hei ran.., how was your day ??</i>','<i>Baik - baik aja kan ?</i>',' <i>1 tahun lalu ga kerasa ya Ran..</i>','Tahun ini usia Rani udah 20 puluh</i>','<i>Rani udah dewasa 😭</i>','<i>Ran..., pasti sulit ya jadi Rani<i/>','<i>Apa ada banyak hal yang rani pikul ?</i>','<i>Kadang kiki lihat Rani senyum, tapi mata Rani engga</i>','<i>Mungkin karena itu, kiki berpikir gitu</i>','<i>Maaf kalo kiki sok tau, mungkin.. feeling aja.</i>','<i>Terlepas itu bener atau salah..</i>','<i>Rani sehat - sehat ya!</i>','<i>Boleh ya, kiki titip pesen buat Rani..</i>','<i>Ran.., kalo suatu saat Rani lagi ngerasa kecewa didunia</i>','<i>Mungkin Rani bisa inget ini</i>', '<i>Ketika kita bisa ikhlas, nerima kekecewaan idup.</i>','<i>Itu bisa jadi tanda Allah bakal bales tuntas rasa kecewa kita tuh dengan beribu ribu kebaikan</i>','<i>Jadi kita perlu belajar ngerti kalo segala sesuatu yang baik buat kita, ga bakal Allah ijinin pergi kecuali bakal digantiin sama bentuk lain yang lebih baik lagi.</i>','<i>Allah ga menyegerakan atau memperlambat selain alasan keduanya pasti baik.</i>','<i>It really happen, for a good reason.</i>','<i>kadang yang bikin kecukupan rejeki, kesehatan itu bukan karna usaha kita siang malem."</i>','<i>Bisa jadi karna cara kita nerima semua hal yang ga enak, tanpa  drama tanpa bales dendam</i>','<i>Mau dipandang jelek, macem macem tapi kita tetep diem, kita tetep jalan. tetep doain yang baik - baik.</i>','Itu ga gampang, tapi disitu justru letak kuatnya kamu','Semesta tuh suka sama orang yang hatinya lapang yang fokus gimana caranya untuk tetap tenang', 'Kelimpahan, kesehatan, ketenangan itu datang ke hati orang yang udah siap menerima','Bukan ke hati yang sibuk untuk diakuin sama dunia','Kamu lagi dilatih jadi wadah sama Allah, buat siap nerima','Dan kamu bakal kaget seindah apa hadiah yang bakalan Kamu terima.'],
        typeSpeed: 40,
        fadeOut: true,
        // loop: true,
        backDelay: 3000,
        showCursor: false,
        smartBackspace: true
    });
    return typed
}