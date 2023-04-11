import React, { useState } from "react";
import { JourneyPicker } from "../JourneyPicker";
import JourneyDetail from "../JourneyDetail";

export const Home = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journey) => {
    console.log(journey);
    setJourney(journey);
  };
  console.log(journey);
  return (
    <>
      <main>
        <JourneyPicker onJourneyChange={handleJourneyChange} />

        {journey !== null && <JourneyDetail journey={journey} />}
      </main>
    </>
  );
};
