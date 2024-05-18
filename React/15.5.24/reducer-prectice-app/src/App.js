import './App.css';
import NewProduct from './components/NewProduct';
import ProductDetails from './components/ProductDetails';
import ProductGallery from './components/ProductGallery';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UpdateProduct from './components/UpdateProduct';

function App() {


  return (
    <div className="flex flex-col">
      <header className='bg-gray-800 w-full h-12 text-white'>

      </header>

      <BrowserRouter>

        <Routes>
          <Route path='/new_product' element={<NewProduct/>}/>
          <Route path='/update_product/:product_id' element={<UpdateProduct/>}/>
          <Route path='products/:product_id' element={<ProductDetails/>} />
          <Route path='/' element={<ProductGallery/>} />
        </Routes>

      </BrowserRouter>


      
    </div>
  );
}

export default App;
