
                               
                                                /*******les histoires******************/

                                                
// Importez les histoires depuis le fichier histoires.js
import histoires from './histoires.js';

// Sélection de l'élément select pour l'histoire
const selectHistoire = document.getElementById('selectHistoire');

// Sélection de l'élément select pour la typographie
const selectTypo = document.getElementById('selectTypo');

// Sélection de l'élément texte où afficher l'histoire
let texteHistoire = document.querySelector('.texteHistoire');

                                                /*******Ecriture du texte souhaitez******************/

 // Récupérer le textarea et la div
 var textarea = document.getElementById("inputText");

 // Ajouter un écouteur d'événement sur le changement de contenu du textarea
 textarea.addEventListener("input", function() {
     // Mettre à jour le contenu de la div avec le contenu du textarea
     texteHistoire.textContent = "";
     texteHistoire.textContent = textarea.value;
 });


// Fonction pour afficher l'histoire sélectionnée
function afficherHistoire() {
    const histoireSelectionnee = selectHistoire.value;
    const histoire = histoires[histoireSelectionnee];
    texteHistoire.innerHTML = histoire;
}

// Ajout d'un écouteur d'événement pour détecter les changements de sélection de l'histoire
selectHistoire.addEventListener('change', afficherHistoire);

// Ajout d'un écouteur d'événement pour détecter les changements de sélection de la typographie
selectTypo.addEventListener('change', function() {
    // Récupérer la valeur de la typographie sélectionnée
    var selectedTypo = selectTypo.value;

    // Appliquer la typographie au texte de l'histoire
    texteHistoire.style.fontFamily = selectedTypo;
});

// Affichage initial de l'histoire sélectionnée
afficherHistoire();







                                                /*******Effacement du texte******************/


//Récupération du bouton
let button = document.querySelector(".go")


button.addEventListener('click',()=>{

            // Sélection de la div contenant le texte
        // const texteHistoire = document.querySelector('.texteHistoire');

        // Récupération de chaque mot
        const mots = texteHistoire.textContent.split(' ');

        // Remplacement du contenu de la div par des spans autour de chaque mot
        texteHistoire.innerHTML = mots.map(mot => `<span class="mot">${mot}</span>`).join(' ');

        // Sélection de tous les mots
        const motsElements = document.querySelectorAll('.mot');
        // Fonction pour réinitialiser le texte après la fin de l'animation karaoké
          function reinitialiserTexte() {
            motsElements.forEach(mot => {
              mot.classList.remove('en-vedette'); // Supprimer la classe pour mettre en évidence le mot
            });
          }
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






