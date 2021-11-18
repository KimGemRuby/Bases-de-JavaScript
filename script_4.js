//2.3. Analyses de données
//2.3.1. Startup Nation
//Tu es en train d'écrire un livre sur les entrepreneurs américains et tu te renseignes sur leurs dates de naissance pour voir si tu ne peux pas identifier un millésime à succès.

//Pendant ta recherche tu tombes sur une array contenant des entrepreneurs connus et leurs dates de naissance.

//Réalise un script script_4.js qui affichera dans la console les questions suivantes et leur réponses :

//Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;
//Sors une array qui contient le prénom et le nom des entrepreneurs ;
//Quel âge aurait chaque inventeur aujourd'hui ?
//Trie les entrepreneurs par ordre alphabétique du nom de famille.


const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

  const result = entrepreneurs.filter(word => word.year >= 1970 && word.year <= 1979);
console.log(result);

//Sors une array qui contient le prénom et le nom des entrepreneurs ;

let height = prompt("Quelle est ta taille ?");

const result1 = entrepreneurs.sort((a, b) => a.last.localeCompare(b.last));

console.log(result1);

//Quel âge aurait chaque inventeur aujourd'hui ?
//what age entrepreneurs today
const result2 = entrepreneurs.map(word => `${word.first} ${word.last} is ${2019 - word.year} years old`);
console.log(result2);


//Trie les entrepreneurs par ordre alphabétique du nom de famille.
//sort entrepreneurs by last name
const result3 = entrepreneurs.sort((a, b) => a.last.localeCompare(b.last));
console.log(result3);

//----------------------------------------------------------------------------------------------------------------------
//Name and Firstname
const firstLast = entrepreneurs.map(x => `${x.first} ${x.last}`);
console.log(firstLast);

//Name and Firstname
//const firstLast = entrepreneurs.map(x => x.first + " " + x.last)
//console.log(firstLast);

//Name and Firstname

//noms = (entrepreneurs.map(entrepreneurs => ${entrepreneurs.first} ${entrepreneurs.last}))
// console.log(noms);

//----------------------------------------------------------------------------------------------------------------------
//Age
const age = entrepreneurs.map(x => `${x.first} ${x.last} is ${2019 - x.year} years old`);
console.log(age);

//----------------------------------------------------------------------------------------------------------------------
//Sort by last name
const sortLastName = entrepreneurs.sort((a, b) => a.last.localeCompare(b.last));
console.log(sortLastName);


// Birthday in 70s
function ageIn70s(birthday) {
    return birthday >= 1970 && birthday <= 1979;
};

function isSeventy(el) {
    if (el.year >= 1970 && el.year <= 1980) {
        return true;
    }
};