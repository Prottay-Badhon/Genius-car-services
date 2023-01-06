import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import {Routes,Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer/Footer';
import Services from './Pages/Home/Services/Services';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Pages/Shared/NotFound';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
function App() {
  return (   
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>

        <Route path="/about" element={<About></About>}></Route>
        <Route path="/service-detail/:serviceId" element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Registration></Registration>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
