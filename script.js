// faire le bouton qui affiche la nav vertical en responsive
const responsiveBtn = document.querySelector(".btn_responsive_svg");
const verticalNav = document.querySelector(".list_menu");

responsiveBtn.addEventListener(
  "click",
  () => (verticalNav.style.display = "block"),
  (verticalNav.style.transition = "2s")
);

// Ecouteur d'evenement pour écrire visuellement sur  la class "text_typing"
//selectionner le text

const typingElement = document.querySelector(".typing_selection");
const textToType = "Développeur web full-stack junior";
let index = 0;

// Ajoutez la variable actuelle au contenu de la balise avec timer<span>
/**
 * @param {string} textToType chaine de caractere à faire apparaitre
 * @param {HTMLElement}typingElement selecteur dans lequel la chaine de caractère apparaitra
 * @param {number} typingInterval intervalle de temps entre chaque partie de la string
 * @param {number} index nombre qui défini la position de l'index du caractere qui apparaitra
 */
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
// autorisation des caracteres pour le formulaire ligne 213 HTML
const myForm = document.getElementById("formulary");

myForm.addEventListener("submit", (e) => {
  const input = document.getElementById("name");
  const theRegex = /^[a-zA-Z-\s]+/;
  if (input.value.trim() == "") {
    e.preventDefault();
    alert(
      "veuillez remplir les champs obligatoire\n nom & prénom \n e-mail \n objet"
    );
  } else if (theRegex.test(input.value) == false) {
    e.preventDefault();
    alert(
      "les caractéres spéciaux ne sont pas admis dans les champs obligatoire \n nom & prénom \n e-mail \n objet"
    );
  }
});
