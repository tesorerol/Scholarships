import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import io from 'socket.io-client';
const server = "https://api.cryptoclubsignal.com/";
// const server = "http://localhost:3004";
const socket = io(server, {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "cryptoclub"
  }
});
ReactDOM.render(
  <React.StrictMode>
    <App socket={socket} />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
