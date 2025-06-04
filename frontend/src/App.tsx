import { Route, Routes } from 'react-router-dom'
import RegisterForm from './pages/RegisterForm.tsx'
import LandingPage from './pages/LandingPage.tsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/register' element={<RegisterForm />} /> 
    </Routes>
  )
}

export default App
