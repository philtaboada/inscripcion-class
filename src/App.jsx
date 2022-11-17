import { useState } from 'react'
import './App.css'
import html from './assets/Html5_diseño_web-1.png'
import css from './assets/CSS.png'
import js from './assets/js.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a target="_blank">
          <img src={html} className="logo" alt="Vite logo" />
        </a>
        <a target="_blank">
          <img src={css} className="logo react" alt="React logo" />
        </a>
        <a target="_blank">
          <img src={js} className="logo js" alt="React logo" />
        </a>
      </div>
      <h1>Curso de programación web básica</h1>
      <div className="card">
        <button>
          Inscripciones abiertas
        </button>
      </div>
      <p className="read-the-docs">
      </p>
    </div>
  )
}

export default App
