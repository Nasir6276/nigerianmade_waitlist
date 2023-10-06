import React from 'react';
import ReactDOM from 'react-dom/client';
// import Home from './pages/home/Home';
// import BuySell from './pages/buysell/BuySell';
// import Buy from './pages/buy/Buy';
// import Sell from './pages/sell/Sell';
// import Details from './pages/details/Detail';
// import Thanks from './pages/thanks/Thanks';
// import BuyDetail from './pages/buydetail/BuyDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Upcoming from './pages/upcoming/Upcoming';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Upcoming />} /> 
        {/* <Route index element={<Home />} /> 
        <Route path='/home' element={<Home />} />      
        <Route path='/buysell' element={<BuySell />} />      
        <Route path='/buy' element={<Buy />} />      
        <Route path='/sell' element={<Sell />} />      
        <Route path='/sellDetail' element={<Details />} />      
        <Route path='/buyDetail' element={<BuyDetail />} />      
        <Route path='/thanks' element={<Thanks />} />       */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
