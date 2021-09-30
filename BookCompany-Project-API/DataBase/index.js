let books = [
    {
        "ISBN": "12345ONE",
        "title": "Getting started with MERN",
        "authors": [1, 2],
        "language": "en",
        "pubDate": "21-07-07",
        "numOfPage": 225,
        "category": ["fiction", "Programming", "tech"],
        "publication": 1
    },
    {
        "ISBN": "12345Two",
        "title": "Getting started with Python",
        "authors": [1, 2],
        "language": "en",
        "pubDate": "21-08-07",
        "numOfPage": 550,
        "category": ["fiction", "Programming", "tech", "webDev"],
        "publication": 1
    }
];

let authors = [
    {
        id: 1,
        name: "Deepanshu",
        books: ["12345ONE", "12345Two"]
    },
    {
        id: 2,
        name: "ram",
        books: ["12345ONE"]
    }
];

let publications = [

    {
        id: 1,
        name: "ShapeAi Publications",
        books: ["12345ONE", "12345Two"]
    },
    {
        id: 2,
        name: "Kant Publications",
        books: []
    }
];

module.exports = { books, authors, publications }