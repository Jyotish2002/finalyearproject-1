import React from 'react';
import NewsCard from './NewsCard';

const DailyBriefing = ({ dailyBriefingData, briefingStories }) => {
  return (
    <section className="daily-briefing-section">
      <h2 className="section-title">Daily Briefing</h2>
      <div className="briefing-meta">
        {dailyBriefingData.stories} stories • {dailyBriefingData.articles} articles • {dailyBriefingData.readTime} read
      </div>
      
      <div className="briefing-content">
        {briefingStories.map(story => (
          <NewsCard key={story.id} story={story} showImage={true} />
        ))}
        
        <div className="more-briefing">
          <span>+ Constructing an Exascale Supercomputer; Dundee video creator addresses claims; and more.</span>
        </div>
        
        <div className="original-reporting">
          <span className="trophy">🏆</span>
          <span>{dailyBriefingData.originalReporting}% of sources are Original Reporting</span>
        </div>
      </div>
    </section>
  );
};

export default DailyBriefing;
