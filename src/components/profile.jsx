import React, { useState } from "react";
import BottomNav from "./bottomNav";
import brandLogo from "../assests/moptro logo@2x.png";
import help from "../assests/help.png";
import "./profileStyles.css";
import { SearchBar } from "./searchBar";

const Profile = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const employeeData = [
    {
      emp_id: 1,
      name: "Arjun",
      dob: "10-12-2000",
      role: "Software Developer",
    },
    {
      emp_id: 2,
      name: "Sara",
      dob: "05-25-1995",
      role: "UX Designer",
    },
    {
      emp_id: 3,
      name: "Vikram",
      dob: "03-18-1988",
      role: "Data Scientist",
    },
    {
      emp_id: 4,
      name: "Surya",
      dob: "12-02-1992",
      role: "Project Manager",
    },
    {
      emp_id: 5,
      name: "John",
      dob: "07-08-1990",
      role: "System Administrator",
    },
    {
      emp_id: 6,
      name: "Sri",
      dob: "07-08-2002",
      role: "System Administrator",
    },
    {
      emp_id: 7,
      name: "Hema",
      dob: "07-09-2000",
      role: "System Administrator",
    },
    {
      emp_id: 8,
      name: "Ravi",
      dob: "04-15-1991",
      role: "Network Engineer",
    },
    {
      emp_id: 9,
      name: "Priya",
      dob: "09-20-1985",
      role: "Database Administrator",
    },
    {
      emp_id: 10,
      name: "Aruna",
      dob: "02-28-1998",
      role: "Frontend Developer",
    },
    {
      emp_id: 11,
      name: "Kumar",
      dob: "11-10-1983",
      role: "Backend Developer",
    },
    {
      emp_id: 12,
      name: "Neha",
      dob: "06-05-1993",
      role: "Quality Assurance Engineer",
    },
    {
      emp_id: 13,
      name: "Amit",
      dob: "09-14-1987",
      role: "DevOps Engineer",
    },
    {
      emp_id: 14,
      name: "Pooja",
      dob: "03-22-1996",
      role: "Graphic Designer",
    },
    {
      emp_id: 15,
      name: "Rajesh",
      dob: "01-05-1989",
      role: "Business Analyst",
    },
    {
      emp_id: 16,
      name: "Mia",
      dob: "06-30-1994",
      role: "UI/UX Developer",
    },
    {
      emp_id: 17,
      name: "Vishal",
      dob: "08-18-2001",
      role: "Mobile App Developer",
    },
  ];

  const [filteredData, setFilteredData] = useState(employeeData);

  const handleSearch = (result) => {
    setFilteredData(result);
  };

  return (
    <>
      <div className="profile-parent">
        <div className="profile-Dashboard">
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

          <div className="search-bar">
            <SearchBar searchData={employeeData} onSearch={handleSearch} />
          </div>

          <div className="employeCard-container">
            {filteredData.map((employee, index) => (
              <div
                key={employee.emp_id}
                className={`employee-card ${
                  index % 2 === 0 ? "even-card" : ""
                }`}
              >
                <p>EmpID: {employee.emp_id}</p>
                <p>Name: {employee.name}</p>
                <p style={{ color: "orange" }}>DOB: {employee.dob}</p>
                <p style={{ color: "green" }}>Role: {employee.role}</p>
                {/* <div className="index">{index + 1}</div> */}
              </div>
            ))}
          </div>
        </div>
        <BottomNav />
      </div>
    </>
  );
};

export default Profile;
