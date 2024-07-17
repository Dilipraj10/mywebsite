import logo from './logo.svg';
import './App.css';
import Register from './Components/General/Register';
import LoginUsers from './Components/user/LoginUsers';
import Admin from './Components/admin/Admin';
import Main from './Components/General/Main'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminForgotPassword from './Components/admin/AdminForgotPassword';
import UserForgotPassword from './Components/user/UserForgotPassword';
import FeedBack from './Components/General/FeedBack';
import Home from './Components/General/Home';
import Store from './Components/General/Stores'
import PcGames from './Components/General/PcGames';
import MobileGamse from './Components/General/MobileGamse';
import AdminDash from './Components/admin/AdminDash';
import ManageGames from './Components/admin/ManageGames';
import ManageUser from './Components/admin/ManageUser';
import ManageDownload from './Components/admin/ManageDownload';
import ManageFeedback from './Components/admin/ManageFeedback';


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
        <Route path='/pcgames' element={<PcGames/>}/>
        <Route path='/mobilegames' element={<MobileGamse/>}/>
        <Route path='/admindash' element={<AdminDash/>}/>
        <Route path='/managegame' element={<ManageGames/>}/>
        <Route path='/manageuser' element={<ManageUser/>}/>
        <Route path='/managedownload' element={<ManageDownload/>}/>
        <Route path='/managefeedback' element={<ManageFeedback/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
