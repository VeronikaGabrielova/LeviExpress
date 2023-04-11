import React from "react";
import "./style.css";
import BusStop from "../BusStop";
import SelectedSeat from "../SelectedSeat";

const JourneyDetail = ({ journey }) => {
  return (
    <>
      <div className="journey-detail container">
        <h2>Podrobnosti cesty</h2>
        <div className="stops">
          <BusStop journey={journey} />
        </div>
      </div>
      {journey && <SelectedSeat number={journey.autoSeat} />}
    </>
  );
};

export default JourneyDetail;
