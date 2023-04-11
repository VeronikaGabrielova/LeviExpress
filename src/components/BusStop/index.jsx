import React from "react";
import "./style.css";

const BusStop = ({ journey }) => {
  return (
    <>
      {journey.stops.map((journey) => {
        return (
          <div className="bus-stop" key={journey.code}>
            <div className="bus-stop__bullet"></div>
            <div className="bus-stop__place">
              <div className="bus-stop__city">{journey.name}</div>
              <div className="bus-stop__station">{journey.station}</div>
            </div>
            <div className="bus-stop__departure">{journey.time}</div>
          </div>
        );
      })}
    </>
  );
};

export default BusStop;
