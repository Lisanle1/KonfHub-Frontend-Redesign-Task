import React from 'react'
import './TicketsCard.css'
function TicketsCard({ticketPlanDetails}) {
  return (
    <div>
          {ticketPlanDetails?.map((ele)=>(
        <div className='ticket_card' key={ele.id}>
          <p className='ticket_plan_type'>{ele.ticket_plan_type}</p>
          <p className='ticket_description'>{ele.ticket_description}</p>
          <a className='ticket_venue' href='#'><img width="14" height="14" src="https://img.icons8.com/ios-filled/50/228BE6/marker.png" alt="marker"/> {ele.ticket_venue}</a>
          <p className='ticket_additional'>{ele.ticket_additional_heading}</p>
          <strong className='ticket_timestamp'>{ele.ticket_timestamp}</strong>
          <div className='ticket_plan'>
            <span className='ticket_type'>{ele.ticket_type}</span>
            <button className='ticket_register_btn'>{ele.button_type}</button>
          </div>
        </div>)) }
    </div>
  )
}

export default TicketsCard