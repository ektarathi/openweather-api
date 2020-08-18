import { Container, Row, Col, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import Report from './report';

const HourlyReport = ({ data }) => {
    console.log('yuiyuii', data);
    const [value, setValue] = React.useState("metric");

	const handleChange = () => {
		setValue(event.target.value);
    };
    
	return (
		<>
            <div className="radio-buttons">
                <ToggleButtonGroup
                    type="radio"
                    name="options"
                    defaultValue={"metric"}
                    onChange={handleChange}
                >
                    <ToggleButton value={"metric"}>Celsius</ToggleButton>
                    <ToggleButton value={"imperial"}>Fahrenheit</ToggleButton>
                </ToggleButtonGroup>
            </div>
            
            <h2>{data.city.name}</h2>
            <div className="display-data">
                {data.list.map((result, index) => {
                    return <Report data={result} value={value} key={index}/>
                })}
            </div>
		</>
	);
};

export default HourlyReport;
