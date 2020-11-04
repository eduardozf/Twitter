import React from 'react';
import { Link } from 'react-router-dom';

import { FaTwitter } from 'react-icons/fa';
import { Container } from './styles';

const NotFound: React.FC = () => {
  return (
    <Container>
      <div className="topBar">
        <FaTwitter />
      </div>
      <div className="content">
        <h1>Sorry, that page doesn’t exist!</h1>
        <Link to='/'>return to the homepage.</Link>
      </div>
    </Container>
  );
}

export default NotFound;
