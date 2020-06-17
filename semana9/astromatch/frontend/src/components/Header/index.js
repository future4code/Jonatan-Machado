import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdHeartHalf } from 'react-icons/io';

import logo from '../../assets/logo.svg';
// import { Container } from './styles';

function Header() {
  return (
    <>
      <Link to="/">
        <img src={logo} alt="AstroMatch" />
      </Link>
      <Link to="/list">
        <IoMdHeartHalf size={50} color={'#df4723'} />
      </Link>
    </>
  );
}

export default Header;
