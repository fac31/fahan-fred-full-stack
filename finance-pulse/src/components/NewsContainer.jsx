import React, { useEffect, useState } from 'react';
import NewsCard from './newsCard';

// NewsContainer component
function NewsContainer() {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        fetch("/data")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setNewsData(data.articles);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className="cards-container">
            {newsData.map(news => <NewsCard key={news.url} news={news} />)}
        </div>
    );
}

export default NewsContainer;