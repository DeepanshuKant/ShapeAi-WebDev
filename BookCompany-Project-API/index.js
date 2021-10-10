const db = require("./DataBase/index.js");
const BookModel = require("./DataBase/books.js");
const AuthorModel = require('./DataBase/authors.js');
const PublicationsModel = require("./DataBase/publications.js");
// console.log(db.books)
// console.log(db.authors)
// console.log(db.publications)

//Express thing------------------------------------------------------------------------------
const express = require("express")
const app = express();
app.use(express.json()) //Use to Post request from Postman

//Import the mongoose module-----------------------------------------------------------
var mongoose = require('mongoose');
const authorModel = require("./DataBase/authors.js");
const { update } = require("./DataBase/books.js");
//Set up default mongoose connection
var mongoDB = 'mongodb+srv://CheeseMaster_69:seabirdkant1A@cluster0.5crnt.mongodb.net/Book-Company?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("CONNECTION ESTABLISHED"));


// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://CheeseMaster_69:seabirdkant1A@cluster0.5crnt.mongodb.net/Book-Company?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     const bcollection = client.db("Book-Company").collection("books").findOne({ ISBN: "12345Two" });
//     bcollection.then((data) => console.log(data)).catch((err) => console.log(err))
// });
// client.close();


// async function listDatabases(client) {
//     databasesList = await client.db().admin().listDatabases();
//     console.log("THE DATABASES ARE:");
//     databasesList.databases.forEach(db => console.log(db.name));
// }
// async function main() {
//     const uri = "mongodb+srv://CheeseMaster_69:seabirdkant1A@cluster0.5crnt.mongodb.net/Book-Company?retryWrites=true&w=majority";
//     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//     try {
//         await client.connect();
//         const result = await client.db("Book-Company").collection("books").findOne({ ISBN: "12345Two" });
//         console.log(result);
//         await listDatabases(client);
//     }
//     catch (err) {
//         console.log(err);
//     }
//     finally {
//         await client.close();
//     }
// }
// main();


//All get Methods down below-------------------------------------------------------------------------
app.get("/", (req, res) => {

    return res.json({ "Welcome": ` to my backend software for the book company` })
})

app.get("/books", async (req, res) => {
    const getAllBooks = await BookModel.find();
    return res.json(getAllBooks)
})


//By using isbn only
app.get("/book/:isbn", async (req, res) => {
    const { isbn } = req.params;
    // const getSpecificBook = db.books.filter((book) => book.ISBN === isbn)
    //by using mongoDB
    const getSpecificBook = await BookModel.findOne({ ISBN: isbn })

    if (getSpecificBook.length === null) {
        return res.json({ "error": 'No book found with this ISBN of ${isbn}' })
    }
    else {
        return res.json(getSpecificBook)

    }
})

app.get("/book-category/:category", async (req, res) => {

    // // console.log(req.params);
    const { category } = req.params;
    // // console.log(isbn);
    // const getSpecificBooks = db.books.filter((book) => book.category.includes(category));
    const getSpecificBooks = await BookModel.find({ category: category })
    // // console.log(getSpecificBook);
    // // console.log(getSpecificBook.length);
    if (getSpecificBooks.length === null) {
        return res.json({ "error": `No Books found for the category of ${category}` });
    }
    return res.json(getSpecificBooks);

})


app.get("/author", async (req, res) => {
    const getAllAuthor = await AuthorModel.find();
    return res.json(getAllAuthor)

})

app.get("/author/:id", async (req, res) => {
    let { id } = req.params;
    id = Number(id)
    const getSpeceficAuthor = await authorModel.findOne({ id: id })
    if (getSpeceficAuthor.length === null) {
        return res.json({ "error": `No auhor found with this ${id}` })
    }
    else {
        return res.json(getSpeceficAuthor)
    }

})

app.get("/author-isbn/:isbn", async (req, res) => {
    const { isbn } = req.params;

    const getSpeceficAuthor = await authorModel.find({ books: isbn });
    if (getSpeceficAuthor.length === null) {
        return res.json({ "error": `No author found with this ${isbn}` })
    }
    else {
        return res.json(getSpeceficAuthor)
    }

})

app.get("/publications", async (req, res) => {
    const getAllPublications = await PublicationsModel.find();
    return res.json(getAllPublications)
})

app.get("/publications-isbn/:isbn", async (req, res) => {

    const { isbn } = req.params;

    const getAllPublications = await PublicationsModel.find({ books: isbn })
    if (getAllPublications.length === null) {
        return res.json({ "Error": `No publications has published book with this isbn ${isbn}` })
    }
    else {
        return res.json(getAllPublications);
    }
})


//All Post methods down below---------------------------------------------------------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>

app.post("/book", async (req, res) => {

    const addNewbook = await BookModel.create(req.body);
    return res.json({
        books: addNewbook,
        message: "Book was added!!"
    })

    // console.log(req.body);
    // db.books.push(req.body)
    // return res.json(db.books)
})

app.post("/author", async (req, res) => {

    // db.authors.push(req.body)
    // return res.json(db.authors)

    const addNewauthor = await authorModel.create(req.body)
    return res.json({ authors: addNewauthor, message: "New Author added!!" })
})

app.post("/publications", async (req, res) => {

    // db.publications.push(req.body)
    // return res.json(db.publications)

    const addNewPublication = await PublicationsModel.create(req.body)
    return res.json({ publications: addNewPublication, message: "New Publication added!!!!!" })
})


app.put("/book-update/:isbn", async (req, res) => {
    const { isbn } = req.params
    // db.books.forEach((book) => {

    //     if (book.ISBN === isbn) {
    //         console.log({ ...book, ...req.body })
    //         return { ...book, ...req.body }
    //     }
    //     return book;
    // })
    // return res.json(db.books)

    // const updateBook = await BookModel.updateOne(req.body)
    const updateBook = await BookModel.findOneAndUpdate({ ISBN: isbn }, req.body, { new: true });
    return res.json({ BookUpdate: updateBook, message: "Book Updated!!!" })
})

app.put("/author-update/:id", async (req, res) => {

    let { id } = req.params;
    id = Number(id)
    // db.authors.forEach((author) => {
    //     if (author.id === id) {
    //         console.log({ ...author, ...req.body })
    //         return { ...author, ...req.body }
    //     }
    //     return author;
    // })
    // return res.json(db.authors)

    const updateAuthor = await authorModel.findOneAndUpdate({ id: id }, req.body, { new: true })
    return res.json({ AuthorUpdate: updateAuthor, message: "Author Update!!!" })
})
app.put("/publication-update/:id", async (req, res) => {

    let { id } = req.params;
    id = Number(id);
    // db.publications.forEach((publication) => {

    //     if (publication.id === id) {
    //         console.log({ ...publication, ...req.body })
    //         return { ...publication, ...req.body }
    //     }
    //     return publication
    // })
    // return res.json(db.publications)

    const updatePublications = await PublicationsModel.findOneAndUpdate({ id: id }, req.body, { new: true })
    return res.json({ PublicationUpdate: updatePublications, message: "PublicationUpdate!!!!" })

})
app.delete("/book-delete/:isbn", (req, res) => {

    const { isbn } = req.params;
    // let filteredBooks = db.books.filter((book) => book.ISBN !== isbn)

    // console.log(filteredBooks)
    // db.books = filteredBooks
    // return res.json(db.books)
    const deleteBook = BookModel.deleteOne({ ISBN: isbn })
    return res.json({ bookDelete: deleteBook, message: "Book Deleted!!!" })
})

app.delete("/book-author-delete/:isbn/:id", async (req, res) => {
    let { isbn, id } = req.params
    id = Number(id);

    const getSpeceficbook = await BookModel.findOne({ ISBN: isbn })
    if (getSpeceficbook === null) {

        return res.json({ "error": `No book found for the ISBN of ${isbn}` });
    }
    else {
        getSpeceficbook.authors.remove(id);
        const updateBook = await BookModel.findOneAndUpdate({ ISBN: isbn }, getSpeceficbook, { new: true });
        return res.json({ bookUpdate: updateBook, message: "Author was deleted from the book!!!!" })
    }
    // db.books.forEach((book) => {

    //     if (book.ISBN === isbn) {

    //         if (!book.authors.includes(id)) {

    //             return
    //         }
    //         book.authors = book.authors.filter((author) => author !== id)
    //         return book;
    //     }
    //     return book;
    // })
    // return res.json(db.books)

    // const deleetAuthorFromBook = bookDelete.
})

app.delete("/author-book-delete/:id/:isbn", async (req, res) => {
    let { id, isbn } = req.params
    id = Number(id);

    // db.authors.forEach((author) => {

    //     if (author.id === id) {
    //         if (!author.books.includes(isbn)) {
    //             return;
    //         }
    //         author.books = author.books.filter((book) => book !== isbn)
    //         return author;
    //     }
    //     return author;
    // })
    // return res.json(db.authors)

    const getSpecificAuthor = await authorModel.findOne({ id: id });
    if (getSpecificAuthor === null) {
        return res.json({ "error": `No author found for the ID of ${id}` })
    }
    else {
        getSpecificAuthor.books.remove(isbn);
        const updateAuthor = await authorModel.findOneAndUpdate({ id: id }, getSpecificAuthor, { new: true })
        return res.json({ AuthorUpdate: updateAuthor, message: "Book was deleted from author!!!!" })
    }

})
app.listen(3000, () => {
    console.log("My Express is running.......")
});