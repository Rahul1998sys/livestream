import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Room from './pages/Room/Room'
import Streaming from './pages/Room/Streaming'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/live-stream' element= {<Room />} />
        <Route path='/live-stream/stream/:userName' element= {<Streaming />} />
      </Routes>
    </>
  )
}

export default App
