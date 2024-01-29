import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import Thanks from './pages/Thanks.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<App />}
        />
        <Route
          path='/thanks'
          element={<Thanks />}
        />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
)
