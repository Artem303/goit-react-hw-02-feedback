import React from 'react';
import css from './Feedback.module.css';

const Feedback = ({ stateKeys, handleIncrement }) => {
  return (
    <div className={css.feedbackContainer}>
      <h2>Pleas leave feedback</h2>
      <ul className={css.feedbackButtonList}>
        {stateKeys.map(option => (
          <li>
            {' '}
            <button
              type="button"
              key={option}
              onClick={() => handleIncrement(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feedback;
