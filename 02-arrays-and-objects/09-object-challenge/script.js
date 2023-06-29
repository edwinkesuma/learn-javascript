const library = [
  {
    title: "Book One",
    author: "Author One",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Book Two",
    author: "Author Two",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Book Three",
    author: "Author Three",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title: firstbook } = library[0];

const libraryJson = JSON.stringify(library);

console.log(library);
