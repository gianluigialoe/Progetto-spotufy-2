import React from 'react';
import { House,Book } from 'react-bootstrap-icons';
import SearchComponent from './mysearch';
import "bootstrap/dist/css/bootstrap.min.css";





const MyNavbar = ({ img }) => {
  return (
    <div className='Navbar bg-black d-flex flex-column' style={{ height: '100vh', width: '20%', position: 'fixed', zIndex: 1001 }}>


 
  
      <div className='d-flex flex-column align-items-start'>
        <img src={img} alt="Logo" style={{ width: '55%', margin: '10%' }} />

        <div className="d-flex align-items-center">
  <House className="text-white m-3" style={{ fontSize: '24px', margin: '1px 8px 0 0' }} />
  <p className="text-white" style={{ fontSize: '18px', margin: '0' }}>
    <Link to="/" className="nav-link text-dark">home</Link>
  </p>
</div>

        <div className="d-flex align-items-center">
          <Book className="text-white m-3" style={{ fontSize: '24px', margin: '0 8px 0 0' }} />
          <p className="text-white" style={{ fontSize: '18px', margin: '0' }}>your library</p>
        </div>

        {/* Barra di ricerca */}
        <div className="d-flex flex-column align-items-start mb-2 m-3">
          <SearchComponent/>
        </div>
      </div>

      {/* Bottoni Sign In e Login */}
      <div className='d-flex flex-column align-items-start mt-auto'>
        <div className="mb-2 d-flex flex-column m-3">
          <button className="btn btn-outline-light rounded-pill m-2" style={{ width: '200%' }}>
            Sign In
          </button>

          <button className="btn btn-outline-light rounded-pill m-2" style={{ width: '200%' }}>
            Login
          </button>
        </div>
        <div className="mb-2 ms-4">
          <a href="#" className="text-white">Cookie Policy</a> |
          <a href="#" className="text-white">Privacy</a>
        </div>
      </div>
    </div>
  );
};

export default MyNavbar;