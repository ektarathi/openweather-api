import { Card, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import Table from './table';

const CurrentReport = ({ data }) => {
	console.log('Report  uii', data);
	const [value, setValue] = React.useState("metric");

	// Temperature values
	const fahrenheit = Math.round((data.main.temp * 9) / 5) + 32;
	const celsius = Math.round(data.main.temp);

	const weatherName = data.weather[0].main.toLowerCase();

	const handleChange = () => {
		setValue(event.target.value);
	};

	return (
		<>
			<ToggleButtonGroup
				type="radio"
				name="options"
				defaultValue={"metric"}
				onChange={handleChange}
			>
				<ToggleButton value={"metric"}>Celsius</ToggleButton>
				<ToggleButton value={"imperial"}>Fahrenheit</ToggleButton>
			</ToggleButtonGroup>
			<Card
				className={`bg-dark text-white text-center weather-description ${weatherName}`}
			>
				<Card.Body>
					<Card.Title>
						<h2>{data.name}</h2>
					</Card.Title>
					<h2>{value === "metric" ? celsius + "°C" : fahrenheit + "°F"}</h2>
					<Card.Text>
						{data.weather[0].description}
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
};

export default CurrentReport;
