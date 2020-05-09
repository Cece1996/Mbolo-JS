//message qui demande à l'utilisateur d'entrer un nombre
let nombre1 = prompt("Ce programme calcule la somme de 2 nombres de votre choix. Entrez le premier nombre :",);

//message qui demande à l'utilisateur d'entrer le deuxième nombre
let nombre2 = prompt("Entrer le deuxième nombre :", );

//transformation des variables en type number et addition
let somme = parseInt(nombre1) + parseInt(nombre2); 
 
// message qui affiche le résultat du calcul
alert("La somme de "+nombre1+" + "+nombre2+" est: "+ somme);