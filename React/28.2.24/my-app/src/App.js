import './App.css';
import PageHeader from './components/PageHeader';
/* import Home from './components/Home'; */
import Footer from './components/Footer';
import Learning from './components/learning/Learning';


function App() {

  return (
    <div className="App">
      <PageHeader title='This is the new title sent through "props"' />
     {/*  <Home text='this is the main area of our app' /> */}
      <Footer />
      <Learning/>
      App component works!
    </div>
  );
}

export default App;
