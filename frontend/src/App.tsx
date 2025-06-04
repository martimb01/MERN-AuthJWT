import { Route, Routes } from 'react-router-dom'
import RegisterForm from './pages/RegisterForm'
import LandingPage from './pages/LandingPage'
import Homepage from './pages/Homepage'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/register' element={<RegisterForm />} />
      <Route path='/homepage' element={<Homepage />} />
    </Routes>
  )
}


