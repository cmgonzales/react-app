import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './welcome';
import registerServiceWorker from './registerServiceWorker';




ReactDOM.render(<Welcome />, document.getElementById('root'));
registerServiceWorker();
