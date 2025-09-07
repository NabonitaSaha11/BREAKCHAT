// ekhane boi relevant necessary info pathai

let BOOKS = [
  {
    _id: "gutenberg-poems-1",
    title: "Poems of William Blake",
    author: "William Blake",
    genre: "Poetry",
    year: 1905,
    url: "https://www.gutenberg.org/cache/epub/215/pg215-images.html", 
  },
  {
    _id: "sherlock-1",
    title: "The Adventures of Sherlock Holmes",
    author: "Arthur Conan Doyle",
    genre: "Fiction",
    year: 1892,
    url: "https://www.gutenberg.org/files/1661/1661-h/1661-h.htm",
  },
  {
    _id: "frankenstein-1",
    title: "Frankenstein",
    author: "Mary Shelley",
    genre: "Fiction",
    year: 1818,
    url: "https://www.gutenberg.org/files/84/84-h/84-h.htm",
  },

  
  {
    _id: "tale-1",
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    genre: "Fiction, Historical",
    year: 1859,
    url: "https://www.gutenberg.org/files/98/98-h/98-h.htm",
  },
  {
    _id: "pride-1",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Fiction, Romance",
    year: 1813,
    url: "https://www.gutenberg.org/files/1342/1342-h/1342-h.htm",
  },


  {
    _id: "dracula-1",
    title: "Dracula",
    author: "Bram Stoker",
    genre: "Fiction, Horror",
    year: 1897,
    url: "https://www.gutenberg.org/files/345/345-h/345-h.htm",
  },
  {
    _id: "mobydick-1",
    title: "Moby-Dick; or, The Whale",
    author: "Herman Melville",
    genre: "Fiction, Adventure",
    year: 1851,
    url: "https://www.gutenberg.org/files/2701/2701-h/2701-h.htm",
  },
  {
    _id: "tom-1",
    title: "The Adventures of Tom Sawyer",
    author: "Mark Twain",
    genre: "Fiction, Adventure",
    year: 1876,
    url: "https://www.gutenberg.org/files/74/74-h/74-h.htm",
  },
  {
    _id: "huck-1",
    title: "Adventures of Huckleberry Finn",
    author: "Mark Twain",
    genre: "Fiction, Adventure",
    year: 1884,
    url: "https://www.gutenberg.org/files/76/76-h/76-h.htm",
  },
  {
    _id: "dorian-1",
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    genre: "Fiction, Gothic",
    year: 1890,
    url: "https://www.gutenberg.org/files/174/174-h/174-h.htm",
  },
  {
    _id: "greatexpect-1",
    title: "Great Expectations",
    author: "Charles Dickens",
    genre: "Fiction",
    year: 1861,
    url: "https://www.gutenberg.org/files/1400/1400-h/1400-h.htm",
  },
  {
    _id: "douglass-1",
    title: "Narrative of the Life of Frederick Douglass",
    author: "Frederick Douglass",
    genre: "Autobiography",
    year: 1845,
    url: "https://www.gutenberg.org/files/23/23-h/23-h.htm",
  },
  {
    _id: "warpeace-1",
    title: "War and Peace",
    author: "Leo Tolstoy",
    genre: "Fiction, Historical",
    year: 1869,
    url: "https://www.gutenberg.org/files/2600/2600-h/2600-h.htm",
  },
  {
    _id: "waroftheworlds-1",
    title: "The War of the Worlds",
    author: "H. G. Wells",
    genre: "Science Fiction",
    year: 1898,
    url: "https://www.gutenberg.org/files/36/36-h/36-h.htm",
  },
  {
    _id: "timemachine-1",
    title: "The Time Machine",
    author: "H. G. Wells",
    genre: "Science Fiction",
    year: 1895,
    url: "https://www.gutenberg.org/files/35/35-h/35-h.htm",
  },
  {
    _id: "carol-1",
    title: "A Christmas Carol",
    author: "Charles Dickens",
    genre: "Fiction",
    year: 1843,
    url: "https://www.gutenberg.org/files/46/46-h/46-h.htm",
  },
  {
    _id: "jekyll-1",
    title: "The Strange Case of Dr. Jekyll and Mr. Hyde",
    author: "Robert Louis Stevenson",
    genre: "Fiction, Gothic",
    year: 1886,
    url: "https://www.gutenberg.org/files/43/43-h/43-h.htm",
  },
  {
    _id: "crimepunish-1",
    title: "Crime and Punishment",
    author: "Fyodor Dostoyevsky",
    genre: "Fiction, Psychological",
    year: 1866,
    url: "https://www.gutenberg.org/files/2554/2554-h/2554-h.htm",
  },
  {
    _id: "scarlet-1",
    title: "The Scarlet Letter",
    author: "Nathaniel Hawthorne",
    genre: "Fiction",
    year: 1850,
    url: "https://www.gutenberg.org/files/33/33-h/33-h.htm",
  },
  {
    _id: "alice-1",
    title: "Alice’s Adventures in Wonderland",
    author: "Lewis Carroll",
    genre: "Fantasy",
    year: 1865,
    url: "https://www.gutenberg.org/files/11/11-h/11-h.htm",
  },
  {
    _id: "wizard-1",
    title: "The Wonderful Wizard of Oz",
    author: "L. Frank Baum",
    genre: "Fantasy",
    year: 1900,
    url: "https://www.gutenberg.org/files/55/55-h/55-h.htm",
  },
  {
    _id: "treasure-1",
    title: "Treasure Island",
    author: "Robert Louis Stevenson",
    genre: "Fiction, Adventure",
    year: 1883,
    url: "https://www.gutenberg.org/files/120/120-h/120-h.htm",
  },
  {
    _id: "montecristo-1",
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    genre: "Fiction, Adventure",
    year: 1844,
    url: "https://www.gutenberg.org/files/1184/1184-h/1184-h.htm",
  },
  {
    _id: "metamorphosis-1",
    title: "The Metamorphosis",
    author: "Franz Kafka",
    genre: "Fiction",
    year: 1915,
    url: "https://www.gutenberg.org/files/5200/5200-h/5200-h.htm",
  },
];

const getBooks = async (req, res) => {
  res.status(200).json(BOOKS);
};

const addBook = async (req, res) => {
  const { title, author, genre, year, url } = req.body || {};
  if (!title || !url) {
    return res.status(400).json({ message: "Title and URL are required" });
  }
  const newBook = {
    _id: `book_${Date.now()}`,
    title: String(title),
    author: author ? String(author) : "",
    genre: genre ? String(genre) : "",
    year: year ? Number(year) : undefined,
    url: String(url),
  };
  BOOKS = [newBook, ...BOOKS];
  res.status(201).json(newBook);
};

module.exports = { getBooks, addBook };


//pore add book ar kaaje lagai nai 