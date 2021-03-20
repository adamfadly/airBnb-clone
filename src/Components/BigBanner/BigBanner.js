import React, { useState } from "react";
import "./BigBanner.css";
import { Button } from "@material-ui/core";

function BigBanner() {
  const [showSearch, setShowSearch] = useState();

  return (
    <div class="bigBanner">
      <div className="banner__search">
        {showSearch && <h1>Date Picker</h1>}

        <Button
          onClick={() => setShowSearch(!showSearch)}
          variant="outlined"
          className="banner__searchButton"
        >
          Search Dates
        </Button>
      </div>
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
