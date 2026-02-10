
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Promise from './components/Promise';
import DiningByTime from './components/DiningByTime';
import Categories from './components/Categories';
import MenuPanel from './components/MenuPanel';
import ChefsPicks from './components/ChefsPicks';
import Ambience from './components/Ambience';
import CustomerReviews from './components/CustomerReviews';
import Location from './components/Location';
import About from './components/About';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      <Hero />
      <Promise />
      <DiningByTime />
      <Categories />
      <MenuPanel />
      <ChefsPicks />
      <Ambience />
      <CustomerReviews />
      <About />
      <Location />
      <Footer />
      
      {/* Scroll-to-top anchor */}
      <div id="book" className="sr-only">Booking Section Anchor</div>
    </main>
  );
};

export default App;
