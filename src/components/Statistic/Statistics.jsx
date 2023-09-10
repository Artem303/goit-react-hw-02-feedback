import React from 'react';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.statisticsContainer}>
      <h2>Statistics</h2>
      <ul className={css.statisticsList}>
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
