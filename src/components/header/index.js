import React from 'react';
import LogoShipper from '../../assets/images/logoShipper.png';
import { FontAwesomeIcon } from '../constants/fontAwesome';


class Header extends React.Component {
    render() {
        return (
            <div className="headerWrap">
                <div className="headerLeft">
                    <img src={LogoShipper} alt="Logo Shipper" width="170px"/>
                </div>
                <div className="headerRight">
                    <FontAwesomeIcon icon={"phone-alt"} className="phone grey" />
                    <FontAwesomeIcon icon={"bell"} className="grey" />
                    <div className="separator"></div>
                    <p>Hello, <span>John Smith</span></p>
                    <FontAwesomeIcon icon={"user-circle"} className="userCircle grey" />
                </div>
                
            </div>
        );
    }
}

export default Header;
