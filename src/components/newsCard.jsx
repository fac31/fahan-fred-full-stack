import '../index.css';

export default function NewsCard({ news, number }) {
    return (
        <div className="card">
            <img src={news.urlToImage} alt={news.title} />
            <h2>{number}. {news.title}</h2>
            <p>{news.description}</p>
            <a href={news.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
    );
}