import React from 'react';
import NewsCard from './NewsCard';

const TopNewsStories = ({ topNewsStories, worldNewsStories }) => {
  return (
    <>
      <section className="top-news-section">
        <h2 className="section-title">Top News Stories</h2>
        <div className="news-grid">
          {topNewsStories.map(story => (
            <NewsCard key={story.id} story={story} />
          ))}
        </div>
      </section>

      <section className="world-news-section">
        <div className="world-news-grid">
          {worldNewsStories.map(story => (
            <NewsCard key={story.id} story={story} />
          ))}
        </div>
      </section>

      <section className="israel-gaza-section">
        <div className="section-header">
          <h2 className="section-title">Israel-Gaza News</h2>
          <div className="section-controls">
            <button className="follow-button">Follow</button>
            <button className="read-more-button">Read More</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopNewsStories;
