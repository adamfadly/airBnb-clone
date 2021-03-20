import React from "react";
import "./BigBanner.css";

function BigBanner() {
  return (
    <div class="bigBanner">
      <div className="banner_info">
        <h1>Your World is Worth Sharing</h1>
        <p>Turn your Extra space into your next opportunity</p>
        <button className="button_banner">
          <h5>Become Host</h5>
        </button>
      </div>
    </div>

    // <div>
    //   <div class="bigWrapper">
    //     <img
    //       src="https://media.cntraveler.com/photos/5db1d0dd11c1e500092e7133/master/pass/airbnb-ski-aspen-28328347.jpg"
    //       alt=""
    //     />
    //   </div>
    //   <div className="Content">
    //     <h1>Your World is Worth Sharing</h1>
    //     <p>Turn your Extra space into your next opportunity</p>
    //     <button className="button_banner">Become Host</button>
    //   </div>
    // </div>
  );
}

export default BigBanner;
