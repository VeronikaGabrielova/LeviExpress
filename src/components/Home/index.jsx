import React, { useState } from "react";
import { JourneyPicker } from "../JourneyPicker";
import JourneyDetail from "../JourneyDetail";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journey) => {
    console.log(journey);
    setJourney(journey);
  };
  const handleBuy = () => {
    console.log("funguju");
    fetch(`https://apps.kodim.cz/daweb/leviexpress/api/reservation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "create",
        seat: journey.autoSeat,
        journeyId: journey.journeyId,
      }),
    })
      .then((response) => response.json())
      .then((data) => navigate(`/reservation/${data.results.reservationId}`));
  };

  return (
    <>
      <main>
        <JourneyPicker onJourneyChange={handleJourneyChange} />

        {journey !== null && <JourneyDetail journey={journey} />}
        <div className="controls container">
          <button onClick={handleBuy} className="btn btn--big" type="button">
            Rezervovat
          </button>
        </div>
      </main>
    </>
  );
};
