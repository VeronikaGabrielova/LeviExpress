import React from "react";
import Seat from "./../Seat";

const SeatRow = ({ row, rowSelectedSeat }) => {
  return (
    <div className="seat-row">
      {row.map((seat) => {
        return (
          <Seat
            key={seat.number}
            number={seat.number}
            isOccupied={seat.isOccupied}
            rowSelectedSeat={seat.number}
            isSelected={seat.number === rowSelectedSeat}
          />
        );
      })}
    </div>
  );
};

export default SeatRow;
