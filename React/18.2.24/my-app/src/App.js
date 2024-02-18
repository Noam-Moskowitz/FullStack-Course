import './App.css';
import PageHeader from './components/PageHeader';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <PageHeader title='This is the new title sent through "props"' />
      <Home text='this is the main area of our app' />
    App component works!
    </div>
  );
}

export default App;
