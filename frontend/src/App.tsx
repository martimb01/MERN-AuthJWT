import { Route, Routes } from 'react-router-dom'
import RegisterForm from './pages/RegisterForm'
import LandingPage from './pages/LandingPage'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/register' element={<RegisterForm />} /> 
    </Routes>
  )
}


