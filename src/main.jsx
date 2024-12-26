import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import DataContex from './Context/DataContex.jsx'
import BasketContext from './Context/BasketContext.jsx'

createRoot(document.getElementById('root')).render(
  <DataContex>
    <BrowserRouter>
      <BasketContext>
        <App />
      </BasketContext>
    </BrowserRouter>
  </DataContex>
)
