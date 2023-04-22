import React from 'react';
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import { Home } from '../components/Home';
import { Portfolio } from '../components/Portfolio';
import { Services } from '../components/Services';
import { Curriculum } from '../components/Curriculum';
import { Contact } from '../components/Contact';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';
import { Work } from '../components/Work';

export const MyRoutes = () => {
  return (
    <BrowserRouter>
        {/* header & navigation */}
        <HeaderNav />

        {/* content */}
        <section className='content'>
            <Routes>
                <Route path="/" element={<Navigate to='/home'/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/portfolio" element={<Portfolio/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/curriculum" element={<Curriculum/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path='work/:id' element={<Work/>} />
                <Route path='/*' element={
                  <div className='page'>
                    <h1 className='heading'>Error: 404</h1>
                  </div>
                } />
            </Routes>
        </section>



        {/* footer */}
        <Footer />
    </BrowserRouter>
  )
}
