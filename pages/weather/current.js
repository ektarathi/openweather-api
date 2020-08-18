import { useState } from 'react';
import Head from 'next/head';
import Header from '../../components/header';
import Footer from '../../components/footer';
import CurrentReport from '../../components/current-report';
import { Form, Row, Col, Button } from "react-bootstrap";

const APIKEY = "2eccc18dc89efca8cf2fcc3f53f6b503";

const CurrentWeather = () => {
    const [weather, setWeather] = useState([]);
    const [city, setCity] = React.useState("");

    const handleChange = () => {
        setCity(event.target.value);
    };

    const getWeather = async () => {
        event.preventDefault();
        setWeather(
            await fetch(
                `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}`
            )
            .then((res) => res.json())
            .then((data) => data)
        );
    };
    
  return (
    <div className="container">
      <Head>
        <title>Current Weather Report</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1 className="text-center">Current Weather Forecast</h1>
        <Form onSubmit={getWeather}>
            <Row>
                <Col xs={12} sm={5}>
                    <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                        <Form.Label>Please select the city</Form.Label>
                        <Form.Control as="select" size="lg" custom onChange={handleChange}>
                            <option></option>
                            <option>Berlin</option>
                            <option>Frankfurt</option>
                            <option>Munich</option>
                            <option>Dresden</option>
                            <option>Stuttgart</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col xs={12} sm={5}>
                    <Form.Group>
                        <Form.Label>Country Name </Form.Label>
                        <Form.Control placeholder="Germany" size="lg" disabled/>
                    </Form.Group>
                </Col>
                <Col xs={12} sm={2}>
                    <Button variant="primary" type="submit" size="lg">
                        Submit
                    </Button>
                </Col>
            </Row>
        </Form>
        <div className="grid">
            {weather.length !== undefined ? '' : <CurrentReport data={weather}/>} 
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default CurrentWeather;
