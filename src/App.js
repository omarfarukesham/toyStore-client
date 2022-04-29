
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import StockManage from './Components/Inventory/StockManage/StockManage';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Login from './Components/Security/Login/Login';
import Register from './Components/Security/Register/Register';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path="/inventory/:productId" element={
          <RequireAuth>
            <StockManage></StockManage>
          </RequireAuth>
        }></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
    </Routes>
    </div>
  );
}

export default App;
