import React from "react";
import "./Header.css";

const Header = () => {
  let day = true;
  const changeMode = () => {
    let v1 = document.getElementById("body");
    let v2 = document.getElementById("header");
    let v3 = document.getElementById("modeSpan");
    console.log(v1);
    console.log(v2);
    if (day) {
      v1.setAttribute("class", "bodyDark");
      v2.setAttribute("class", "headerDark");
      day = !day;
      v3.innerText = "Light Mode";
    } else {
      v1.setAttribute("class", "bodyLight");
      v2.setAttribute("class", "headerLight");
      day = !day;
      v3.innerText = "Dark Mode";
    }
  };

  return (
    <>
      <div id="header" className="headerLight " id="header">
        <section>
          <h5>Where in the world</h5>
        </section>
        <section
          id="mode"
          onClick={() => {
            changeMode();
          }}
        >
          <i class="fas fa-cloud-moon" />
          <span id="modeSpan">Dark Mode</span>
        </section>
      </div>
    </>
  );
};

export default Header;
