
// Imports

import 'dotenv/config'
import express from "express"
import cors from "cors"
import { connectDB } from "./config/database.js"
import productRouter from "./routes/productRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"



// App Config

const app = express()
const port = 4000


// Middlewares

app.use(express.json())
app.use(cors())


// Database Connection 
connectDB()

// Api endpoints

app.use("/api/product" , productRouter)
app.use('/image', express.static("uploads"))
app.use("/api/user" , userRouter)
app.use("/api/cart" , cartRouter)
app.use("/api/order" , orderRouter)


app.get('/', (req, res) => {
    res.send("Api is working!");
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})




// mongodb+srv://Obaid:<password>@cluster0.trygggu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0