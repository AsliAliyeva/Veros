import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import DataContex from './Context/DataContex.jsx'

createRoot(document.getElementById('root')).render(
  <DataContex>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataContex>
)
