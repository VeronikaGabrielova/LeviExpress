import React, { useState } from "react";
import { JourneyPicker } from "../JourneyPicker";

export const Home = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journey) => {
    console.log(journey)
    setJourney(journey);
  };
  console.log(journey);
  return (
    <>
      <main>
        <JourneyPicker onJourneyChange={handleJourneyChange} />

        {journey && <p>Nalezeno spojení s id {journey.journeyId}</p>}
      </main>
    </>
  );
};
