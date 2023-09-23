import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import Footer from './components/Footer'
// import '../src/css/styles.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
)
