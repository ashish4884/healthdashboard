import React from "react";
import { LayoutDashboard } from "lucide-react";
import { ArrowDownUp } from "lucide-react";
import { CalendarRange } from "lucide-react";
import { BriefcaseMedical } from "lucide-react";
import { ChartNoAxesCombined } from "lucide-react";
import { MessageCircleCode } from "lucide-react";
import { Phone } from "lucide-react";
import { Settings } from "lucide-react";
import "../Styles/Sidebar.css";

const Sidebar = () => (
  <aside className="sidebar">
    <h2 className="logo">
      Health<span>care.</span>
    </h2>
    <nav>
      <div className="general-heading">General</div>
      <ul>
        <li className="">
          {" "}
          <i>
            <LayoutDashboard height={20} width={20} color="#15134b" />{" "}
          </i>{" "}
          <span
            style={{ color: "#15134b ", fontWeight: "700" }}
            className="active"
          >
            Dashboard
          </span>{" "}
        </li>
        <li>
          {" "}
          <i>
            <ArrowDownUp  height={20} width={20} color="#9b9ea6" />
          </i>{" "}
          History
        </li>
        <li>
          {" "}
          <i>
            <CalendarRange  height={20} width={20} color="#9b9ea6" />
          </i>{" "}
          Calendar
        </li>
        <li>
          <i>
            <BriefcaseMedical  height={20} width={20} color="#9b9ea6" />
          </i>{" "}
          Appointments
        </li>
        <li>  
          {" "}
          <i>
            <ChartNoAxesCombined  height={20} width={20} color="#9b9ea6" />
          </i>{" "}
          Statistics
        </li>
      </ul>
      <div className="tools">
        <div className="tool-heading">Tools</div>
        <ul>
          <li>
            <i>
              <MessageCircleCode  height={20} width={20} color="#9b9ea6" />
            </i>{" "}
            Chat
          </li>
          <li>
            {" "}
            <i>
              <Phone  height={20} width={20} color="#9b9ea6" />
            </i>{" "}
            Support
          </li>
        </ul>

      </div>
      
      <div className="setting">
         <i> <Settings  height={20} width={20} /></i> <span>Setting</span>
        </div>
    </nav>
  </aside>
);

export default Sidebar;
