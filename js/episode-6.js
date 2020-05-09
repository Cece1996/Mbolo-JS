//saisir les 3 nombres
let number1 = prompt("Ce programme donne la moyenne de trois nombres. Entrer le premier nombre :");
let number2 = prompt("Entrer le second nombre :");
let number3 = prompt("Entrer le troisième nombre :");

//Calcul de la moyenne 
let moyenne = (parseInt(number1) + parseInt(number2) + parseInt(number3))/ 3;

//affichage du résultat
alert("La moyenne de ces trois nombres est: "+moyenne);