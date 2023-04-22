import React from 'react'
import { works } from '../data/works';
import { Link } from 'react-router-dom';

export const WorksList = ({limit}) => {
  return (
        <section className='works'>
        {
          works.slice(0, limit).map( work => {
            return (
              <article key={work.id} className='work-item'>
                <div className='mask'>
                  <Link to={`/work/${work.id}`}>
                    <img src={`/images/${work.id}.png`} />
                  </Link>
                </div>
                <span>{work.category}</span>
                <h2><Link to={`/work/${work.id}`}>{work.name}</Link></h2>
                <h3>{work.tecnologys}</h3>
              </article>
            );
          })
        }
        </section>
  )
}
