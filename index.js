                                                /*******les histoires******************/
console.log('coucou');
// Importez les histoires depuis le fichier histoires.js
import histoires from './histoires.js';

// Sélection de l'élément select
const selectHistoire = document.getElementById('selectHistoire');

// Sélection de l'élément texte où afficher l'histoire
const texteHistoire = document.querySelector('.texteHistoire');

// Fonction pour afficher l'histoire sélectionnée
function afficherHistoire() {
  const histoireSelectionnee = selectHistoire.value;
  const histoire = histoires[histoireSelectionnee];
  const histoireAvecCouleur = colorierLettresMuette(histoire);
  texteHistoire.innerHTML = histoireAvecCouleur;
}

// Ajout d'un écouteur d'événement pour détecter les changements de sélection
selectHistoire.addEventListener('change', afficherHistoire);

// Fonction pour mettre en couleur les lettres muettes
function colorierLettresMuette(mot) {
    return mot.replace(/[^aeiouy\s]/gi, '<span class="muette">$&</span>');
  }
  
// Affichage initial de l'histoire sélectionnée
afficherHistoire();




                                                /*******Effacement du texte******************/


//Récupération du bouton
let button = document.querySelector(".go")


button.addEventListener('click',()=>{

            // Sélection de la div contenant le texte
        const texteKaraoke = document.querySelector('.texteHistoire');

        // Récupération de chaque mot
        const mots = texteKaraoke.textContent.split(' ');

        // Remplacement du contenu de la div par des spans autour de chaque mot
        texteKaraoke.innerHTML = mots.map(mot => `<span class="mot">${mot}</span>`).join(' ');

        // Sélection de tous les mots
        const motsElements = document.querySelectorAll('.mot');

        // Fonction pour mettre en évidence chaque mot progressivement
        function mettreEnVedette() {
        motsElements.forEach((mot, index) => {
            setTimeout(() => {
            mot.classList.add('en-vedette'); // Ajouter la classe pour mettre en évidence le mot
            if (index === motsElements.length - 1) {
                // Si c'est le dernier mot, appeler la fonction pour réinitialiser le texte
                setTimeout(reinitialiserTexte, 1000);
            }
            }, index * 1000); // Ajouter un délai croissant pour chaque mot
        });
}


    mettreEnVedette()
})

// Fonction pour réinitialiser le texte après la fin de l'animation karaoké
function reinitialiserTexte() {
  motsElements.forEach(mot => {
    mot.classList.remove('en-vedette'); // Supprimer la classe pour mettre en évidence le mot
  });
}





