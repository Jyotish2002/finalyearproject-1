import React, { useState, useEffect } from 'react';
import newsService from '../services/newsService';
import NewsCard from '../MainContent/NewsCard';

function ForYouPage() {
  const [personalizedNews, setPersonalizedNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('technology');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = [
    { id: 'technology', name: 'Technology', icon: '💻' },
    { id: 'business', name: 'Business', icon: '💼' },
    { id: 'entertainment', name: 'Entertainment', icon: '🎬' },
    { id: 'sports', name: 'Sports', icon: '⚽' },
    { id: 'science', name: 'Science', icon: '🔬' },
    { id: 'health', name: 'Health', icon: '🏥' },
  ];

  useEffect(() => {
    fetchPersonalizedNews(selectedCategory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  const fetchPersonalizedNews = async (category) => {
    try {
      setLoading(true);
      setError(null);

      const response = await newsService.getNewsByCategory(category, {
        pageSize: 20,
      });

      setPersonalizedNews(transformArticles(response.articles || []));
    } catch (err) {
      console.error('Error fetching personalized news:', err);
      setError('Failed to load personalized news. Please try again.');
    } finally {
      setLoading(false);
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
            <h1>✨ For You</h1>
            <p>Personalized news based on your interests</p>
          </div>

          <div className="category-filters">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span className="category-icon">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>

          {loading && (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading {selectedCategory} news...</p>
            </div>
          )}

          {error && (
            <div className="error-container">
              <p>{error}</p>
              <button onClick={() => fetchPersonalizedNews(selectedCategory)} className="retry-button">
                Try Again
              </button>
            </div>
          )}

          {!loading && !error && (
            <div className="news-grid">
              {personalizedNews.map((story) => (
                <NewsCard key={story.id} story={story} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default ForYouPage;
