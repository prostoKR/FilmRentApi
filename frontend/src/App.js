import { Routes, Route } from "react-router-dom";
import Create from './components/Create';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FilmDetails from './components/FilmDetails';
import NotFound from './components/NotFound';
import Edit from './components/Edit';
import ProducerCreate from './components/ProducerCreate';
import ProducerDetails from './components/ProducerDetails';
import ProducerAllList from "./components/ProducerAllList";
import ProducerEdit from './components/ProducerEdit';
import "bootstrap/dist/css/bootstrap.min.css";
import {useForm} from 'react-hook-form';
// import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import AuthService from "./services/auth.service";
import Login from "./components/Login";
import Register from "./components/Register";
import Homes from "./components/Homes";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";



function App() {

  


  return (

    <div className="App">
      <Navbar />
     
     
     
     
     
      <div className="content">

        <Routes>





          <Route path="/" element={<Home />}></Route>
          <Route path="/producerCreate" element={<ProducerCreate />}></Route>
          <Route path="/producerEdit/:id" element={<ProducerEdit />}></Route>
          <Route path="/producers" element={<ProducerAllList />}></Route>
          <Route path="/producers/:id" element={<ProducerDetails />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/films/:id" element={<FilmDetails />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/signin" element={<Login />}></Route>
       </Routes>
    </div>
    </div >

  );
}

export default App;
