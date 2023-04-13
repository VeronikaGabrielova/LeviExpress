import React from "react";
import SeatRow from "./../SeatRow";

const SeatPicker = ({ seats, journeyId, selectedSeat, onSelect }) => {
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map((seat, index) => {
          return (
            <SeatRow
              onSelect={onSelect}
              rowSelectedSeat={selectedSeat}
              key={index}
              row={seat}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SeatPicker;
