import mongoose from'mongoose';
const Schema = mongoose.Schema;

// Define a schema for the product
const productSchema = new Schema({
    id: String,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: {
        rate: Number,
        count: Number
    }
});

// Create a model based on the schema
const Product = mongoose.model('Product', productSchema);

 export default Product// Export the Product model
