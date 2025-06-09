import {Route,Routes,Outlet,useLocation} from 'reac-router-dom'
import Login from "./pages/Login"
import Dashboard from './pages/Dashboard'
import TaskDetails from './pages/TaskDetails'
import Tasks from './pages/Tasks'
import Trash from './pages/Trash'
import Users from './pages/Users'
function App() {
  return(
    <Routes>
      <Route path="/log-in" element={<Login/>}/>
      <Route path="Dashboard" element={<Dashboard/>}/>
      <Route path="/tasks" element={<Tasks/>}/>
      <Route path="/completed/:status" element={<Tasks/>}/>
      <Route path="/in-progress/:status" element={<Tasks/>}/>
      <Route path="/todos/:status" element={<Tasks/>}/>
      <Route path="/team" element={<Users/>}/>
      <Route path="/trashed" element={<Trash/>}/>
      <Route path="/task:id" element={<TaskDetails/>}/>
    </Routes>
  )
}

export default App
