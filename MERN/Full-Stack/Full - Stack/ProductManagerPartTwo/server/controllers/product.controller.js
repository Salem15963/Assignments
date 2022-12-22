const {product} = require('../models/product.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createproduct = (request,response)=>{
    const {title,price,description} = request.body;
    product.create({
        title,
        price,
        description
    })
    .then(product=>response.json(product))
    .catch(err=>response.json(err))
}

module.exports.getAllProducts = (request, response) => {
    product.find({})
        .then(products => response.json(products))
        .catch(err => response.json(err))
}

module.exports.getProduct = (request, response) => {
    product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}


