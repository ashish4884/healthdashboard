import React from "react";
import "../Styles/UpcomingCard.css";

const UpcomingSchedule = ({ scheduleData }) => {
  if (!Array.isArray(scheduleData)) {
    return <p>No schedule data available.</p>;
  }

  return (
    <div className="schedule-card">
      <h2 className="card-title">The Upcoming Schedule</h2>

      {scheduleData.map((dayItem, index) => (
        <div key={index}>
          <h5 className="dayHeading">On {dayItem.day}</h5>
          <div className="upcoming-card">
            {dayItem.events.map((event, idx) => (
              <div
                key={idx}
                className="event physiotherapy"
                style={{ width: event.width || "160px" }}
              >
                <div className="innerPart">
                  <p>{event.label}</p>
                  <i>
                    <img
                      src={event.icon}
                      alt={event.label}
                      height={15}
                      width={15}
                    />
                  </i>
                </div>
                <p>{event.time}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
