const mongoose = require ('mongoose');

const authorSchema = new mongoose.Schema({
    name: {type:String},
}, {timestamps: true});

module.exports.author = mongoose.model("author",authorSchema);