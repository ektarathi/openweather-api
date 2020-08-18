import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Table = ({ data, conversionValue }) => {
	const [sunrise, setSunrise] = useState("");
	const [sunset, setSunset] = useState("");

	const fahrenheit = Math.round((data.main.feels_like * 9) / 5) + 32;
	const celsius = Math.round(data.main.feels_like);

	useEffect(() => {
		let sunrise = calculateTime(data.sys.sunrise);
		let sunset = calculateTime(data.sys.sunset);
		setSunrise(sunrise);
		setSunset(sunset);
	}, [data.sys.sunrise, data.sys.sunset]);

	const calculateTime = (value) => {
		let date = new Date(value * 1000);
		let hours = date.getHours();
		let minutes = "0" + date.getMinutes();
		let formattedTime = hours + ":" + minutes.substr(-2);
		return formattedTime;
	};

	return (
		<>
			<Row>
				<Col xs={12} sm={6}>Sunrise {sunrise}</Col>
				<Col xs={12} sm={6}>Sunset {sunset}</Col>
			</Row>
			<Row>
                <Col xs={12} sm={6}>Feels Like {conversionValue === "metric" ? celsius + "°C" : fahrenheit + "°F"}</Col>
				<Col xs={12} sm={6}>Wind {data.wind.speed + " m/s"}</Col>
			</Row>
            <Row>
                <Col xs={12} sm={6}>Latitude {data.coord.lat}</Col>
				<Col xs={12} sm={6}>Longitude {data.coord.lon}</Col>
			</Row>
            <Row>
                <Col xs={12} sm={6}>Humidity {data.main.humidity + "%"}</Col>
				<Col xs={12} sm={6}>Pressure {data.main.pressure + " hPa"}</Col>
			</Row>
		</>
	);
};

export default Table;
