import '../index.css';

export default function NewsCard({ news, number }) {
    return (
        <div className="card hover-underline-animation">
            <img src={news.urlToImage} alt={news.title} />
            <h2>{number}. {news.title}</h2>
            <p>{news.description}</p>
            <a href={news.url} target="_blank" rel="noopener noreferrer">Read more<img src='/images/read-more-arrow.svg' alt='An arrow pointing right'/></a>
        </div>
    );
}