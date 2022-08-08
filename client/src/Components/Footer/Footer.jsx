import React from 'react'
// import './footer.css'
import "../components.css"
import Hooh from '../../assets/flying-ho-oh.gif'
import Lugia from "../../assets/flying-lugia.gif"

import '../../App.js'

function Footer () {
  return (
    <footer className="footer bg-1 container-h">

      <img alt="flying lugia" className='footer-img2' src={Lugia} />

      <div>
        <div className="footer-t"> Created By Best Team! © BestTeam </div>
        <div className="footer-t">Please don't copy</div>
      </div>
        

        <img alt="Ho-oh flying" className="footer-img" src={Hooh} />

        
    </footer>
  )
};

export default Footer