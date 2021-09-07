import React from 'react';
import logo from '../assets/logo.png';
import home from '../assets/home.svg';
import messenger from '../assets/messenger.svg';
import plus from '../assets/plus.svg';
import compass from '../assets/compass.png';
import heart from '../assets/heart.png';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const user = useSelector((state: any) => state.user);

  return (
    <div className="navigation">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="navigation-search-container">
        <input
          className="search-field"
          type="text"
          placeholder="&#xF002; Search"
          style={{ fontFamily: 'Arial, FontAwesome' }}
        />
      </div>
      <div className="navigation-icons">
        <img src={home} alt="" />
        <img src={messenger} alt="" />
        <img src={plus} alt="" />
        <img src={compass} alt="" />
        <img src={heart} alt="" />
        <div
          className="profile-picture"
          style={{
            backgroundImage: `url(${user.profilePic})`,
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            cursor: 'pointer',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Navbar;
