import './App.css'
import { Route, Routes } from 'react-router-dom'
import { PersonalitiesList } from './components/PersonalitiesList'
import Home from './pages/Home'
import Personality from './pages/Personality'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nordeste' element={<PersonalitiesList />} />
        <Route path='/personality/:id' element={<Personality />} />
      </Routes>
    </div>
  )
}

export default App
