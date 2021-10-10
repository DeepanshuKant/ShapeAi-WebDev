const mongoose = require('mongoose');

const PublicationsSchema = mongoose.Schema(
    {
        id: Number,
        name: String,
        books: [String]
    }
);

const PublicationsModel = mongoose.model("publications", PublicationsSchema);

module.exports = PublicationsModel;