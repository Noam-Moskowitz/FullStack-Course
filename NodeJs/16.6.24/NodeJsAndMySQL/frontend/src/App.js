import './App.css';
import {Routes, Route, BrowserRouter, Router}  from 'react-router-dom'
import Home from './components/Home.Jsx';
import Students from './components/Students';
import Nav from './components/Nav';
import Average from './components/Average';
import AverageCity from './components/AverageCity';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>

            <Routes>
              <Route path='/students' element={<Students/>} />
              <Route path='/' element={<p>Welcome</p>}/>
              <Route path='/average' element={<Average/>}/>
              <Route path='/cities' element={<AverageCity/>}/>
            </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
