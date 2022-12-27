const mongoose = require ('mongoose');

const playerSchema = new mongoose.Schema({
    playerName: {
        type: String,
        required: [
            true,
            "Player name is required"
        ],
        minLength:[2, 'Players name must be more than two chars'],
        maxLength:[12, 'You cant be serious!']
    },    
    preferredPosition: {
        type: String,
    },
    status:{
        type: String,
    }
}, { timestamps: true });

module.exports.player = mongoose.model("player",playerSchema);