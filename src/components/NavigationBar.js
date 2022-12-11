import {Navbar,Container,Nav} from "react-bootstrap"


const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark">
            <Container>
                <Navbar.Brand>Movie App</Navbar.Brand>
                <Nav>
                    {/*ini akan menjadi di sebelah kiri*/}
                    <Nav.Link>Trending</Nav.Link>
                    <Nav.Link>Super Hero</Nav.Link>
                </Nav>
             </Container>
            </Navbar>
        </div> 
    )
}

export default NavigationBar;
// navbar.Brand berguna untuk membuat judul/logo disebelah kiri navbar
// navbar variant="dark",navbar dark yang otomatis text nya white/light(terang)