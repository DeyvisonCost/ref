import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import Home from '@/presentation/views/Home'
import Analytics from '@/tracking/Analytics'
import './global.css'
import './styles/tailwind.css'

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element not found in index.html')
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <Analytics />
      <Home />
    </BrowserRouter>
  </StrictMode>
)
