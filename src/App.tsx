import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
// require('dotenv').config();

function App() {
  return (
    <div className="App">
      <Layout/>
    </div>
  );
}

const icon = {
  success: '<span class="material-symbols-outlined">task_alt</span>',
  danger: '<span class="material-symbols-outlined">error</span>',
  warning: '<span class="material-symbols-outlined">warning</span>',
  info: '<span class="material-symbols-outlined">info</span>',
};

const Toast = ({ type, content }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const message = content || 'Sample Message';
  const toastType = type in icon ? type : 'info';

  return (
    <div className={`toast toast-${toastType}`}>
      <div className="toast-content-wrapper">
        <div className="toast-icon" dangerouslySetInnerHTML={{ __html: icon[toastType] }} />
        <div className="toast-message">{message}</div>
        <div className="toast-progress"></div>
      </div>
    </div>
  );
};

export { App, Toast };