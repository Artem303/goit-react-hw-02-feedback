import React from 'react';
import CSS from './Statistics.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total : {total}</li>
        <li>Positiv feedback: {positivePercentage}%</li>
      </ul>
    </div>
  );
};

export default Statistics;
