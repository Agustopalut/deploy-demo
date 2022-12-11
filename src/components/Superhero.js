import {Container,Row,Col,Card,Image} from "react-bootstrap"
import aquaman from "../assets/aquaman.jfif"
import avengers from "../assets/avengers.jfif"
import superman from "../assets/superman.jfif"
import ironman from "../assets/ironman.jpg"
import wonderImg from "../assets/wondar-women.jfif"
import spiderman from "../assets/spiderman.jfif"
const Superhero = () => {
	return (
		<div>
			<Container>
				<Row>
				<Col md={4} sm={2} className="movieWrapper">
						<Card className="bg-dark mt-3 text-white">
      					<Image src={avengers} height="350px" alt="Card image" />
        				<Card.Title>Avengers</Card.Title>
        				<div className="p-2 m-1">
        				<Card.Text>This is a wider card with supporting text below Dune movie</Card.Text>
        				<Card.Text>Last updated 3 mins ago</Card.Text>
        				</div>
        				</Card>
					</Col>
					<Col md={4} sm={2} className="movieWrapper">
						<Card className=" mt-3 bg-dark text-white">
      					<Image src={aquaman} height="350px" alt="Card image" />
        				<Card.Title>Aquaman</Card.Title>
        				<div className="p-2 m-1">
        				<Card.Text>This is a wider card with supporting text below Avatar movie</Card.Text>
        				<Card.Text>Last updated 3 mins ago</Card.Text>
        				</div>
        				</Card>
					</Col>
					<Col md={4} sm={2} className="movieWrapper">
						<Card className="bg-dark text-white mt-3">
      					<Image src={superman} height="350px" alt="Card image" />
        				<Card.Title>Superman</Card.Title>
        				<div className="p-2 m-1">
        				<Card.Text>This is a wider card with supporting text below The Guardians movie</Card.Text>
        				<Card.Text>Last updated 3 mins ago</Card.Text>
        				</div>
        				</Card>
					</Col>
					<Col md={4} sm={2} className="movieWrapper">
						<Card className="bg-dark text-white mt-3">
      					<Image src={spiderman} height="350px" alt="Card image" />
        				<Card.Title>Spiderman</Card.Title>
        				<div className="p-2 m-1">
        				<Card.Text>This is a wider card with supporting text below KKN  movie</Card.Text>
        				<Card.Text>Last updated 3 mins ago</Card.Text>
        				</div>
        				</Card>
					</Col>
					<Col md={4} sm={2} className="movieWrapper">
						<Card className="bg-dark text-white mt-3">
      					<Image src={ironman} height="350px" alt="Card image" />
        				<Card.Title>Iron man</Card.Title>
        				<div className="p-2 m-1">
        				<Card.Text>This is a wider card with supporting text below The Guardians movie</Card.Text>
        				<Card.Text>Last updated 3 mins ago</Card.Text>
        				</div>
        				</Card>
					</Col>
					<Col md={4} sm={2} className="movieWrapper">
						<Card className="bg-dark text-white mt-3">
      					<Image src={wonderImg} height="350px" alt="Card image" />
        				<Card.Title>Wonder Woman</Card.Title>
        				<div className="p-2 m-1">
        				<Card.Text>This is a wider card with supporting text below The Lighyear  movie</Card.Text>
        				<Card.Text>Last updated 3 mins ago</Card.Text>
        				</div>
        				</Card>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Superhero;