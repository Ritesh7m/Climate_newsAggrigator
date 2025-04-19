// Inline Card component definition
const Card = ({ data }) => {
    if (!data) return null;

    const { urlToImage, title, description, url, publishedAt, source } = data;

    return (
        <div className="card">
            {urlToImage ? (
                <img src={urlToImage} alt={title} className="card-image" />
            ) : (
                <div className="card-image-placeholder">No Image Available</div>
            )}
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <p className="card-meta">
                    <small>
                        {source.name} - {new Date(publishedAt).toLocaleString()}
                    </small>
                </p>
                <a href={url} target="_blank" rel="noopener noreferrer" className="read-more">
                    Read More
                </a>
            </div>
        </div>
    );
};
