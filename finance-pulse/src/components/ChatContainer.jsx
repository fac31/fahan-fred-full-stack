import React, { useEffect } from 'react';
import '@nlux/themes/nova.css';
import { createAiChat } from '@nlux/core';
import { createChatAdapter } from '@nlux/nlbridge';

// ChatContainer component
function ChatContainer() {
    useEffect(() => {
        const nlbridgeAdapter = createChatAdapter()
            .withUrl('http://localhost:3300/chat-api');

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
                placeholder: 'Finance Pulse is here to help...'
            })
            .withPersonaOptions({
                bot: {
                    name: 'FinancePulse',
                    picture: '/images/FinancePulse_Logo.png',
                    tagline: 'Cutting Through Financial Jargon: Master the World of Finance with AI!'
                }
            });

        const chatContainer = document.getElementById('chat-container');
        if (chatContainer) {
            aiChat.mount(chatContainer);
        } else {
            console.error('Chat container element not found');
        }
    }, []);

    return <div id="chat-container"></div>;
}

export default ChatContainer;