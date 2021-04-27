const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        const player = buttons[i].innerHTML;
        const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
        let resultat = "";
        
        //  Logique du jeu
        if(player === robot){
            resultat = "Egalité";
        }else if((player === "Pierre" && robot === "Ciseaux") ||
                  (player === "Feuille" && robot === "Pierre") || 
                  (player === "Ciseaux" && robot === "Feuille")){
            resultat = "Gagné !";
        }else if((player === "Puits" && robot === "Ciseaux") ||
                   (player === "Puits" && robot === "Pierre")){
            resultat = "Gagné avec la technique secrète!";
        }else{
            resultat = "Perdu";
         }

         document.querySelector('.resultat').innerHTML = `
            Player: ${player} </br>
            Robot: ${robot} </br>
            ${resultat} !
         `;

        // console.log(`Player: ${player} vs Robot: ${robot}`);

    });
}