import React from "react";
import WeatherComponent from './WeatherComponent'

const Api_Key = "8d2de98e089f1c28e1a22fc19a24ef04";

class App extends React.Component {

  state = {

    temperature: '',
    city: '',
    country: '',
    humidity: '',
    error: ''
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const apicall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
    const response = await apicall.json();
    console.log(response);
    if (city && country) {
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        error: ""
      })
    } else {
      this.setState({
        error: "input search values"
      })
    }
  }

  render() {
    return (
      <div>
        <WeatherComponent
          loadWeather={this.getWeather}
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error} />
      </div>
    )
  }
}
export default App;