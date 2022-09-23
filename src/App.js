import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import DogsPage from './Components/Dogs/DogsPage';
import Cart from './Components/Cart/Cart';
import NavBar from './NavBar/NavBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {CartContext} from './Contexts/CartContext';

const App = () => {
  const [allDogs, setAllDogs] = useState([]);
  const [myCart, addToCart] = useState([]);
  const [total, setTotal] = useState(0);

  //Tham số [] phía sau là để truyền vào những biến Changed thì sẽ chạy lại hàm này, ví dụ [dog, count]
  //Nếu để [] thì chỉ chạy 1 lần lúc render
  useEffect(() => {

    async function getData(){
      const res = await axios.get('/v1/dogs');
      return res;
    }

    getData().then((res)=>{
      console.log('>>Check res', res);
      setAllDogs(res.data);
    });

    getData().catch((err) => {console.log("Server API error");})
  }, [])


  return (
    <>
    <CartContext.Provider value={{myCart,addToCart, total, setTotal}}>
      <Router>
        <div className='nav-container'>
          <NavBar/>
        </div>
        <div className='page-container'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/dogs' element={<DogsPage allDogs={allDogs}/>} />
            <Route path='/cart' element={<Cart/>} />
          </Routes>
        </div>
      </Router>
    </CartContext.Provider>
    </>
  );
}

export default App;
