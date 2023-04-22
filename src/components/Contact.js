import React from 'react'

export const Contact = () => {
  return (
    <div className='page'>
        <h1 className='heading'>Contacto</h1>
        <form className='contact' action='mailto:htenak1305@gmail.com'>
          <input type="text" placeholder='Nombre'/>
          <input type="email" placeholder='Correo'/>
          <textarea placeholder='Describe tu motivo de contacto'></textarea>
          <button>Enviar</button>
        </form>
    </div>
  )
}
