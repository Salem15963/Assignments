const {player} = require('../models/player.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createPlayer = (request,response)=>{
    const {playerName, preferredPosition, status} = request.body;
    player.create({
        playerName,
        preferredPosition,
        status,
    })
    .then(player=>response.json(player))
    .catch(err=>response.status(400).json(err))
}

module.exports.getAllPlayers = (request, response) => {
    player.find({})
        .then(players => response.json(players))
        .catch(err => response.json(err))
}

module.exports.getPlayer = (request, response) => {
    player.findOne({_id:request.params.id})
        .then(player => response.json(player))
        .catch(err => response.json(err))
}


module.exports.updatePlayer = (request, response) => {
    player.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedPlayer => response.json(updatedPlayer))
        .catch(err => response.status(400).json(err))
}

module.exports.deletePlayer = (request, response) => {
    player.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

