import Head from "next/head";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = () => (
	<>
		<Head>
			<title>Open Weather App</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand href="/">Weather Display</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/features">Features</Nav.Link>
					<NavDropdown title="Reports" id="collasible-nav-dropdown">
						<NavDropdown.Item href="/weather/current">Current Report</NavDropdown.Item>
						<NavDropdown.Item href="/weather/hourly">Hourly Report</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</>
);

export default Header;
