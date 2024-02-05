import React from 'react';
import { createRoot } from 'react-dom/client';

import './styles/style.css';
import App from './components/App.jsx';
// import App from './components/card/navigation/Navigation.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
// root.render(<App />);
root.render(<App />);
