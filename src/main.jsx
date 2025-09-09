import { createRoot } from 'react-dom/client';
import ContextProvider from "./ContextProvider";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>
)
