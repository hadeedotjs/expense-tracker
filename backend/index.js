import cors from "cors"
import express, { urlencoded } from "express"
import dotenv from "dotenv"
import routes from "./routes/index.js"

dotenv.config()

const app = express()

const PORT = process.env.PORT

app.use(cors("*"))

app.use(express.json({limit: "10mb"}))

app.use(urlencoded({extended: true}))

app.use("/api-v1", routes)

app.use("*", (req,res)=>{
    res.status(404).json({
        status: "404 not found",
        message: "routes not found"
    })
})

app.listen(PORT, ()=>{
    console.log("server running on PORT" + PORT)
})