import React from 'react';
import { createRoot } from 'react-dom/client';

import './styles/style.css';
import App from './components/App.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);
