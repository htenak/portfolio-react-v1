import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { works } from '../data/works';

export const Work = () => {

    const [work, setWork] = useState({});
    const params = useParams();

    useEffect(() => {
        let workToShow = works.filter(work => {
            return work.id === params.id;
        });
        setWork(workToShow[0]);
    }, []);

  return (
    <div className='page page-work'>
        <h1>{work.name}</h1>
        <h2>{work.tecnologys}</h2>
        <p>{work.description}</p>
        <a target='_blank' href={work.url}>Ir al proyecto</a>
        <div className='mask'>
            <img src={`/images/${work.id}.png`} />
        </div>
    </div>
  )
}
