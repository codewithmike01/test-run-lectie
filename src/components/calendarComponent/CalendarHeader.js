import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarHeaderContainer } from './styles/calendar.Styles';
import { getTodayDate } from '../../util';
import Profile from '../../Assets/Images/profile.jpg';
import Setting from '../../Assets/Images/setting.svg';
import Clock from '../utils/utilComponents/Clock';
import LogoMobile from '../../Assets/Images/logo-small.svg';
import MobileMenu from '../../Assets/Images/menu.svg';
import WalletLogo from '../../Assets/Images/wallet-logo.svg';
import ProfileLogo from '../../Assets/Images/profile-logo.svg';
import SettingLogo from '../../Assets/Images/setting-logo.svg';
import ChatLogo from '../../Assets/Images/chat-logo.svg';
import QuestionLogo from '../../Assets/Images/question-logo.svg';
import { FiX } from 'react-icons/fi';

const CalendarHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <CalendarHeaderContainer className="flex j-btw a-center" show={showMenu}>
      <div className="left-side-header flex a-center">
        <h5>Studio</h5>
        <div className="mobile-menu">
          <img
            src={MobileMenu}
            alt="menu"
            className="menu"
            typeof="button"
            onClick={() => setShowMenu(true)}
          />
          <FiX
            className="cancel"
            typeof="button"
            onClick={() => setShowMenu(false)}
          />
          <img src={LogoMobile} alt="small logo" />
        </div>
      </div>

      <div className="date-time">
        <p>Date: {getTodayDate()}</p>
        <Clock />
      </div>

      <div className="right-side-header flex a-center">
        <div className="icon">
          <img src={Setting} alt="Setting icon" />
        </div>
        <div className="profile-image">
          <img src={Profile} alt="Profile " />
        </div>
      </div>

      <div className="nav-mobile">
        <div className="links">
          <Link to="#" onClick={() => closeMenu()}>
            <img src={WalletLogo} alt="wallet logo" />
          </Link>
          <Link to="#" onClick={() => closeMenu()}>
            <img src={ProfileLogo} alt="wallet logo" />
          </Link>
          <Link to="#" onClick={() => closeMenu()}>
            <img src={SettingLogo} alt="wallet logo" />
          </Link>
          <Link to="#" onClick={() => closeMenu()}>
            <img src={ChatLogo} alt="wallet logo" />
          </Link>
          <Link to="#" onClick={() => closeMenu()}>
            <img src={QuestionLogo} alt="wallet logo" />
          </Link>
        </div>
      </div>
    </CalendarHeaderContainer>
  );
};

export default CalendarHeader;
