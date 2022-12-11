import Card from 'react-bootstrap/Card';
import {Container,Row,Col,Image} from "react-bootstrap"
import duneImg  from "../assets/trending/dune.jfif"
import avatarImg from "../assets/trending/avatar.jfif"
import guardiansImg from "../assets/trending/guardians.jfif"
import kknImg from "../assets/trending/kkn.jfif"
import morbiusImg from "../assets/trending/morbius.jpg"
import lightyear from "../assets/trending/lightyear.jfif"
import revengeImg from "../assets/trending/revenge.jfif"
import wakandaImg from "../assets/trending/black-panther.jfif"
const Trending = () => {
	return (
		<div>
			<Container>
			<br />
			<h1 className="text-danger text-left">Trending Movie</h1>
				<Row>
					<Col md={3} sm={2} className="movieWrapper">
						<Card className="bg-dark mt-3 text-white">
      					<Image src={duneImg} height="350px" alt="Card image" />
        				<Card.Title>Dune</Card.Title>
        				<div className="p-2 m-1">
        				<Card.Text>This is a wider card with supporting text below Dune movie</Card.Text>
        				<Card.Text>Last updated 3 mins ago</Card.Text>
        				</div>
        				</Card>
					</Col>
					<Col md={3} sm={2} className="movieWrapper">
						<Card className=" mt-3 bg-dark text-white">
      					<Image src={avatarImg} height="350px" alt="Card image" />
        				<Card.Title>Avatar</Card.Title>
        				<div className="p-2 m-1">
        				<Card.Text>This is a wider card with supporting text below Avatar movie</Card.Text>
        				<Card.Text>Last updated 3 mins ago</Card.Text>
        				</div>
        				</Card>
					</Col>
					<Col md={3} sm={2} className="movieWrapper">
						<Card className="bg-dark text-white mt-3">
      					<Image src={guardiansImg} height="350px" alt="Card image" />
        				<Card.Title>Guardians of the galaxy</Card.Title>
        				<div className="p-2 m-1">
        				<Card.Text>This is a wider card with supporting text below The Guardians movie</Card.Text>
        				<Card.Text>Last updated 3 mins ago</Card.Text>
        				</div>
        				</Card>
					</Col>
					<Col md={3} sm={2} className="movieWrapper">
						<Card className="bg-dark text-white mt-3">
      					<Image src={kknImg} height="350px" alt="Card image" />
        				<Card.Title>KKN di desa penari</Card.Title>
        				<div className="p-2 m-1">
        				<Card.Text>This is a wider card with supporting text below KKN  movie</Card.Text>
        				<Card.Text>Last updated 3 mins ago</Card.Text>
        				</div>
        				</Card>
					</Col>
					<Col md={3} sm={2} className="movieWrapper">
						<Card className="bg-dark text-white mt-3">
      					<Image src={revengeImg} height="350px" alt="Card image" />
        				<Card.Title>Revenge of others</Card.Title>
        				<div className="p-2 m-1">
        				<Card.Text>This is a wider card with supporting text below The Guardians movie</Card.Text>
        				<Card.Text>Last updated 3 mins ago</Card.Text>
        				</div>
        				</Card>
					</Col>
					<Col md={3} sm={2} className="movieWrapper">
						<Card className="bg-dark text-white mt-3">
      					<Image src={lightyear} height="350px" alt="Card image" />
        				<Card.Title>Lighyear</Card.Title>
        				<div className="p-2 m-1">
        				<Card.Text>This is a wider card with supporting text below The Lighyear  movie</Card.Text>
        				<Card.Text>Last updated 3 mins ago</Card.Text>
        				</div>
        				</Card>
					</Col>
					<Col md={3} sm={2} className="movieWrapper">
						<Card className="bg-dark text-white mt-3">
      					<Image src={morbiusImg} height="350px" alt="Card image" />
        				<Card.Title>Morbius</Card.Title>
        				<div className="p-2 m-1">
        				<Card.Text>This is a wider card with supporting text below Morbius movie</Card.Text>
        				<Card.Text>Last updated 3 mins ago</Card.Text>
        				</div>
        				</Card>
					</Col>
					<Col md={3} sm={2} className="movieWrapper">
						<Card className="bg-dark text-white mt-3">
      					<Image src={wakandaImg} height="350px" alt="Card image" />
        				<Card.Title>Black panther</Card.Title>
        				<div className="p-2 m-1">
        				<Card.Text>This is a wider card with supporting text below Black Panther movie</Card.Text>
        				<Card.Text>Last updated 3 mins ago</Card.Text>
        				</div>
        				</Card>
					</Col>
				</Row>
			</Container>
		</div>
	)
};

export default Trending;