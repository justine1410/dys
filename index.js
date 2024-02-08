                                                
                                                /*******les histoires******************/
  const histoires = {
    1:` 
    Il était une fois, dans un monde ancien où les dinosaures régnaient en maîtres, un petit dinosaure nommé Rex. 
    Il était différent des autres dinosaures : plus petit, mais plus agile et plus malin. Un jour, alors qu'il explorait la forêt préhistorique, 
    il découvrit un mystérieux objet brillant sous un buisson. C'était une étrange boîte en pierre contenant une carte avec des symboles énigmatiques. I
    ntrigué, Rex décida de suivre cette carte pleine de promesses. Il traversa des jungles touffues, escalada des falaises escarpées et évita des pièges sournois. 
    Finalement, après de nombreuses aventures, Rex découvrit un trésor inestimable : un nid rempli de délicieux œufs de dinosaures multicolores. Heureux, il rentra chez lui, 
    convaincu qu'il n'avait pas besoin d'un trésor pour être le plus grand explorateur de tous les temps. Car après tout, avec son courage et sa détermination, il 
    pouvait conquérir n'importe quel défi et vivre des aventures extraordinaires, même dans un monde de dinosaures. Et c'est ainsi que le petit Rex comprit que le 
    plus grand trésor était l'amitié et les merveilleuses aventures partagées avec ses compagnons dinosaures.`,
  
      2:`
    Dans une vallée verdoyante, vivait Bulbao, un petit monstre vert. Contrairement à ses semblables, Bulbao préférait les fleurs aux frayeurs. 
    Un jour, un géant effrayant menaça le village. Intrépide, Bulbao s'avança. Il découvrit que le géant était solitaire et triste. Bulbao eut une idée brillante. 
    Il dansa avec le géant sous la lueur de la lune, lui montrant l'amitié. Touché, le géant abandonna ses plans. Dorénavant, Bulbao et le géant étaient amis, diffusant joie et bonheur. 
    La vallée célébrait leur amitié, prouvant que même les monstres peuvent être gentils. Et Bulbao, le petit monstre vert, illuminait leur vie.
      `,
      // Ajoutez d'autres histoires ici en associant chaque numéro d'option à son contenu
    };
                                                
console.log('coucou');

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





