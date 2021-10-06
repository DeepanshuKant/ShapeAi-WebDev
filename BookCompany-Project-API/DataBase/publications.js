const mongoose = require('mongoose');

const PublicationsSchema = mongoose.Schema(
    {

    }
);

const PublicationsModel = mongoose.model("publications", PublicationsSchema);

module.exports = PublicationsModel;