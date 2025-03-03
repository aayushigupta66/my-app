import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import linkedinLogo from './assets/linkedin.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Website coming soon.</h1>
      <h2>In the meantime, check out my LinkedIn — thanks for your patience!</h2>
      <div>
        <a href="https://www.linkedin.com/in/aayushigupta66/" target="_blank">
          <img src={linkedinLogo} className="logo" alt="Linkedin logo" />
        </a>
      </div>
    </>
  )
}

export default App
