import express from 'express';
import { addFood } from '../controllers/foodControllers.js'; // Correct import with .js
import multer from 'multer';

const foodRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
    destination: "uploads",  // Make sure 'uploads' folder exists
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);

export default foodRouter;
