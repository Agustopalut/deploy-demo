import {Container,Row,Col,Button} from "react-bootstrap"
const Intro = () => {
	return (
		<div className="intro d-flex justify-content-end align-items-end ">
          <Container className="text-light d-flex justify-content-center text-center align-items-center fw-bold fs-1">
            <Row>
              <Col>
                <div className="title">Nonton Gratiss</div>
                <div className="title">Ga Pake Karcis</div>
                <div className="myButton d-flex justify-content-center align-items-center">
                	<Button className="btn btn-dark">Lihat semua</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
	)
}

export default Intro;