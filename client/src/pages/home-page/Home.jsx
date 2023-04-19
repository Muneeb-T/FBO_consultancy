import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './Home.css';
import Hero from '../../components/hero/Hero';

const Home = () => {
  return (
    <div>
      <Navbar activeId={0} />
      <Hero />
    </div>
  );
};

export default Home;
