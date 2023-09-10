import React from 'react';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistic/Statistics';
import Notification from './Notification/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = btnName => {
    this.setState(prev => ({
      [btnName]: prev[btnName] + 1,
    }));
  };
  total = () => {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  };

  positivePercentage = () => {
    return Math.round((this.state.good / this.total()) * 100);
  };

  render() {
    const stateKeys = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Feedback
          stateKeys={stateKeys}
          handleIncrement={this.handleIncrement}
        />
        {this.total() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.total()}
            positivePercentage={this.positivePercentage()}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </div>
    );
  }
}
export default App;
