import { Component } from 'react';
import { Layout } from './Layout';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = type => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state);
    return total.reduce((prevTotal, total) => prevTotal + total, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.ceil((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <Layout>
        <section>
          <h1>Please leave feelback</h1>
          <button
            type="button"
            name="good"
            onClick={() => this.addFeedback('good')}
          >
            Good
          </button>
          <button
            type="button"
            name="neutral"
            onClick={() => this.addFeedback('neutral')}
          >
            Neutral
          </button>
          <button
            type="button"
            name="bad"
            onClick={() => this.addFeedback('bad')}
          >
            Bad
          </button>
        </section>
        <section>
          <h2>Statistics</h2>
          <ul>
            <li>Good: {this.state.good}</li>
            <li>Neutral: {this.state.neutral}</li>
            <li>Bad: {this.state.bad}</li>
            <li>Total: {this.countTotalFeedback()}</li>
            <li>
              Positive feedback: {this.countPositiveFeedbackPercentage()}%
            </li>
          </ul>
        </section>
      </Layout>
    );
  }
}
