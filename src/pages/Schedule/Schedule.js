import React, { useEffect, useRef, useState } from 'react'
import st from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLocationDot } from '@fortawesome/free-solid-svg-icons'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';




function Schedule() {

  const scheduleRef = useRef()
  

  const scrollHandler = (elmRef) => {
    const yOffset = window.scrollY;
    const targetY = elmRef.current.getBoundingClientRect().bottom + yOffset + 90 ;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
   
  };
    

  

  return <>
  
   
 
      <Carousel>
  <div className={st.mySchedule}>
  <h1>Event Schedule</h1>
       <table className={st.myTable}>
        <thead>
          <tr className={st.myTableTr}>
            <th>Date</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
          </tr>
        </thead>
        <tbody>
          <tr className={st.myTableTr2}>
            <td className={st.tdMyDay} >Day 1 </td>
            <td className={st.myTableTrForPic} onClick={() => scrollHandler(scheduleRef)} ref={scheduleRef} style={{cursor:'pointer'}}>
              <h1>Pop Night</h1>
              <p>5:00 - 7:00 PM</p>
              <p>By Adele</p>
              <p><FontAwesomeIcon icon={faLocationDot}  color='red'/>Erevan</p>
            </td>
            <td className={st.tdDatark}>

            </td>
            <td className={st.myTableTrForPic2} onClick={() => scrollHandler(scheduleRef)} ref={scheduleRef} style={{cursor:'pointer'}}>
              <h1>Rock & Roll</h1>
              <p>7:00 - 11:00 PM</p>
              <p>By Rihana</p>
              <p><FontAwesomeIcon icon={faLocationDot}  color='red'/>Erevan: Karen Demirtchian Sport/Concert Complex</p>
            </td>

          </tr>

          <tr className={st.myTableTr3}>
            <td className={st.tdMyDay2}>Day 2</td>
            <td className={st.tdDatark2}>
              
            </td>
            <td className={st.myTableTrForPic3} onClick={() => scrollHandler(scheduleRef)} ref={scheduleRef} style={{cursor:'pointer'}}>
              <h1>DJ Night</h1>
              <p>6:30 - 9:30 PM</p>
              <p>By Rihana</p>
              <p><FontAwesomeIcon icon={faLocationDot}  color='red'/>Vanadzor</p>
            </td>
            <td className={st.tdDatark22}>

            </td>
          </tr>

          <tr className={st.myTableTr4} onClick={() => scrollHandler(scheduleRef)} ref={scheduleRef} style={{cursor:'pointer'}}>
            <td className={st.tdMyDay3}>Day 3</td>
            <td className={st.myTableTrForPic4}>
              <h1>Country Music</h1>
              <p>4:30 - 7:30 PM</p>
              <p>By Rihana</p>
              <p><FontAwesomeIcon icon={faLocationDot}  color='red'/>Gyumri</p>

            </td>
            <td className={st.tdDatark3}>

            </td>
            <td className={st.myTableTrForPic5} onClick={() => scrollHandler(scheduleRef)} ref={scheduleRef} style={{cursor:'pointer'}}>
              <h1>Free Styles</h1>
              <p>6:00 - 10:00 PM</p>
              <p>By Members</p>
              <p><FontAwesomeIcon icon={faLocationDot}  color='red'/>Erevan: Republic Square</p>
            </td>
          </tr>
        </tbody>
       </table>
    </div>
 
  <div className={st.mySchedule}>
  <h1>Event Schedule</h1>
    <table className={st.myTable}>
     <thead>
       <tr className={st.myTableTr} >
         <th>Date</th>
         <th>Monday</th>
         <th>Saturday</th>
         <th>Sunday</th>
       </tr>
     </thead>
     <tbody>
       <tr className={st.myTableTr2}>
         <td className={st.tdMyDay}>Day 4 </td>
         <td className={st.myTableTrForPic0} onClick={() => scrollHandler(scheduleRef)} ref={scheduleRef} style={{cursor:'pointer'}}>
           <h1>Pop Night</h1>
           <p>20:00 - 24:00 PM</p>
           <p>By Reincarnation</p>
           <p><FontAwesomeIcon icon={faLocationDot}  color='red'/>Erevan</p>
         </td>
         <td className={st.tdDatark}>

         </td>
         <td className={st.myTableTrForPic20} onClick={() => scrollHandler(scheduleRef)} ref={scheduleRef} style={{cursor:'pointer'}}>
           <h1>Armenian Rap</h1>
           <p>14:00 - 17:00 PM</p>
           <p>By 3:33</p>
           <p><FontAwesomeIcon icon={faLocationDot}  color='red'/>Erevan: Republic Square</p>
         </td>

       </tr>

       <tr className={st.myTableTr3}>
         <td className={st.tdMyDay2}>Day 5</td>
         <td className={st.tdDatark2 }>
           
         </td>
         <td className={st.myTableTrForPic3} onClick={() => scrollHandler(scheduleRef)} ref={scheduleRef} style={{cursor:'pointer'}}>
           <h1>DJ Night</h1>
           <p>6:30 - 9:30 PM</p>
           <p>By DJ Serjo</p>
           <p><FontAwesomeIcon icon={faLocationDot}  color='red'/>Gyumri</p>
         </td>
         <td className={st.tdDatark22}>

         </td>
       </tr>

       <tr className={st.myTableTr4}>
         <td className={st.tdMyDay3}>Day 6</td>
         <td className={st.myTableTrForPic40} onClick={() => scrollHandler(scheduleRef)} ref={scheduleRef} style={{cursor:'pointer'}}>
           <h1>Rock</h1>
           <p>4:30 - 7:30 PM</p>
           <p>By Nemra</p>
           <p><FontAwesomeIcon icon={faLocationDot}  color='red'/>Erevan</p>

         </td>
         <td className={st.tdDatark3}>

         </td>
         <td className={st.myTableTrForPic5} onClick={() => scrollHandler(scheduleRef)} ref={scheduleRef} style={{cursor:'pointer'}}>
           <h1>Free Styles</h1>
           <p>22:00 - 24:00 PM</p>
           <p>Armeinan Stars</p>
           <p><FontAwesomeIcon icon={faLocationDot}  color='red'/>Erevan: Republic Square</p>
         </td>
       </tr>
     </tbody>
    </table>
 </div>
 </Carousel>
 
    </>
}

export default Schedule





