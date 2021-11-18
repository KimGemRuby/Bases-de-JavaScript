// Un prompt s'affiche avec la question suivante
"De quel nombre veux-tu calculer la factorielle ?"
// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
"Le résultat est : 24"

const factorial=(num)=>{
    let result=1
    
    for(let i=1;i<=num;i++){
        result=result*i;
        
    }

    console.log("get result");
    console.log(result)   
}


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('please choose a number?', number => {
    console.log(factorial(number));
    readline.close();
  });
