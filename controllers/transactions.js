import { db } from "../db.js";

export const getTransactions = (req, res) => {
    const q = "SELECT * FROM transactions t JOIN users u ON t.uid = u.id WHERE u.username = ?";
    const value = req.params.user;

    db.query(q, value, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
};
