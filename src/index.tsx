import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import '@unocss/reset/tailwind.css'
import './index.css'
import 'virtual:uno.css'

const root = ReactDOM.createRoot(
  document.getElementById('app') as HTMLElement,
)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
