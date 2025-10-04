import React from 'react';

const TopicsBar = ({ topicCategories, activeTopic, setActiveTopic }) => {
  return (
    <div className="topics-bar">
      <div className="topics-container">
        <span className="trending-icon">📈</span>
        {topicCategories.map((topic, index) => (
          <button
            key={index}
            className={`topic-tag ${topic.active ? 'active' : ''}`}
            onClick={() => setActiveTopic(topic.name)}
          >
            {topic.name} {topic.hasMore ? '+' : ''}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopicsBar;
