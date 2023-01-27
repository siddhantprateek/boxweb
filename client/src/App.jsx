import React from 'react';
import { Home, Discover, Market, Nomatch, Collections, MarketplaceId } from './pages';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='discover' element={<Discover />} />
        <Route path='marketplace'>
          <Route path='home' element={<Market />} />
          <Route path=':marketId' element={<MarketplaceId />} />
        </Route>
        <Route path='collections'>
          <Route index element={<Collections/>} />
          <Route path='hape_prime' element={<Market/>}/>
        </Route>
        <Route path='/*' element={<Nomatch/>} />
      </Routes>
    </div>
  );
}

export default App;
