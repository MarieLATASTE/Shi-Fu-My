const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        const joueur = buttons[i].innerHTML;
        const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
        let resultat = "";
        
        //  Logique du jeu
        if(joueur === robot){
            resultat = "Egalité";
        }else if((joueur === "Pierre" && robot === "Ciseaux") ||
                  (joueur === "Feuille" && robot === "Pierre") || 
                  (joueur === "Ciseaux" && robot === "Feuille")){
            resultat = "Gagné !";
        }else if((joueur === "Puits" && robot === "Ciseaux") ||
                   (joueur === "Puits" && robot === "Pierre")){
            resultat = "Gagné avec la technique secrète!";
        }else{
            resultat = "Perdu";
         }

         document.querySelector('.resultat').innerHTML = `
            Joueur: ${joueur} </br>
            Robot: ${robot} </br>
            ${resultat} !
         `;

        // console.log(`Joueur: ${joueur} vs Robot: ${robot}`);

    });
}