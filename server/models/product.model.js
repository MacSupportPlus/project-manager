const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, "Title is required"],
        minlength : [3, "Product must be at least 3 characters"]
    },
    price : {
        type : Number,
        required : [true, "price is required"],
        min : [1, "Not worth any value"]
    },
    description: {
        type : String,
        required : [true, "Description is required"]
    } 
}, {timestamps: true})

const Product = mongoose.model("Product",ProductSchema);

module.exports = Product; 