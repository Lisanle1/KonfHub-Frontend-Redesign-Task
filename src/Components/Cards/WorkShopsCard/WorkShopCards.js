import React from 'react'
import './WorkShopCards.css'
function WorkShopCards({workshopDetails}) {
  return (
    <div className='workshops_container'>
      {workshopDetails?.map((workshop) => (
        <div className='workshop_card' key={workshop.id}>
          <div style={{display:"flex", flexDirection:"column",justifyContent:"flex-start",gap:"10px"}}>
            <img className='workshop_topic_img_url' src={workshop.workshop_topic_img_url} alt={workshop.workshop_topic_img_url} />
            <span className='workshop_description'>{workshop.workshop_description}</span>
            </div>
          <p className='workshop_timestamp'><img width="18" height="18" src="https://img.icons8.com/material-rounded/24/calendar--v1.png" alt="calendar--v1"/>{workshop.workshop_timestamp}</p>
          <div className='workshop_view_sections'>
              <img width={32} height={32} style={{borderRadius:"50%"}} src={workshop.profile_url} alt="" />
              <button className='view_details_btn'>View Details</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default WorkShopCards