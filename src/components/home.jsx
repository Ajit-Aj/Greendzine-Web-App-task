import React from "react";
import BottomNav from "./bottomNav";
import brandLogo from "../assests/moptro logo@2x.png";
import help from "../assests/help.png";
import "./homeStyles.css";

const Home = () => {
  const weekDays = [
    { label: "Monday", value: 10 },
    { label: "Tuesday", value: 30 },
    { label: "Wednesday", value: 45 },
    { label: "Thursday", value: 86 },
    { label: "Friday", value: 100 },
    { label: "Saturday", value: 12 },
  ];

  return (
    <>
      <div className="parent">
        <div className="employee-Prod-Dashboard">
          <div className="help-logo">
            <img
              src={help}
              alt="image"
              style={{
                width: "100%",
                maxWidth: "45px",
                maxHeight: "45px",
                marginBottom: "10px",
                cursor: "pointer",
              }}
            />
          </div>
          <div className="logo">
            <div className="count">4</div>
            <img
              src={brandLogo}
              alt="image"
              style={{
                width: "100%",
                maxWidth: "90px",
                maxHeight: "90px",
                marginBottom: "10px",
              }}
            />
          </div>
          <div className="dashboard-header">
            Employee Productivity Dashboard
          </div>
          <div className="prod-list">
            {weekDays.map((weekDay, index) => {
              return (
                <PercentageBoard
                  weekDay={weekDay.label}
                  value={weekDay.value}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <BottomNav />
      </div>
      
    </>
  );
};

export default Home;

const PercentageBoard = ({ weekDay, value }) => {
  return (
    <div className="prod-board">
      <div className="prod-percentage">
        <div className="prod-label">Productivity on {weekDay}</div>
        <div className="prod-value">{`${value}`}%</div>
      </div>
      <div className="percentage" style={{ "--data": value }}></div>
    </div>
  );
};
