
import { useSelector } from "react-redux";

const NavigationButtons = () => {
    const { isLoggedIn } = useSelector(state => state.auth);
    return (
        <nav id={isLoggedIn ? 'basic-navbar-nav-login' : 'basic-navbar-nav'} class="navbar navbar-expand-lg navbar-custom mt-3 mb-3">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            isLoggedIn &&  <li class="nav-item">
                            <a href="#/dashboard" class="nav-link active" aria-current="page">Dashboard</a>
                        </li>
                        }
                        <li class="nav-item">
                            <a class="nav-link active"aria-current="page" href="#/home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#/online">Online Services</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Society Registration
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><a class="dropdown-item" href="#/registration/pfcs">PFCS Registration</a></li>
                                <li><a class="dropdown-item" href="#/registration/fwcs">FWCS Registration</a></li>
                                <li><a class="dropdown-item" href="#/registration/fmcs">FMCS Registration</a></li>
                                <li><a class="dropdown-item" href="#/registration/lhcs">LHCS Registration</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Member Registration
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><a class="dropdown-item" href="#/member/pfcs">Member Reg. for PFCS</a></li>
                                <li><a class="dropdown-item" href="#/member/fwcs">Member Reg. for FWCS</a></li>
                                <li><a class="dropdown-item" href="#/member/fmcs">Member Reg. for FMCS</a></li>
                                <li><a class="dropdown-item" href="#/member/lhcs">Member Reg. for LHCS</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#/contact">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavigationButtons;