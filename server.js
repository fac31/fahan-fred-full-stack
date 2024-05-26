// Import necessary modules
import express from 'express';
import { defaultMiddleware } from '@nlbridge/express';
import { createAiChat } from '@nlux/core';
import { createChatAdapter } from '@nlux/nlbridge';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

// Use CORS middleware to allow cross-origin requests
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Chat API endpoint using default middleware
app.post('/chat-api',
    defaultMiddleware('openai', {
        apiKey: process.env.OPENAI_API_KEY,
        chatModel: 'gpt-3.5-turbo',
    })
);

// Create and configure the chat adapter
const nlbridgeAdapter = createChatAdapter()
    .withUrl('http://localhost:8080/chat-api');




// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
