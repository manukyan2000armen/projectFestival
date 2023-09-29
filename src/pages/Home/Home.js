import React from 'react'
import st from './style.module.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import {faInstagram  } from '@fortawesome/free-brands-svg-icons'
import { faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons'


function Home() {
  return <>
    <div className={st.myHome}>
    <video className={st.backgroundVideo} autoPlay loop muted >
<source src="https://templatemo.com/templates/templatemo_583_festava_live/video/pexels-2022395.mp4" type="video/mp4"/>
</video>
      
      <p>FESTAVA LIVE PRESENTS</p>
      <h1>Night Live 2023</h1>
      {/* <button className={st.btnMyHome} >Let's begin</button> */}

      <div className={st.myHome2}>
        <div>
            <h3><FontAwesomeIcon icon={faClock} color='red'/> 10 - 12th, Dec 2023</h3>
        </div>
        <div>
            <h3><FontAwesomeIcon icon={faLocationDot}  color='red'/> National Center, United States</h3>
        </div>
        <div className={st.icons}>
            <h4>Share:</h4>
            <div className={st.iconF}>
            <FontAwesomeIcon icon={faFacebookF} color='white'/>
            </div>
            <div className={st.iconT}>
            <FontAwesomeIcon icon={faTwitter} color='white'/>
            </div>
            <div className={st.iconI}>
            <FontAwesomeIcon icon={faInstagram} color='white'/>
            </div>

        </div>
      </div>
    </div>
    </>
}

export default Home
