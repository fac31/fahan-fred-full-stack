const cardsContainer = document.querySelector(".cards-container");

fetch("/data")
.then (response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }
    return response.json();
    })
    .then (data => {
        data.articles.forEach(news => {
            createNewsCard(news);
        });
    })
    .catch (error => {
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