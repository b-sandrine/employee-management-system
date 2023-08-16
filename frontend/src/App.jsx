import './App.css'
import Login from './views/login'
import Register from './views/register'
import Dashboard from './views/dashboard'
import { Route, Routes } from 'react-router'
import Home from './pages/home'
import Analytics from './pages/analytics'
import Tasks from './pages/tasks'
import Employees from './pages/employees'
import Faqs from './pages/faqs'
import Settings from './pages/settings'

function App() {
  return (
    <Routes>
      <Route path='/login' Component={Login} />
      <Route path='/register' Component={Register} />
      <Route path='/dashboard/' Component={Dashboard}>
        <Route path='' Component={Home} />
        <Route path="employees" Component={Employees} />
        <Route path='tasks' Component={Tasks} />
        <Route path='analytics' Component={Analytics} />
        <Route path="settings" Component={Settings} />
        <Route path="faqs" Component={Faqs} />
      </Route>
    </Routes>
  )
}

export default App
