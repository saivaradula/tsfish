import React from 'react';
import Logos from './logos'
import NavigationButtons from './navigation';

const Header = () => {
    return (
        <div className="header">
            <Logos />
            <div>
                <h2 className="header-text-telugu mb-3">
                    తెలంగాణ రాష్ట్ర మత్స్యకారుల సహకార సంఘాల సమాఖ్య లిమిటెడ్, హైదరాబాద్
                </h2>
                <h2 className='header-text-english'>
                    TELANGANA STATE FISHERMEN CO-OPERATIVE SOCIETIES FEDERATION LIMITED, HYDERABAD
                </h2>
            </div>
            <NavigationButtons />
        </div>
    )
}

export default Header;
// export default withRouter(Header)
