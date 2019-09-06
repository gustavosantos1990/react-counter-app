import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 3 },
      { id: 3, value: 0 },
      { id: 4, value: 10 }
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleAdd = () => {
    const maxId =
      this.state.counters.length === 0
        ? 1
        : Math.max(...this.state.counters.map(counter => counter.id));
    const counters = this.state.counters;
    counters.push({ id: maxId + 1, value: this.getRandomInt(50) });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <Counters
          counters={this.state.counters}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onReset={this.handleReset}
          onAdd={this.handleAdd}
        />
      </React.Fragment>
    );
  }

  getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };
}

export default App;
