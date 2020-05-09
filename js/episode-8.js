//message qui demande à l'utilisateur d'entrer son nom et son sexe
let name = prompt("Quel est votre nom ? ");
let sex = prompt("Quel est votre sexe ? F OU M ?");

//début Si
if (sex == "F") { //condition 1
    alert("Bonjour "+"Madame "+name);//affichage d'un message
} else if (sex == "M") { //condition 2
    alert("Bonjour "+"Monsieur "+name);//affichage d'un message
} else { //condition 3
    alert("Saisir : F ou M");//affichage d'un message
}