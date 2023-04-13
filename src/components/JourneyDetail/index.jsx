import React from "react";
import "./style.css";
import BusStop from "../BusStop";


const JourneyDetail = ({ journey }) => {
  return (
    <>
      <div className="journey-detail container">
        <h2>Podrobnosti cesty</h2>
        <div className="stops">
          <BusStop journey={journey} />
        </div>
      </div>
    </>
  );
};

export default JourneyDetail;
