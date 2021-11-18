//2.3.2. Bibliothécaire
//C'est ton premier jour de stage au CDI du collège du coin. Tu dois aider la bibliothécaire à faire des statistiques dans la base de données de livres du collège et elle te donne ce jeu de données pour que tu maitrises le back-office du programme.
//Réalise un script script_5.js qui affichera dans la console les questions suivantes et leurs réponses :


const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

//Est-ce que tous les livres ont été au moins empruntés une fois ?
//isEveryBookRented?
console.log('isEveryBookRented');
const rentedBooks = books.filter(book => book.rented > 0);
const isEveryBookRented = rentedBooks.length === books.length;
console.log(isEveryBookRented);

console.log(isEveryBookRented);
function rent(elem) {
    return elem.rented >= 1;
  }
  console.log("Est-ce que tous les livres ont été au moins empruntés une fois ? : " + (books.every(rent)));




  console.log('=========================================================');
// what the most popular book?
console.log('what the most popular book');
const mostPopularBook = books.reduce((acc, book) => {
    if (book.rented > acc.rented) {
        return book;
    }
    return acc;
}
);
console.log(mostPopularBook);

console.log('=========================================================');
//Quel est le livre le moins emprunté ?
// What the least popular book?
console.log('What the least popular book?');
const leastPopularBook = books.reduce((acc, book) => {
    if (book.rented < acc.rented) {
        return book;
    }
    return acc;
}   );  console.log(leastPopularBook);

console.log('=========================================================');

//Trouve le livre avec l'ID: 873495 ;
// Find the book with the ID: 873495;
console.log('Find the book with the ID: 873495');
const book = books.find(book => book.id === 873495);
console.log(book);

console.log('=========================================================');

//Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)
// Sort the books by alphabetical order (without the one with the ID 133712 because it is deleted)
console.log('Sort the books by alphabetical order (without the one with the ID 133712 because it is deleted)');
const id = books.findIndex(book => book.id === 133712);
console.log(id);
const sortedBooks = books.filter(book => book.id !== 133712).sort((a, b) => a.title.localeCompare(b.title));
console.log(sortedBooks);

//ids =[];
//books.forEach(book => {
 //   ids.push(book.id);
//});
//console.log(ids);
//console.log("livre à supprimer : ",books.splice([ids.indexOf(133712)], 1))
//console.log("array réduit: ",books)

console.log('=================================================================');

