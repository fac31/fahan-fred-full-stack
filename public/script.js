// Import the CSS from the @nlux/themes package
import '@nlux/themes/nova.css';

import { createAiChat } from '@nlux/core';
import { createChatAdapter } from '@nlux/nlbridge';

// Create and configure the chat adapter
const nlbridgeAdapter = createChatAdapter()
    .withUrl('http://localhost:3000/chat-api');

// Create the chat component and mount it to the chat container
const aiChat = createAiChat()
    .withAdapter(nlbridgeAdapter)
    .withLayoutOptions({
        width: 920,
        height: 400,
        maxWidth: '80%',
        maxHeight: '350px'
    })
    .withPromptBoxOptions({
        autoFocus: false,
        placeholder: 'Financial Pulse is here to help...'
    });

document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
        aiChat.mount(chatContainer);
    } else {
        console.error('Chat container element not found');
    }
});

