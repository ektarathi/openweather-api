import { Card, Row, Col } from "react-bootstrap";
import moment from 'moment';

const CurrentReport = ({ data, value }) => {
    
	// Temperature values
	const fahrenheit = Math.round((data.main.temp * 9) / 5) + 32;
    const celsius = Math.round(data.main.temp);
    
    let newDate = new Date();
    const weekday = data.dt * 1000
    newDate.setTime(weekday);

	const weatherName = data.weather[0].main.toLowerCase();
	return (
            <Col sm={4}>
                <Card
                    className={`bg-dark text-white text-center weather-description ${weatherName}`}
                >
                    <Card.Body>
                        <Card.Title>
                            <h2>{moment(newDate).format('dddd')}</h2>
                        </Card.Title>
                        <p>{moment(newDate).format('MMMM Do, h:mm a')}</p>
                        <h2>{value === "metric" ? celsius + "°C" : fahrenheit + "°F"}</h2>
                        <Card.Text>{data.weather[0].description}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
	);
};

export default CurrentReport;
