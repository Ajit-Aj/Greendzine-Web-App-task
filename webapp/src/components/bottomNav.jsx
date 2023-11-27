// BottomNav.js
import { useNavigate } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import "./bottomnavStyles.css";

const BottomNav = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/home");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <div className="bottomnav-container">
      <div className="icon" onClick={handleHomeClick}>
        <FaHome size={24} className="home-icon" color="green" />
      </div>
      <div className="icon" onClick={handleProfileClick}>
        <FaUser size={23} className="profile-icon" color="green" />
      </div>
    </div>
  );
};

export default BottomNav;
