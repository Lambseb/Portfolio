// faire le bouton qui affiche la nav vertical en responsive
const responsiveBtn = document.querySelector('.btn_responsive_svg')
const verticalNav = document.querySelector('.list_menu')

responsiveBtn.addEventListener('click', () => 
  verticalNav.style.display = 'block',
  verticalNav.style.transition ="2s",
);
// script pour écrire visuellement sur  la class "text_typing" 
//selectionner le text

const typingElement = document.querySelector('.typing_selection');
const textToType = "Développeur web front-end";
let index = 0;

// Ajoutez la variable actuelle au contenu de la balise avec timer<span>
function typeText() {
  if (index < textToType.length) {
    setTimeout(() => {
    typingElement.textContent += textToType.charAt(index);
    index++;
}, "3000");
  } else {
    clearInterval(typingInterval);
  }
}
// Appelez la fonction pour commencer l'effet d'écriture
const typingInterval = setInterval(typeText, 50);



// // INTERSECTION OBSERVER     
//     const ratio = 0.5;
// const options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: ratio
// };
// const objectObs = document.querySelectorAll('.slider_class');

// function handleIntersect (entries){
//   //   console.log(entries);
//     entries.forEach( entry => {
//      if (entry.intersectionRatio > ratio) {
//          entry.target.classList.add('pics_visible');
//          observer.unobserve(entry.target);
//      }
// })}
// const observer = new IntersectionObserver(handleIntersect, options);
// objectObs.forEach(imageScrolled =>{
//     observer.observe(imageScrolled)
// })
