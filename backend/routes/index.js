import express from "express"
import authRoutes from "./authRoutes.js"
import userRoutes from "./userRoutes.js"
import accountRoutes from "./accountRoutes.js"
import transactionRoutes from "./transactionRoutes.js"

const routes = express.Router()


routes.use("/auth", authRoutes)

export default routes