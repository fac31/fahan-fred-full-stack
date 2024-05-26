import { createAiChat } from '@nlux/core';
import { createChatAdapter } from '@nlux/nlbridge';

const nlbridgeAdapter = createChatAdapter()
    .withUrl('http://localhost:3000/chat-api');

// Create the chat component and mount it to the chat container
const aiChat = createAiChat().withAdapter(nlbridgeAdapter);

document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('chat-container');
    aiChat.mount(chatContainer);
});

