import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://FoodExpress:vaibhav2104@cluster0.0il1q.mongodb.net/food-del').then(()=>console.log("DataBase Connected"));
}