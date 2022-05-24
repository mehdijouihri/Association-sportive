import React, {useState, useEffect} from 'react'
import './Navbar.css'

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav>
      <h2 id='volley'>VOLLEY</h2>
      {(toggleMenu || screenWidth > 1013) && (
      <ul className="list">
      <li className="items">Accueil</li>
      <li className="items">Infos utiles</li>
      <li className="items">Membres</li>
      <li className="items">Notre histoire</li>
      <li className="items">Contact</li>
      </ul>
      )}

<div onClick={toggleNav}  id="menuToggle" className='btn'>

    <input type="checkbox" />

    <span></span>
    <span></span>
    <span></span>

</div>

  </nav>
  )
}
