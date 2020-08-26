import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api/index";

class App extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
    this.setState({
      data,
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <Cards data={this.state.data} />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
