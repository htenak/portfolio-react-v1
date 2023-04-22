import React from 'react'

export const Footer = () => {
  
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
        &copy; { year } - Lino Palomino 
    </footer>
  )
}
