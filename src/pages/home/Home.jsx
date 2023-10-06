import React from 'react'
import './home.css';
import Announcement from '../../components/announcement/Announcement';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Brand from '../../components/brand/Brand';
import Items from '../../components/items/Items';
import Goals from '../../components/goals/Goals';
import Join from '../../components/join/Join';
import Faq from '../../components/faq/Faq';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <>
        <Announcement />
        <Navbar />
        <Header />
        <Brand />
        <Items />
        <Goals />
        <Join />
        <Faq />
        <Footer />
    </>
  )
}

export default Home