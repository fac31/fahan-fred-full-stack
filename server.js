// Import necessary modules
import express from 'express';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get('/data', async (req, res) => {
    try {
    const oneWeekAgo = getDateOneWeekAgo();
    const response = await fetch(`https://newsapi.org/v2/everything?q=finance&excludeDomains=yahoo.com&language=en&from=${oneWeekAgo}&pageSize=10&sortBy=relevancy&apiKey=${process.env.NEWS_API_KEY}`);
        const data = await response.json();
        console.log(data);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Functions
function getDateOneWeekAgo() {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);

    const year = weekAgo.getFullYear();
    const month = String(weekAgo.getMonth() + 1).padStart(2, '0');
    const date = String(weekAgo.getDate()).padStart(2, '0');

    return `${year}-${month}-${date}`;
}