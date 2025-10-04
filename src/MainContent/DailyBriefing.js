import React from 'react';

const DailyBriefing = ({ dailyBriefingData, briefingStories }) => {
  return (
    <section className="daily-briefing-section">
      <div className="briefing-card">
        <div className="briefing-header">
          <div className="briefing-title-section">
            <h2 className="briefing-title">Daily Briefing</h2>
            <div className="briefing-badge">📰 Today</div>
          </div>
          <div className="briefing-stats">
            <span className="stat-item">{dailyBriefingData.stories} stories</span>
            <span className="stat-item">{dailyBriefingData.articles} articles</span>
            <span className="stat-item">{dailyBriefingData.readTime} read</span>
          </div>
        </div>

        <div className="briefing-stories">
          {briefingStories.map(story => (
            <div key={story.id} className="briefing-story-item">
              <div className="story-thumbnail">
                <div className="thumbnail-placeholder">📰</div>
              </div>
              <div className="story-content">
                <div className="story-meta">
                  <span className="story-category">{story.category}</span>
                  <div className="story-tags">
                    <span className="tag original">Original Reporting</span>
                    <span className="tag trending">Trending</span>
                  </div>
                </div>
                <h3 className="story-headline">{story.title}</h3>
                <p className="story-description">{story.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="briefing-footer">
          <div className="original-reporting">
            <span className="trophy">🏆</span>
            <span><strong>{dailyBriefingData.originalReporting}%</strong> of sources are Original Reporting</span>
          </div>
          <button className="view-all-briefing">View All Stories →</button>
        </div>
      </div>
    </section>
  );
};

export default DailyBriefing;
