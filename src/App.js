import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api/index";
import logo from "./images/image.png";

class App extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({
      data,
      country: "",
    });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({
      data,
      country,
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <img className={styles.image} src={logo} alt="corona-logo" />
        <Cards data={this.state.data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    );
  }
}

export default App;
