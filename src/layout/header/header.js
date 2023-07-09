import React from 'react';
import Logos from './logos'
import NavigationButtons from './navigation';

const Header = () => {
    return (
        <div className="header">
            <div className="row col-md-12">
                <Logos />
            </div>
            <div className="row col-md-12">
                <h2 className='header-text-telugu mb-3'>
                    తెలంగాణ రాష్ట్ర మత్స్యకారుల సహకార సంఘాల సమాఖ్య లిమిటెడ్, హైదరాబాద్
                </h2>

                <h2 className='header-text-english'>
                    TELANGANA STATE FISHERMEN COORPERTIVE SOCIETIES FEDERATION LIMITED, HYDERABAD
                </h2>
            </div>
            <div className="row col-md-12">
                <NavigationButtons />
            </div>
            <div className="row">&nbsp;</div>
        </div>
    )
}

export default Header;
// export default withRouter(Header)
