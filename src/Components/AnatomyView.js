import React from "react";
import humanbody3 from "../Assets/humanBody11.PNG";
import lung from "../Assets/lungs.png";
import teeth from "../Assets/clean.png";
import bone from "../Assets/bone.png";
import StaticSlider from "../StaticSlider";
import { MoveRight } from "lucide-react";
import "../Styles/AnatomyView.css";

const AnatomyView = () => (
  <div className="anatomy-view">
    <img  src={humanbody3} alt="Human Anatomy" className="anatomy-img" />

    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="dashboard-heading">
        <h3 style={{ color: "#383771", marginLeft: "30px" }}>Dashboard</h3>
      </div>

      <div className="week-heading">
        <select style={{ color: "#3734a7" }} class="custom-select">
          <option style={{ color: "#383771" }} value="option1">
            This Week
          </option>
        </select>
      </div>

      <div className="organStatus">
        <div className="organ-card">
          <div className="organ-header">
            <i className="organ-icon">
              <img alt="Lungs" height={20} width={20} src={lung} />
            </i>
            <span className="organ-name">Lungs</span>
          </div>

          <div className="organ-date">Date : 26 oct, 2021</div>

          <StaticSlider
            fillColor="#ac484a"
            fillPercentage="70"
            backgroundColor="#eee"
          />
        </div>
      </div>

      {/* // 2nd organ card */}

      <div className="organStatus">
        <div className="organ-card">
          <div className="organ-header">
            <i className="organ-icon">
              <img alt="Teeth" height={25} width={35} src={teeth} />
            </i>
            <span className="organ-name">Lungs</span>
          </div>

          <div className="organ-date">Date : 26 oct, 2021</div>

          <StaticSlider
            fillColor="#7bcabd"
            fillPercentage="70"
            backgroundColor="#eee"
          />
        </div>
      </div>

      {/* 3rd organ card */}

      <div className="organStatus">
        <div className="organ-card">
          <div className="organ-header">
            <i className="organ-icon">
              <img alt="Bone" height={30} width={30} src={bone} />
            </i>
            <span className="organ-name">Teeth</span>
          </div>

          <div className="organ-date"> Date : 26 oct, 2021</div>

          <StaticSlider
            fillColor="#f37d65"
            fillPercentage="67"
            backgroundColor="#eee"
          />
        </div>
      </div>

      <div className="detailDiv">
        Details
        <i className="rightIcon">
          <MoveRight size={10} />
        </i>
      </div>
    </div>
  </div>
);

export default AnatomyView;
