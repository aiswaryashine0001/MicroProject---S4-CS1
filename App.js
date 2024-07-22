import React from 'react';
import Main from './components/Main';
import Footer from './components/Footer';
import imageSrc from './scms.jpg';
import image from './jyoti.jpg';
import im from './mits.jpg';
import ima from './nirmala.jpg';
import imag from './rset.jpg';
import './App.css'; // Import CSS file for styling

function App() {
  return (
    <div>
      <Main />
      <h1>Check out these colleges!</h1>
      <div className='first'>
         <img src={imageSrc} alt="Description of the image" />  
         <img src={image} alt="Description of the image" /> 
      </div>
      <div className='second'>
        <img src={im} alt="Description of the image" /> 
        <img src={ima} alt="Description of the image" /> 
        <img src={imag} alt="Description of the image" /> 
      </div>
      <Footer/>
    </div>

  );
}

export default App;
