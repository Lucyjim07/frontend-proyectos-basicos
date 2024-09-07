/* eslint-disable semi */
import { createRoot } from 'react-dom/client';
import App from './App';

const element = document.getElementById('app');
const root = createRoot(element);

root.render(<App />);
