import "./Dropdown.css";
import { useState } from "react";

const Dropdown = ({ fun }) => {
  const [isActive, setIsActive] = useState(false);
  const [filter, setFilter] = useState("Filter by Region");
  const options = ["Africa", "America", "Asia", "Europe", "Oceania"];
  return (
    <div className="dropdown">
      <div className="dropdrown-btn" onClick={() => setIsActive(!isActive)}>
        {filter}
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((opt) => (
            <div className="dropdown-item" onClick={() => {
              fun(opt)
              setIsActive(false)
              setFilter(opt)
              }}>
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Dropdown;
