import React from 'react';
import desktop from '../../images/desktop.svg';
import './styles.css';

export const Desktop = () => {
  return (
    <div className="Home">
      <header className="Home-Page">
        <h2>Radiology Assistant</h2>
        <h5>Here to help you with your radiology exams</h5>
        <img src={desktop} alt="Radiology" />
      </header>
    </div>
  );
};
