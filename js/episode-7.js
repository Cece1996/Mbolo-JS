//message qui demande à l'utilisateur d'entrer son âge
let ageUser = prompt("Quel âge avez-vous? ");

//affichage du message correspondant à la tranche d'âge
let situation = (parseInt(ageUser)>18) ? alert("Vous êtes majeur"):alert("Vous êtes mineur")