import React from 'react';
import { Link } from 'react-router-dom';
import { WorksList } from './WorksList';

export const Home = () => {
  return (
    <div className='home'>
        <h1>
          Hola, mi nombre es <strong>Lino</strong>, y soy <strong>desarrollador web</strong>.
          Mi enfoque es crear soluciones personalizadas, intuitivas y, sobre todo, funcionales.
        </h1>
        <h2 className='text'>
          Te ayudo a crear tu sitio o aplicación web, ¡Posicionate en internet! <Link to='/contact'>Contacta conmigo.</Link>
        </h2>
        <section className='latest-works'>
          <h2 className='heading'>Algunos de mis proyectos</h2>
          <p>Esto son algunos de los proyectos de desarrollo web que he realizado.</p>
          <WorksList limit='2'/>
        </section>
    </div>
  )
}
