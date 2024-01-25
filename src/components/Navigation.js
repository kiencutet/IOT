// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Board</Link>
        </li>
        <li>
          <Link to="/Infor">Infor</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
