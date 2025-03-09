import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://sammartamang678:DjMtaJE7bd5LhP6e@cluster0.gx5wn.mongodb.net/food-del', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("DB Connected");
    } catch (error) {
        console.error("Error connecting to the database", error);
    }
};
