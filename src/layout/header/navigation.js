
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationButtons = () => {
    return (
        <Navbar data-bs-theme="dark">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Navbar.Brand href="#/home" className="mr-80">
                            <button type="button"
                                className="btn btn-primary btn-custom">
                                Home
                            </button>
                        </Navbar.Brand>
                        <Navbar.Brand href="#/online" className="mr-80">
                            <button type="button"
                                className="btn btn-primary btn-custom">
                                Online Services
                            </button>
                        </Navbar.Brand>

                        <Navbar.Brand href="#" className="mr-80">
                            <NavDropdown title="Society Registration"
                                className="btn-primary btn-custom btnlike">
                                <NavDropdown.Item href="#action/3.1">
                                    PFCS Registration
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">
                                    FWCS Registration
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">
                                    FMCS Registration
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    LHCS Registration
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Navbar.Brand>

                        <Navbar.Brand href="#" className="mr-80">
                            <NavDropdown title="Member Registration"
                                className="btn-primary btn-custom btnlike">
                                <NavDropdown.Item href="#action/3.1">
                                    Member Reg. for PFCS
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">
                                    Member Reg. for FWCS
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">
                                    Member Reg. for FMCS
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Member Reg. for LHCS
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Navbar.Brand>

                        <Navbar.Brand href="#home">
                            <button type="button"
                                className="btn btn-primary btn-custom">
                                Contact Us
                            </button>
                        </Navbar.Brand>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationButtons;