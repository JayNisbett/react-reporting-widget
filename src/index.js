import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// let widget = `<div style="margin: 100px auto; max-width: 500px;"><div class="reddit_widget" data-subreddit="javascript"></div></div>`;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('dashboard')
);
