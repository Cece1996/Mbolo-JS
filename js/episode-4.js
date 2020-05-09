//  programme permettant de permuter les valeurs de deux variables. Le résultat est affiché en console.
let valeur1 = prompt("Ce programme permutte la valeur de deux variables. Entrez la première valeur");
let valeur2 = prompt("Entrer la seconde valeur");
let valeur3;

//permutation
valeur3 =valeur1;//valeur3 prend la valeur de valeur1
valeur1 =valeur2;//valeur1 prend la valeur de valeur2
valeur2 =valeur3;//valeur2 prend la valeur de valeur3

//Afficher dans la console
console.log("valeur 1 est finalement: "+valeur1+" et la valeur 2 est finalement: "+valeur2);