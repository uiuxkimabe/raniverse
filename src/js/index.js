// SVG Path
const path = document.querySelectorAll('.text-animation svg path');

path.forEach(element => {
   console.info(`letter ${element} is ${element.getTotalLength()}`);
});