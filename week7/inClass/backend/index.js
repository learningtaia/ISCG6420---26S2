import express from "express";
import cors from "cors";
import { add } from "./math";

const app = express();
const PORT = 3000;

// middleware 
app.use(cors());
app.use(express.json());

// helper function to validate numbers
function validateNumbers(a, b) {
    if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
        return false;
    }
    return true;
}

// GET method 
// Request using query parameters to pass numbers
// http://localhost:3000/add?a=10&b=4
app.get("/add", (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (!validateNumbers(a, b)) {
        return res.status(400).json({ error: "Both values must be numbers." });
    }
    const result = add(a, b);
    res.json({ result });
});

// POST method
// Request using body to pass numbers (via Postman)
// http://localhost:3000/add
app.post("/add", (req, res) => {
    const { a, b } = req.body;

    if (!validateNumbers(a, b)) {
        return res.status(400).json({ error: "Both values must be numbers." });
    }

    res.json({ result: add(a, b) });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});