import KCR from '../../assets/images/KCR.jpg';
import TSlogo from '../../assets/images/TSlogo.png';
import FishLogo from '../../assets/images/Fisheries_Dept_logo.png';
import Talasani from '../../assets/images/Talasani.png'
const Logos = () => {
    return (
        <div className="mb-4 mt-2">
            <div className="row col-md-12">
                <div className="col-md-2">&nbsp;</div>
                <div className="col-md-2">
                    <div className="row">
                        <div className="col-md-12">
                            <img height={100} width={100} src={KCR} alt="KCR" />
                        </div>
                    </div>
                    <div className="row">
                        <span className="h-name">Sri. K. Chandrasekhar Rao.</span>
                        <span className="h-designation">Hon'ble Chief Minister</span>
                        <span className="h-department">
                            Government of Telangana
                        </span>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="row">
                        <div className="col-md-12">
                            <img height={100} width={100} src={TSlogo} alt="Telangana Logo" />
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="row">
                        <div className="col-md-12">
                            <img height={100} width={100} src={FishLogo} alt="Fishery Department" />
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="row">
                        <div className="col-md-12">
                            <img height={100} width={100} src={Talasani} alt="Talasani Srinivas Yadav" />
                        </div>
                    </div>
                    <div className="row">
                        <span className="h-name">Sri. Talasani Srinivas Yadav.</span>
                        <span className="h-designation">
                            Minister for Animal Husbandry, <br />Fisheries and Cinematography
                        </span>
                        <span className="h-department">
                            Government of Telangana
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Logos;
