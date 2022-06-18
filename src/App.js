import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProject from './components/AddProject/AddProject';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import ProjectList from './components/Project/ProjectList';
import Login from './components/Register/Login';
import RequireAuth from './components/Register/RequireAuth';
import Signup from './components/Register/Signup';
import Footer from './components/Shared/Footer';
import Header from './components/Shared/Header';
import NotFound from './components/Shared/NotFound';
import { Toaster } from 'react-hot-toast';
import ProjectOne from './components/Project/ProjectOne';
import UpdateProfile from './components/Profile/UpdateProfile';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/profile' element={<RequireAuth><Profile></Profile></RequireAuth>}></Route>
        <Route path='/addproject' element={<RequireAuth><AddProject></AddProject></RequireAuth>}></Route>
        <Route path='/projectlist' element={<ProjectList></ProjectList>}>
        
        </Route>
        <Route path='projectone/:id' element={<ProjectOne></ProjectOne>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
       <Route path='updateprofile' element={<UpdateProfile></UpdateProfile>}></Route>


        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>
      <div className='sticky-footer '>
     
       <Footer></Footer>
     </div>
     <Toaster></Toaster>
    </div>
  );
}

export default App;
