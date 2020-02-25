import React from "react";

const WeatherComponent = (props) => {
    return (
        <React.Fragment>
            <form onSubmit={props.loadWeather}>
                <h2> WEATHER API </h2>
                <input type="text" name="city" placeholder="City" />
                <input type="text" name="country" placeholder="Country" />
                <button>Get Weather</button>
            </form>
            <div>
                {props.country && props.city && <p>Location: {props.city}, {props.country}</p>}
                {props.temperature && <p>Temperature: {props.temperature}</p>}
                {props.humidity && <p>Humidity: {props.humidity}</p>}
                {props.error && <p>{props.error}</p>}
            </div>
        </React.Fragment>
    )
}

export default WeatherComponent