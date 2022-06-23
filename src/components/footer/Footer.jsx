import React from 'react'
import footerlogo from '../../img/288665407_560608222236955_5857487041979555298_n.png'
import FooterCol from './FooterCol'
import "./footer.css"


const Footer = () => {
  return (
    
    <div className="footer">
          <div className="container">
            <div className="footer_col1">
               <img src={footerlogo} alt="" />
               <p> <p> Our design team is a small design studio within a large software company that can assist you in quickly and easily creating an engaging product.</p></p>
            </div>
            <div className="footer_col2">
                <FooterCol/>
            </div>
            <div className="footer_col3"></div>
            <div className="footer_col4"></div>
        </div>
    </div>
  )
}

export default Footer