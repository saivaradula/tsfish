
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from "react-redux";

const NavigationButtons = () => {
    const { isLoggedIn } = useSelector(state => state.auth);
    return (
        <Navbar data-bs-theme="dark">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id={isLoggedIn ? 'basic-navbar-nav-login' : 'basic-navbar-nav'}>
                    <Nav>
                        {
                            isLoggedIn && <Navbar.Brand href="#/dashboard" className="mr-80">
                                <button type="button"
                                    className="btn btn-primary btn-custom">
                                    Dashboard
                                </button>
                            </Navbar.Brand>
                        }

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
                                <NavDropdown.Item href="#/registration/pfcs">
                                    PFCS Registration
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#/registration/fwcs">
                                    FWCS Registration
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#/registration/fmcs">
                                    FMCS Registration
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#/registration/lhcs">
                                    LHCS Registration
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Navbar.Brand>

                        <Navbar.Brand href="#" className="mr-80">
                            <NavDropdown title="Member Registration"
                                className="btn-primary btn-custom btnlike">
                                <NavDropdown.Item href="#/member/pfcs">
                                    Member Reg. for PFCS
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#/member/fwcs">
                                    Member Reg. for FWCS
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#/member/fmcs">
                                    Member Reg. for FMCS
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#/member/lhcs">
                                    Member Reg. for LHCS
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Navbar.Brand>

                        <Navbar.Brand href="#/contact">
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