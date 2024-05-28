// Import the CSS from the @nlux/themes package
import '@nlux/themes/nova.css';

import { createAiChat } from '@nlux/core';
import { createChatAdapter } from '@nlux/nlbridge';

const cardsContainer = document.querySelector(".cards-container");

fetch("/data")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        data.articles.forEach(news => {
            createNewsCard(news);
        });
    })
    .catch(error => {
        console.error(error);
    });

function createNewsCard(news) {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = news.urlToImage;

    const title = document.createElement("h2");
    title.textContent = news.title;

    const description = document.createElement("p");
    description.textContent = news.description;

    const sourceUrl = document.createElement("a");
    sourceUrl.href = news.url;
    sourceUrl.textContent = "Read more";
    sourceUrl.target = "_blank";

    card.append(image, title, description, sourceUrl);
    cardsContainer.appendChild(card);
    return card;
}

// Create and configure the chat adapter
const nlbridgeAdapter = createChatAdapter()
    .withUrl('http://localhost:3300/chat-api');

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
        placeholder: 'Finance Pulse is here to help...'
    })
    .withPersonaOptions({
        bot: {
            name: 'FinancePulse',
            picture: '/images/FinancePulse_Logo.png',
            tagline: 'Cutting Through Financial Jargon: Master the World of Finance with AI!'
        }
    });

document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
        aiChat.mount(chatContainer);
    } else {
        console.error('Chat container element not found');
    }
});


