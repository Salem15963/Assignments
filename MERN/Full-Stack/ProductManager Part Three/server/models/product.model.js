const mongoose = require ('mongoose');

const productSchema = new mongoose.Schema({
    title: {type:String},
    price: {type:String},
    description: {type:String}
}, {timestamps: true});

module.exports.product = mongoose.model("product",productSchema);