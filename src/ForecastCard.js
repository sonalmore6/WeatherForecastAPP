import React from "react";

const ForecastCard = ({ data }) => {
  return (
    <div className="card forecast-card ">
      <div className="card-body">
        <h3 className="card-title">{data.city}</h3>
        <p>
          <strong>Condition:</strong> {data.condition}
        </p>
        <p>
          <strong>Today's High:</strong> {data.highTemp}°C | <strong>Low:</strong> {data.lowTemp}°C
        </p>
        <h4>3-Day Forecast:</h4>
        <ul>
          {data.forecast.map((dayForecast, index) => (
            <li key={index}>
              <strong>{dayForecast.day}:</strong> {dayForecast.temp}°C
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ForecastCard;
