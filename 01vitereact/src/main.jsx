import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
      <p>hello</p>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <MyApp />
)
