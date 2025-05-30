import React from 'react';
import { FaTooth, FaBone, FaHeartbeat } from 'react-icons/fa';

const StatusCards = () => (
  <div className="status-cards">
    <div className="card red">
      <FaHeartbeat size={24} />
      <p>Lungs</p>
      <span>26 Oct 2021</span>
    </div>
    <div className="card green">
      <FaTooth size={24} />
      <p>Teeth</p>
      <span>26 Oct 2021</span>
    </div>
    <div className="card red">
      <FaBone size={24} />
      <p>Bone</p>
      <span>26 Oct 2021</span>
    </div>
  </div>
);

export default StatusCards;
