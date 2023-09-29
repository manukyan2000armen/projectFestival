import React from 'react'
import st from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faFacebookF, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import {faInstagram  } from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return <>
    <div className={st.myFooter}>
        <div className={st.forBigText}>
            <h1>Festava Live</h1>
        </div>

        <div className={st.icons}>
            
            
            <div className={st.iconT}>
            <FontAwesomeIcon icon={faTwitter} color='white'/>
            </div>
            <div className={st.iconA}>
            <FontAwesomeIcon icon={faApple} color='white'/>
            </div>
            <div className={st.iconI}>
            <FontAwesomeIcon icon={faInstagram} color='white'/>
            </div>
            <div className={st.iconY}>
            <FontAwesomeIcon icon={faYoutube} color='white'/>
            </div>
            <div className={st.iconP}>
            <FontAwesomeIcon icon={faPinterest} color='white'/>
            </div>

        </div>

        
       </div>
        <div className={st.forCopyrigth}>
            
            <p>Copyright © 2036 Festava Live Company</p>
        </div>
    </>
}

export default Footer
