import React from 'react'
import Sidebar from "./Sidebar"
import Header from "./Header"
import AnatomyView from "./AnatomyView"
import Calendar from "./Calendar";
import UpcomingSchedule from "./UpcomingSchedule "
import ActivitySection from "./ActivitySection ";
import "../Styles/Dashboard.css";
import { UpcomingScheduleData } from '../Data/UpcomingScheduleData';

export default function Dashboard() {


console.log(UpcomingScheduleData);


  return (
    <div className="dashboard-container">
    <Sidebar />
    <main className="main-content">
      <Header />
      <section className="dashboard-body">
        <div className="section-left">
          <AnatomyView />
          <ActivitySection />
        </div>
        <div className="section-right">
          <Calendar />
          <UpcomingSchedule scheduleData={UpcomingScheduleData} />
          </div>
      </section>
    </main>
  </div>
  )
}
