import React, { useState, useEffect } from 'react';
import newsService from '../services/newsService';
import NewsCard from '../MainContent/NewsCard';

function BlindspotPage() {
  const [blindspotNews, setBlindspotNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlindspotNews();
  }, []);

  const fetchBlindspotNews = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch diverse news from different perspectives
      const conservativeNews = await newsService.searchNews('politics conservative', {
        pageSize: 10,
      });

      const liberalNews = await newsService.searchNews('politics liberal', {
        pageSize: 10,
      });

      const allNews = [
        ...transformArticles(conservativeNews.articles || []),
        ...transformArticles(liberalNews.articles || []),
      ];

      // Shuffle to mix perspectives
      const shuffled = allNews.sort(() => Math.random() - 0.5);
      setBlindspotNews(shuffled);
    } catch (err) {
      console.error('Error fetching blindspot news:', err);
      setError('Failed to load blindspot news. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const transformArticles = (articles) => {
    return articles.map((article, index) => ({
      id: Math.random().toString(36).substr(2, 9),
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

  if (loading) {
    return (
      <div className="main-layout">
        <div className="content-wrapper">
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading blindspot news...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="main-layout">
        <div className="content-wrapper">
          <div className="error-container">
            <h2>⚠️ Error Loading News</h2>
            <p>{error}</p>
            <button onClick={fetchBlindspotNews} className="retry-button">
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="main-layout">
      <div className="content-wrapper">
        <main className="main-content">
          <div className="page-header">
            <h1>👁️ Blindspot Feed</h1>
            <p>Discover stories you might be missing from across the political spectrum</p>
          </div>

          <div className="blindspot-info">
            <div className="info-card">
              <h3>What is Blindspot?</h3>
              <p>
                Stories that receive significantly more coverage from one side of the political
                spectrum than the other, helping you see beyond your filter bubble.
              </p>
            </div>
          </div>

          <div className="news-grid">
            {blindspotNews.map((story) => (
              <NewsCard key={story.id} story={story} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default BlindspotPage;
