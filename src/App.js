import { Outlet, Route, Routes } from 'react-router-dom';
import requests from './api/requests';
import './App.css';
import Banner from './component/Banner';
import Footer from './component/Footer';
import Nav from './component/Nav';
import Row from './component/Row';
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';


const Layout = () => {
  return(
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<MainPage />} /> 
          <Route path=":movieId" element={<DetailPage />} /> 
          <Route path="search" element={<SearchPage />} /> 

        </Route>

      </Routes>


    </div>
    
  );
}

export default App;
