import './App.css';
import {Routes, Route, BrowserRouter, Router}  from 'react-router-dom'
import Students from './components/Students';
import Nav from './components/Nav';
import Average from './components/Average';
import AverageCity from './components/AverageCity';
import StudentGrades from './components/StudentGrades';
import { createContext, useState } from 'react';
import Loader from './components/Loader';
import DashBoard from './components/DashBoard';

export const GeneralContext=createContext()

function App() {

  const [isLoading,setIsLoading]=useState(false);

  return (
    <GeneralContext.Provider value={{setIsLoading}}>
      <div className="App">
        <BrowserRouter>
        <Nav/>
        {isLoading&&
          <Loader/>
        }
      
              <Routes>
                <Route path='/students' element={<Students/>} />
                <Route path='/' element={<DashBoard/>}/>
                <Route path='/average' element={<Average/>}/>
                <Route path='/cities' element={<AverageCity/>}/>
                <Route path='/student/:studentId/grades' element={<StudentGrades/>}/>
              </Routes>
          </BrowserRouter>
        
      </div>
    </GeneralContext.Provider>
  );
}

export default App;
