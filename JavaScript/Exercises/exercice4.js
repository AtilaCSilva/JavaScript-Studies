/*
   ¢ Buscando e contando dados em Arrays ¢
   Baseado no Array de Livros por Categoria abaixo, faça os
   seguintes desafios
            
   - Contar o número  de categorias e o número de livros em cada categoria
   - Contar o número de  autores 
   - Mostrar livros do autor Augusto Cury
   - Transformar a funcão acima em uma função  que irá receber o nome
   do autor e devolver os livros desse autor.
 */
   const booksBycategory = [
    {
        category: "Riqueza",
        books: [
            {
              title: "Os segredos da mente milionária",
              author: "T. Harv Eker",
            },
            {
              title: "O homem mais rico da babilônia",
              author: "George S. Clason",
            },
            {
              title: "Pai rico, Pai pobre",
              author: "Robert T. Kiyosaki e Sharon L. Lechtcer",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury"
            },
            {
              title: "Ansiedade - Como enfrentar o mal do século",
              author: "Augusto Cury",
            },
            {
              title: "Os 7 hábitos das pessoas altamente eficazes",
            },
        ],
    },
];


const TotalCategory = booksBycategory.length
console.log(TotalCategory)

for(let category of booksBycategory) {
  console.log('Total de livros dessa categoria:', category.category)
  console.log(category.books.length)
}

function countAuthors() {
   let authors = [];

   for(let category of booksBycategory) {
     for(let book of category.books){
      if(authors.indexOf(book.author) == -1) {
        authors.push(book.author)
      }
     }
   }

   console.log('Total de autores:', authors.length)
   
}

countAuthors()


function booksOfAuthor(author) {
  let books = [];

  for(let category of booksBycategory) {
    for(let book of category.books){
    if(book.author === author) {
      books.push(book.title)
    }
     }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`)

  }

  booksOfAuthor('George S. Clason')
  

