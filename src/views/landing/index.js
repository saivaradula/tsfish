import React from 'react'
import LoginComponent from '../../components/login';
import { useSelector } from "react-redux";

const LandingPage = () => {
    const { isLoggedIn } = useSelector(state => state.auth);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    {!isLoggedIn && <LoginComponent />}
                    {
                        isLoggedIn && <div>
                            <h6>Mission</h6>
                            <p>
                                State government proposes to utilize the excellent water resources available by seeding the
                                reservoirs, tanks and ponds every year regularly by government at free of cost
                                besides taking up conservancy measures so as to maintain the stock. Growing
                                visibility of fisheries sector due to enhanced water resources on construction and completion
                                of irrigation projects is expected to lay a strong foundation for aquaculture in the canal
                                fed areas besides emerging as an attractive investment option and a lucrative business activity.
                            </p>
                        </div>
                    }
                </div>
                <div className="col-md-8">
                    <p>
                        Telangana is the 29th state of India, formed on 2nd of June 2014.
                        The state has an area of 1,14,840 Sq Km and has a population of 3,52,86,757.
                        Telangana, the youngest State in the Union of India, needs all round development and socially
                        inclusive growth. Fisheries is one of the most important traditional occupation and is
                        providing livelihoods to around 5 lakh families in the
                        State apart from being an important source of food nutrient.
                    </p>
                    <p>
                        Telangana has the third largest inland water resource base in India for fisheries with 77 large,
                        medium and minor reservoirs and about 24,189 tanks with 5.7 lakh ha water spread area
                        suitable for fisheries. Aquaculture is in more than 1000 ha area. A rich human resource pool
                        of 27.14 lakh population comprising of fishermen communities who are organized into about 4000 Fishermen
                        societies with about 3 lakh members spread over the entire state.
                    </p>
                    <div className='mb-3'>
                        <h6>Vision</h6>
                        <ul>
                            <li>
                                Increasing fish production and productivity by providing backward and forward linkages & enhancing livelihoods of fishers
                            </li>
                            <li>
                                Achieving self-sufficiency in production of fish seed.
                            </li>
                            <li>
                                Ensuring availability of fish to the consumers at affordable prices and in hygienic condition by improving the marketing infrastructure
                            </li>
                            <li>
                                Welfare of fishers
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;