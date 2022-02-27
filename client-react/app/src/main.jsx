import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter , Routes, Route} from 'react-router-dom'

import Login from "./routes/Login.jsx"
import Register from "./routes/Register.jsx"
import NotFound from "./routes/NotFound.jsx"





ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element = {<NotFound />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
