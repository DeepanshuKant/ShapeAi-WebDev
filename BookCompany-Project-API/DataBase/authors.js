const mongoose = require('mongoose');


const AuthorSchema = mongoose.schema(
    {

    }
);

const authorModel = mongoose.model("author", AuthorSchema);

module.exports = AuthorSchema;