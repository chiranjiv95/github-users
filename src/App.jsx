import './App.css'
import { Dashboard, Login, Error } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './pages/PrivateRoute';
import AuthWrapper from './pages/AuthWrapper';

function App() {

  return (
    <AuthWrapper>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={
            <PrivateRoute>
              <Dashboard/>
            </PrivateRoute>
          }/>
          <Route path='login' element={<Login/>}/>
          <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    </AuthWrapper>
  )
}

export default App
