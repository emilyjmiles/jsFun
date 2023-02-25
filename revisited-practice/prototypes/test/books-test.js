const chai = require("chai");
const expect = chai.expect;

const { books } = require('../datasets/books');
const bookPrompts = require('../codeFiles/books-code');

describe("Book prompts", () => {
  it("should return a list of all book titles that are NOT in the horror or true crime genres ", () => {
    const e = bookPrompts.removeViolence(books);

    expect(e).to.deep.equal(['1984',
      'The Great Gatsby',
      'Lord of the Flies',
      'Harry Potter and the Sorcerer\'s Stone',
      'The Hitchhiker\'s Guide to the Galaxy',
      'Flowers for Algernon',
      'Slaughterhouse-Five',
      'The Handmaid\'s Tale',
      'The Metamorphosis', 'Brave New World',
      'Life of Pi',
      'The Curious Incident of the Dog in the Night-Time',
      'The Bell Jar',
      'Catch-22',
      'Treasure Island']
    );
  });

  it("should return a list of all books that were published in the 90's and 00's", () => {
    const e = bookPrompts.getNewBooks(books);

    expect(e).to.deep.equal([{
      title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997
    },
    { title: 'Life of Pi', year: 2001 },
    {
      title: 'The Curious Incident of the Dog in the Night-Time', year: 2003
    }]);
  });

  it("should return a list of all books that were published after a given year", () => {
    const e = bookPrompts.getBooksByYear(books, 1990);

    expect(e).to.deep.equal([{
      title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997
    },
    { title: 'Life of Pi', year: 2001 },
    {
      title: 'The Curious Incident of the Dog in the Night-Time', year: 2003
    }]);

    const earlyBooks = bookPrompts.getBooksByYear(books, 1970);
    expect(earlyBooks).to.deep.equal([
      { title: "Harry Potter and the Sorcerer's Stone", year: 1997 },
      { title: "The Hitchhiker's Guide to the Galaxy", year: 1979 },
      { title: "The Handmaid's Tale", year: 1985 },
      { title: 'Life of Pi', year: 2001 },
      { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 },
      { title: 'Interview with the Vampire', year: 1976 }
    ]);
  });
});
