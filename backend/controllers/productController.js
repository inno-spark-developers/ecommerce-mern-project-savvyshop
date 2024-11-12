import productModel from "../models/productModel.js"
import fs from 'fs'

// Add Product items


const addProduct = async (req, res) => {

    let image_filename = `${req.file.filename}`

    // let { name, description, price, category } = req.body

    const product = new productModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
    })

    try {
        await product.save();
        res.json({success: true, message: "Product Added!"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Product Added Failed!"})
    }
}


// All Products List
const listProduct = async (req, res) => {

    try {
        
        const products = await productModel.find()
        res.json({success: true, data: products})
        
    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Error!"})        
    }
    
}

// Remove Product

const removeProduct = async (req, res) => {
    try {
        
        const product = await productModel.findById(req.body.id)
        fs.unlink(`upload/${product.image}`, () => {})
        
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success: true, message: "Product removed!" , DeletedProduct: product})
        
    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Error!"})        
    }
}

export {addProduct , listProduct, removeProduct}