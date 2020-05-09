//saisir la bonne réponse
let question = prompt("Combien font 3*5 ?");
let reponse = 3*5;

do{
    question = prompt(" Essayez encore");
}
while(parseInt(question)!=reponse);