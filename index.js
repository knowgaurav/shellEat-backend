import express from "express";
import authRoutes from "./routes/auth.js";
import transactionsRoutes from "./routes/transactions.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionsRoutes);

app.listen(8800, () => {
    console.log("Connected!");
});
