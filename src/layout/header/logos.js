import KCR from '../../assets/images/KCR.jpg';
import TSlogo from '../../assets/images/TSlogo.png';
import FishLogo from '../../assets/images/Fisheries_Dept_logo.png';
import Talasani from '../../assets/images/Talasani.png'
import RaviP from '../../assets/images/Pittala_Ravinder.png';

const Logos = () => {
    return (
        <div className="mb-4 mt-2">
            <div className="row">
                <div className="col-sm-6 col-md-3 mb-3">
                    <img height={100} width={100} src={KCR} alt="KCR" />
                    <div>
                        <span className="h-name br">Sri. K. Chandrasekhar Rao.</span>
                        <span className="h-designation br">Hon'ble Chief Minister</span>
                        <span className="h-department br">Government of Telangana</span>
                    </div>
                </div>
                <div className="col-sm-6 col-md-2 mb-3">
                    <img height={100} width={100} src={TSlogo} alt="Telangana Logo" />
                </div>
                <div className="col-sm-6 col-md-2 mb-3">
                    <img height={100} width={100} src={Talasani} alt="Talasani Srinivas Yadav" />
                    <div>
                        <span className="h-name br">Sri. Talasani Srinivas Yadav.</span>
                        <span className="h-designation br">
                            Minister for Animal Husbandry, <br />Fisheries and Cinematography
                        </span>
                        <span className="h-department br">
                            Government of Telangana
                        </span>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3 mb-3">
                    <img height={100} width={100} src={RaviP} alt="Pittala Ravinder" />
                    <div>
                        <span className="h-name br">Sri. Pittala Ravinder</span>
                        <span className="h-designation br">
                            Chairman of Telangana State Federation,
                            <br />
                            Fisheries and Co-operative Societies
                        </span>
                        <span className="h-department br">Government of Telangana</span>
                    </div>
                </div>
                <div className="col-sm-6 col-md-2 mb-3">
                    <img height={100} width={100} src={FishLogo} alt="Fishery Department" />
                </div>
            </div>
        </div>
    )
}
export default Logos;
