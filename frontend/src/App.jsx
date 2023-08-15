import './App.css'
import Login from './views/login'
import Register from './views/register'
import Dashboard from './views/dashboard'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <Routes>
      <Route path='/login' Component={Login} />
      <Route path='/register' Component={Register} />
      <Route path='/dashboard' Component={Dashboard} />
    </Routes>
  )
}

export default App
