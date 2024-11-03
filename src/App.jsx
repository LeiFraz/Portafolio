import { BrowserRouter } from 'react-router-dom'
import { Routes } from './routes/Routes'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter basename='/portafolio'>
        <Routes/>
      </BrowserRouter>
    </>
  )
}

export default App
