import mongoose from "mongoose";


export const connectDB = async () => {
    // await mongoose.connect('mongodb+srv://Obaid:obaid123@cluster0.trygggu.mongodb.net/SavvyShop?retryWrites=true&w=majority&appName=Cluster0')
    //     .then(() => console.log("Database Connected!"));
    await mongoose.connect('mongodb://localhost:27017/SavvyShop')
        .then(() => console.log("Database Connected!"));

}