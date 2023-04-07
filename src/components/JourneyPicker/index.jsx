import React, { useEffect, useState } from "react";
import mapImage from "./img/map.svg";
import "./style.css";
import { Fragment } from "react";

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [date, setDate] = useState("");
  const [dates, setDates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("https://apps.kodim.cz/daweb/leviexpress/api/cities"),
      fetch("https://apps.kodim.cz/daweb/leviexpress/api/dates"),
    ])
      .then(([response1, response2]) =>
        Promise.all([response1.json(), response2.json()])
      )
      .then(([data1, data2]) => {
        setCities(data1.results);
        setDates(data2.results);
      })

      .catch((error) => {
        console.error(error);
      });
  }, []);

  //Nevím
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`
    )
      .then((response) => response.json())
      .then((data) => {
        onJourneyChange(data.results);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form onSubmit={handleSubmit} className="journey-picker__form">
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
            >
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select value={toCity} onChange={(e) => setToCity(e.target.value)}>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select value={date} onChange={(e) => setDate(e.target.value)}>
              <DatesOptions dates={dates} />
            </select>
          </label>
          <div className="journey-picker__controls">
            <button
              disabled={!fromCity || !toCity || !date}
              className="btn"
              type="submit"
            >
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src={mapImage} />
      </div>
    </div>
  );
};

const CityOptions = ({ cities }) => {
  return (
    <>
      <option value="">Vyberte</option>
      {cities.map((city) => {
        return (
          <Fragment key={city.code}>
            <option value={city.code}>{city.name}</option>
          </Fragment>
        );
      })}
    </>
  );
};

const DatesOptions = ({ dates }) => {
  return (
    <>
      <option value="">Vyberte</option>
      {dates.map((date) => {
        return (
          <Fragment key={date.dateBasic}>
            <option value={date.dateBasic}>{date.dateCs}</option>
          </Fragment>
        );
      })}
    </>
  );
};
