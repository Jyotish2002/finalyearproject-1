import React from 'react';

const NewsBiasWidget = () => {
  return (
    <div className="news-bias-widget">
      <h3 className="widget-title">My News Bias</h3>
      <div className="user-profile">
        <div className="avatar">👤</div>
        <div className="user-details">
          <h4>Linda B. (Sample user)</h4>
          <p>0 Stories • 0 Articles</p>
        </div>
      </div>
      <div className="bias-visualization">
        <div className="bias-meters">
          <div className="bias-meter">?</div>
          <div className="bias-meter">?</div>
          <div className="bias-meter active">?</div>
        </div>
      </div>
    </div>
  );
};

export default NewsBiasWidget;
