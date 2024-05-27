import logo from './logo.svg';
import './App.css';
import Register from './Components/Register';
import LoginUsers from './Components/LoginUsers';
import Admin from './Components/Admin';
import Main from './Components/Main'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminForgotPassword from './Components/AdminForgotPassword';
import UserForgotPassword from './Components/UserForgotPassword';
import FeedBack from './Components/FeedBack';
import Home from './Components/Home';
import Store from './Components/Stores'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/Home' element={<Home/>} />
        <Route path='/Admin' element={<Admin />}/>
        <Route path='/LoginUser' element={<LoginUsers />}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/AdminForgotPassword' element={<AdminForgotPassword/>}/>
        <Route path='/UserForgotPassword' element={<UserForgotPassword/>}/>
        <Route path='/FeedBack' element={<FeedBack/>}/>
        <Route path='/Store' element={<Store/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
