import { Component } from 'react';

export class Feedback extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  render() {
    return (
      <>
        <section>
          <h1>Please leave feelback</h1>
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button>
        </section>
        <section>
          <h2>Statistics</h2>
          <ul>
            <li>Good: 0</li>
            <li>Neutral: 0</li>
            <li>Bad: 0</li>
          </ul>
        </section>
      </>
    );
  }
}
