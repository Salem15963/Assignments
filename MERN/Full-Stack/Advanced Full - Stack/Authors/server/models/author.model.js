const mongoose = require ('mongoose');

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Author name is required"
        ],
        minLength:[2, 'Authors name must be more than two chars'],
        maxLength:[12, 'You cant be serious!']
    },    
}, { timestamps: true });

module.exports.author = mongoose.model("author",authorSchema);