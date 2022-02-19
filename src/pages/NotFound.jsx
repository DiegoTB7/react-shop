import React from 'react';
import '@styles/NotFound.scss';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-info">
        <h1>Error 404</h1>
        <h2>Página No Encontrada :(</h2>
        <button className="primary-button"><a href="/">Ir a inicio</a></button>
      </div>
    </div>
  );
}

export default NotFound;