import express from "express";
import authRoutes from "./routes/auth.js";
import transactionsRoutes from "./routes/transactions.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionsRoutes);

const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
    console.log("Connected!");
});
