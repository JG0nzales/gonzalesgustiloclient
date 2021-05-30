import React from "react";
import { Link } from "react-router-dom";
import bgimage from '../image/new.jpg'



const Landing = () => {
  return (
    <div className="jumbotron mt-5" style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}>
      <h1 className="text-center">Welcome to the Todo Site</h1>
      <p className="text-center">Sign Up and Start creating your todo lists</p>
      <Link to="/login" className="btn btn-danger">
        Login
      </Link>
      <Link to="/register" className="btn btn-danger ml-3">
        Register
      </Link>
    </div>
    
  );
};

export default Landing;
