import React from "react";
import "../Styles/Calender.css";
import teeth from "../Assets/teeth4.png";
import body from "../Assets/muscle.png";


const Calender = () => {
  return (
    <div className="calendar-card">
      <div className="calendar-header">
        <span className="month">October 2021</span>
        <div className="nav-arrows">
          <span>&lt;</span>
          <span>&gt;</span>
        </div>
      </div>

      <div className="calendar-weekdays">
        <div>Mon</div>
        <div>Tues</div>
        <div>Wed</div>
        <div>Thurs</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
      </div>

      <div className="calendar-dates">
        <div>25</div>
        <div>26</div>
        <div>27</div>
        <div>28</div>
        <div>29</div>
        <div>30</div>
        <div>31</div>
      </div>

      <div className="calendar-times">
        <div>
          <span >10:00</span>
          <span>11:00</span>
          <span>12:00</span>
        </div>
        <div>
          <span>08:00</span>
          <span className="active">19:00</span>
          <span>10:00</span>
        </div>
        <div>
          <span >12:00</span>
          <span>--</span>
          <span>13:00</span>
        </div>
        <div>
          <span>10:00</span>
          <span  style={{backgroundColor:"#adafd8"}} className="active">11:00</span>
          <span>--</span>
        </div>
        <div>
          <span>--</span>
          <span>10:00</span>
          <span>14:00</span>
        </div>
        <div>
          <span  style={{backgroundColor:"#adafd8", color:"white"}} >10:00</span>
          <span>12:00</span>
          <span>16:00</span>
        </div>
        <div>
          <span  style={{backgroundColor:"#adafd8", color:"white"}} >09:00</span>
          <span>11:00</span>
          <span>12:00</span>
        </div>
      </div>

      <div className="calendar-events">
        <div  className="event dentist">
          <div className="dentist-upperPart">
            {" "}
            <p>Dentist</p>{" "}
            <i>
              <img alt="teeth" height={15} width={15} src={teeth} />
            </i>
          </div>
          <p>09:00 - 11:00</p>
          <p>Dr. Cameron Williamson</p>
        </div>

        <div   className="event physiotherapy">
          <div className="dentist-upperPart">

            <p>Physiotherapy Appointment</p>
            <i>
              <img alt="body" height={15} width={15} src={body} />
            </i>
          </div>

          <p>11:00 - 12:00</p>
          <p>Dr. Kevin Djones</p>
        </div>
      </div>
    </div>
  );
};

export default Calender;
