import React from "react";

const WeatherCard = ({ data, onRemove, onSelect }) => {
  return (
    <div className="col-md-4 col-sm-6 mb-4 weather-card">
      <div className="card weather-card" onClick={onSelect}>
        <div className="card-body">
          <h5 className="card-title">{data.city}</h5>
          <p>Current Temp: {data.currentTemp}°C</p>
          <p>Condition: {data.condition}</p>
          <p>High: {data.highTemp}°C | Low: {data.lowTemp}°C</p>
          <button className="btn btn-info " onClick={() => onRemove(data.city)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
