import React, { useState, useEffect } from 'react';
import newsService from '../services/newsService';
import DailyBriefing from '../MainContent/DailyBriefing';
import FeaturedNewsGallery from '../MainContent/FeaturedNewsGallery';
import TopNewsStories from '../MainContent/TopNewsStories';
import BlindspotWidget from '../Sidebar/BlindspotWidget';
import NewsBiasWidget from '../Sidebar/NewsBiasWidget';
import LocalNewsWidget from '../Sidebar/LocalNewsWidget';

function HomePage() {
  const [topNews, setTopNews] = useState([]);
  const [worldNews, setWorldNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchHomePageNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchHomePageNews = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch top headlines
      const topHeadlines = await newsService.getTopHeadlines({
        country: 'us',
        pageSize: 10,
      });

      // Fetch world news
      const worldHeadlines = await newsService.searchNews('world', {
        pageSize: 6,
        sortBy: 'publishedAt',
      });

      // Transform API data to match our component format
      setTopNews(transformArticles(topHeadlines.articles || []));
      setWorldNews(transformArticles(worldHeadlines.articles || []));
    } catch (err) {
      console.error('Error fetching news:', err);
      setError('Failed to load news. Please check your API key or try again later.');
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

  if (loading) {
    return (
      <div className="main-layout">
        <div className="content-wrapper">
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading latest news...</p>
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
            <button onClick={fetchHomePageNews} className="retry-button">
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const dailyBriefingData = {
    date: new Date().toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    summary: 'Stay informed with today\'s top stories from across the political spectrum.',
  };

  const briefingStories = topNews.slice(0, 3);
  const blindspotStories = topNews.slice(0, 3);

  return (
    <div className="main-layout">
      <div className="content-wrapper">
        <main className="main-content">
          <DailyBriefing 
            dailyBriefingData={dailyBriefingData}
            briefingStories={briefingStories}
          />
          <FeaturedNewsGallery 
            stories={[...topNews.slice(0, 3), ...worldNews.slice(0, 3)]}
          />
          <TopNewsStories 
            topNewsStories={topNews}
            worldNewsStories={worldNews}
          />
        </main>

        <aside className="sidebar">
          <BlindspotWidget blindspotStories={blindspotStories} />
          <NewsBiasWidget />
          <LocalNewsWidget />
        </aside>
      </div>
    </div>
  );
}

export default HomePage;
