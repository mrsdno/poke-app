import React from 'react'
// import './footer.css'
import "../components.css"
import Hooh from '../../assets/flying-ho-oh.gif'

import '../../App.js'

function Footer () {
  return (
    <footer className="footer bg-1">
        <div className="footer-t"> Created By Best Team! © BestTeam </div>
        <div className="footer-t">Please don't copy</div>
        <img alt="Ho-oh flying" className="footer-img" src={Hooh} />

        
    </footer>
  )
};

export default Footer