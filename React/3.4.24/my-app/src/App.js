import './App.css';
import Home from './components/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FormsMain from './components/forms/FormsMain';
import Learning from './components/learning/Learning';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


function App() {


  return (
    <div className="App">

      <BrowserRouter>

        <nav className='horizontal-nav'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/learning'>Learning</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/forms'>Forms</Link></li>
          </ul>

        </nav>


        <Routes>

          <Route path='/learning' element={<Learning />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forms' element={<FormsMain />} />


        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
