import React from "react"

interface State {
  date: Date
}

export default class Clock extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {date: new Date()};
  }
  
  state: State;
  timerID: any;

  componentDidMount() {
    this.timerID = setInterval(
      () => this.setState({date: new Date()}),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <span className="clock">{this.state.date.toLocaleTimeString()}</span>
    );
  }
}