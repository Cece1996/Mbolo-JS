//affichage d'une message qui demande le montant de la facture
let montantFacture = prompt("Ce programme vous permet de savoir si vous avez droit à une remise. Quel est le montant de votre facture ?");

//calcul de la remise
let remise = parseInt(montantFacture) - (parseInt(montantFacture)*10)/100;

//conditions de remise
if (parseInt(montantFacture)> 40000) {
    alert("Vôtre facture est de : "+remise);//Montant avec remise
} else if (parseInt(montantFacture)>0 && parseInt(montantFacture)<= 40000) {
    alert("Vôtre facture est de : "+parseInt(montantFacture));//Montant sans remise
} else {
    alert("Rentrez une valeur positive");//autre
}