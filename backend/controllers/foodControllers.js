import FoodModel from "../models/foodModel.js"; // Correct import with .js
import fs from 'fs';

// Add food item
const addFood = async (req, resp) => {
    let image_filename = req.file ? req.file.filename : null;

    if (!image_filename) {
        return resp.status(400).json({ success: false, message: "Image file is required" });
    }

    const food = new FoodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    });

    try {
        await food.save();
        resp.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.log(error);
        resp.status(500).json({ success: false, message: "Error adding food item" });
    }
}

export { addFood };
