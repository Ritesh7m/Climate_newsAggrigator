import React, { useState, useEffect } from "react";
import "./Newsapp.css";
import micIcon from "../assets/mic.png"; 
import micStopIcon from "../assets/mic-stop.png"; 

const Newsapp = () => {
  const [search, setSearch] = useState("climate");
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [speakingIndex, setSpeakingIndex] = useState(null); 

  const API_KEY = "708d593fef8a40caa933ceaa91cc1513";

  const getData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=climate+${encodeURIComponent(
          search
        )}&language=en&sortBy=publishedAt&apiKey=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const jsonData = await response.json();
      if (jsonData.articles) {
        const filteredArticles = jsonData.articles
          .filter((article) =>
            article.title.toLowerCase().includes(search.toLowerCase())
          )
          .filter((article) => article.urlToImage)
        
        setNewsData(filteredArticles);
      } else {
        setNewsData([]);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };


  const handleSpeech = (text, index) => {
    if (speakingIndex === index) {
      window.speechSynthesis.cancel();
      setSpeakingIndex(null);
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
      setSpeakingIndex(index);
      utterance.onend = () => {
        setSpeakingIndex(null);
      };
    }
  };

  const Card = ({ data, index }) => {
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
          <div className="card-actions">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="read-more"
            >
              Read More
            </a>
      
            <button
              className="mic-button"
              onClick={() => handleSpeech(description, index)}
            >
              <img
                src={speakingIndex === index ? micStopIcon : micIcon}
                alt="mic icon"
                className="mic-icon"
              />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="news-page">
      {/* Search Bar */}
      <form className="searchBar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Climate News"
          onChange={handleInput}
        />
        <button type="submit">Search</button>
      </form>

      <p className="info-note">Note: News data may be up to 24 hours old.</p>

    
      {loading && <p>Loading news...</p>}

      {error && <p className="error">{error}</p>}

  
      {!loading && !error && newsData.length > 0 && (
        <>
          <h2>Latest Climate-Related News</h2>
          <div className="news-cards">
            {newsData.map((article, index) => (
              <Card key={index} data={article} index={index} />
            ))}
          </div>
        </>
      )}

  
      {!loading && !error && newsData.length === 0 && (
        <p>No news articles found for "{search}".</p>
      )}
    </div>
  );
};

export default Newsapp;
