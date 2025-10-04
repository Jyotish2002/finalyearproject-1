import React, { useState, useEffect } from 'react';
import newsService from '../services/newsService';
import NewsCard from '../MainContent/NewsCard';

function LocalPage() {
  const [localNews, setLocalNews] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchLocalNews = async (city = 'United States') => {
    try {
      setLoading(true);
      setError(null);

      const response = await newsService.searchNews(city, {
        pageSize: 20,
        sortBy: 'publishedAt',
      });

      setLocalNews(transformArticles(response.articles || []));
    } catch (err) {
      console.error('Error fetching local news:', err);
      setError('Failed to load local news. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocalNews();
  }, []);

  const handleCitySubmit = (e) => {
    e.preventDefault();
    if (selectedCity.trim()) {
      fetchLocalNews(selectedCity);
    }
  };

  const transformArticles = (articles) => {
    return articles.map((article, index) => ({
      id: index + 1,
      headline: article.title,
      description: article.description || '',
      image: article.urlToImage || '/images/placeholder.jpg',
      timeAgo: getTimeAgo(article.publishedAt),
      url: article.url,
      source: article.source.name,
      coverage: {
        left: Math.floor(Math.random() * 50) + 30,
        center: Math.floor(Math.random() * 30) + 20,
        right: Math.floor(Math.random() * 50) + 30,
      },
      sources: Math.floor(Math.random() * 100) + 50,
    }));
  };

  const getTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

  return (
    <div className="main-layout">
      <div className="content-wrapper">
        <main className="main-content">
          <div className="page-header">
            <h1>📍 Local News</h1>
            <p>Get news from your city or region</p>
          </div>

          <div className="local-search-section">
            <form onSubmit={handleCitySubmit} className="location-form-large">
              <input
                type="text"
                className="city-input-large"
                placeholder="Enter city name (e.g., New York, London, Tokyo)"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              />
              <button type="submit" className="submit-button-large">
                Search Local News
              </button>
            </form>
          </div>

          {loading && (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading local news...</p>
            </div>
          )}

          {error && (
            <div className="error-container">
              <p>{error}</p>
              <button onClick={() => fetchLocalNews(selectedCity)} className="retry-button">
                Try Again
              </button>
            </div>
          )}

          {!loading && !error && (
            <div className="news-grid">
              {localNews.map((story) => (
                <NewsCard key={story.id} story={story} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default LocalPage;
