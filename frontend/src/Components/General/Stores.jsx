import React from 'react'
import NavbarUi from './Navbar'
import Footer from './Footer'
import GameCards from './GameCards'

export default function Stores() {
  return (
    <div>
        <>
        <NavbarUi/>
        <GameCards/>
        <Footer/>
        </>
    </div>
  )
}
