// import logo from './logo.svg';
import './PublicApp.css';
// import Header from './components/heading/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import DATA from './DATA'
import { useEffect, useState } from 'react';

import { BrowserRouter } from 'react-router-dom';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(DATA)
  }, [])


  return (
    <div className='container'>
      <Content data={data}></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
