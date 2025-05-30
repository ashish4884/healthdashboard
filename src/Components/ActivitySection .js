import React from 'react';
import '../Styles/ActivityCard.css'; // Custom CSS file

const activityData = [
  { day: 'Mon', bars: [30, 50, 20] },
  { day: 'Tue', bars: [60, 70, 40] },
  { day: 'Wed', bars: [20, 40, 30] },
  { day: 'Thu', bars: [80, 60, 50] },
  { day: 'Fri', bars: [40, 60, 70] },
  { day: 'Sat', bars: [60, 40, 20] },
  { day: 'Sun', bars: [50, 30, 40] },
];

const colors = ['blue', 'cyan', 'purple'];

const ActivitySection = () => {
  return (
    <div className="activity-card">
      <div className="activity-header">
        <h2>Activity</h2>
        <span>3 appointments this week</span>
      </div>
      <div className="activity-graph">
        {activityData.map(({ day, bars }, index) => (
          <div className="day" key={index}>
            <div className="bars">
              {bars.map((height, i) => (
                <div
                  key={i}
                  className={`bar ${colors[i % colors.length]}`}
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>
            <div className="day-label">{day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitySection;
