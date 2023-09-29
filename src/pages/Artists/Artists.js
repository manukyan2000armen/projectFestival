
import React, { useRef } from 'react';
import st from './style.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function Artists() {

  const madonaRef = useRef()
  const rihanaRef = useRef()
  const brunoRef = useRef()
  const reincRef = useRef()
  const ireqRef = useRef()
  const nemraRef = useRef()

  const scrollHandler = (elmRef) => {
    const yOffset = window.scrollY;
    const targetY = elmRef.current.getBoundingClientRect().bottom + yOffset + 300 ;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
    
  };
  return (
    <>
      <div className={st.textH1}>
        <h1>Meet Artists</h1>
      </div>
      <Carousel  showThumbs={false}>
        <div className={st.myArtists}>
          <div className={st.forArtistPic} ref={madonaRef} onClick={() => scrollHandler(madonaRef)} >
          <div className={st.forHover}>
         <div className={st.forHoverTop}>
          <div>
            <h3>Name:</h3>
            <h3>Birthdate:</h3>
             <h3>Music:</h3>
          </div>
          <div> 
               <p>Madona</p>
              <p>August 16, 1958</p>
              <p>Pop, R&B</p>
           </div>
           </div>
           <div className={st.forHoverBottom}>
          
             <h3>Youtube Channel:</h3>
             <a href='https://www.youtube.com/channel/UC81VD6eeuLLSfyY_D-N8sVw' target='_blank'>Madona Official</a>
          
           </div>
         </div>
          </div>
          <div className={st.div2}>
            <div className={st.forArtistPic2} ref={rihanaRef} onClick={() => scrollHandler(rihanaRef)}>
            <div className={st.forHover2}>
           <div className={st.forHoverTop2}>
           <div>
             <h3>Name:</h3>
             <h3>Birthdate:</h3>
             <h3>Music:</h3>
           </div>
           <div>
             <p>Rihana</p>
             <p>February 20, 1988</p>
             <p>Country</p>
           </div>
           </div>
           <div className={st.forHoverBottom}>
          
             <h3>Youtube Channel:</h3>
             <a href='https://www.youtube.com/channel/UCcgqSM4YEo5vVQpqwN-MaNw' target='_blank'>Rihana Official</a>
          
           </div>
         </div>
            </div>
            <div className={st.forArtistPic3} ref={brunoRef} onClick={() => scrollHandler(brunoRef)}>
            <div className={st.forHover3}>
           <div className={st.forHoverTop3}>
           <div>
             <h3>Name:</h3>
             <h3>Birthdate:</h3>
            <h3>Music:</h3>
           </div>
           <div>
             <p>Bruno Mars</p>
             <p>October 8, 1985</p>
             <p>Pop</p>
           </div>
           </div>
           <div className={st.forHoverBottom}>
          
             <h3>Youtube Channel:</h3>
            <a href='https://www.youtube.com/channel/UCoUM-UJ7rirJYP8CQ0EIaHA' target='_blank'>Bruno Official</a>
          
          </div>
         </div>
            </div>
          </div>
        </div>
        {/* erkrord eji */}
        
        <div className={st.myArtists}>
        
          <div className={st.forArtistPic0} ref={reincRef} onClick={() => scrollHandler(reincRef)}>
          <div className={st.forHover}>
         <div className={st.forHoverTop}>
          <div>
            <h3>Name:</h3>
            <h3>Birthdate:</h3>
             <h3>Music:</h3>
          </div>
          <div> 
               <p>Reincarnation</p>
              <p>July 12, 1986</p>
              <p>Reggae</p>
           </div>
           </div>
           <div className={st.forHoverBottom}>
          
             <h3>Youtube Channel:</h3>
             <a href='https://www.youtube.com/@reincarnationorchestra' target='_blank'>Reincarnation Official</a>
          
           </div>
         </div>
          </div>
          <div className={st.div2}>
            <div className={st.forArtistPic20} ref={ireqRef} onClick={() => scrollHandler(ireqRef)}>
            <div className={st.forHover2}>
           <div className={st.forHoverTop2}>
           <div>
             <h3>Name:</h3>
             <h3>Birthdate:</h3>
             <h3>Music:</h3>
           </div>
           <div>
             <p>3:33</p>
             <p>August 3, 2015</p>
             <p>Pop,Rap</p>
           </div>
           </div>
           <div className={st.forHoverBottom}>
          
             <h3>Youtube Channel:</h3>
             <a href='https://www.youtube.com/@333yerevan' target='_blank'>3:33 Official </a>
          
           </div>
         </div>
            </div>
            <div className={st.forArtistPic30} ref={nemraRef} onClick={() => scrollHandler(nemraRef)}>
            <div className={st.forHover3}>
           <div className={st.forHoverTop3}>
           <div>
             <h3>Name:</h3>
             <h3>Birthdate:</h3>
            <h3>Music:</h3>
           </div>
           <div>
             <p>Nemra</p>
             <p> February 17, 2012</p>
             <p>Rock</p>
           </div>
           </div>
           <div className={st.forHoverBottom}>
          
             <h3>Youtube Channel:</h3>
            <a href='https://www.youtube.com/@Nemraband' target='_blank'>Nemra Official</a>
          
          </div>
         </div>
            </div>
          </div>
        </div>
      
      </Carousel>

    </>
  );
}

export default Artists;

