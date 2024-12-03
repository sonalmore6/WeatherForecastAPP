import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const WeatherGraph = ({ data }) => {
  const forecastData = data.forecast.map((f) => ({
    name: f.day,
    temp: f.temp,
  }));

  return (
    <div className="mt-4 graph" >
      <h2>Temperature Trend: {data.city}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={forecastData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="temp" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherGraph;
