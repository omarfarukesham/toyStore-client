
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllInventories from './Components/AllInventories/AllInventories';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/Contact';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import StockManage from './Components/Inventory/StockManage/StockManage';
import NotFound from './Components/NotFound/NotFound';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Login from './Components/Security/Login/Login';
import Register from './Components/Security/Register/Register';
import Wishlist from './Components/Wishlist/Wishlist';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path="/inventory/:productId" element={
          <RequireAuth>
            <StockManage></StockManage>
          </RequireAuth>
        }></Route>
      <Route path="/allInventories" element={
          <RequireAuth>
            <AllInventories></AllInventories>
          </RequireAuth>
        }></Route>
      <Route path="/wishlist" element={
          <RequireAuth>
            <Wishlist></Wishlist>
          </RequireAuth>
        }></Route>
        
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    </div>
  );
}

export default App;
