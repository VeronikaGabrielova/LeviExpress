import React from "react";
import SeatRow from "./../SeatRow";

const SeatPicker = ({ seats, journeyId,selectedSeat }) => {
  
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map((seat, index) => {
          return <SeatRow rowSelectedSeat={selectedSeat}  key={index} row={seat} />;
        })}
      </div>
    </div>
  );
};

export default SeatPicker;
