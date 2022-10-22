import React from 'react';
import ReactDOM from 'react-dom';
import Downline from './App';

// let widget = `<div style="margin: 100px auto; max-width: 500px;"><div class="reddit_widget" data-subreddit="javascript"></div></div>`;

let target = document.querySelector('hl_dashboard--website-visitors');
ReactDOM.render(
    <Downline />, target
);
