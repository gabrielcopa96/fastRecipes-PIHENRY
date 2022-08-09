import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import axios from 'axios';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();


axios.defaults.baseURL = 'https://fastfoods2.herokuapp.com/' || 'http://localhost:3001';

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </QueryClientProvider>,
  document.getElementById('root')
);
