import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
    name: {type: string},
    description: {type:string},
    price: {type: number},
    currency: {type: string},
});

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product