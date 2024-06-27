import React, { useEffect, useState } from 'react';
import { getEventData } from '../../Services/apiService';
import Tabs from '../../Components/Tabs/Tabs';
import './EventPage.css';
import Header from '../../Components/Header/Header';

const EventPage = () => {
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const data = await getEventData();
        setEventData(data);
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    fetchEventData();
  }, []);

  if (!eventData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="event-page">
    <header className="header">
      <Header eventData={eventData}/>
    </header>
    <div className="main-content">
      <div className="left-content"> 
        <div className="event-image">
          <img src={eventData.event_poster_url} alt="Event" />
        </div>
        <Tabs eventData={eventData} />
      </div>
      <div className="right-content">
        <div className="event-details">
          <h2>KonfHub Frontend Evaluation Task</h2>
          <div className='event-features'>
            <div className='col-align'>
            <img width="18" height="18" src="https://img.icons8.com/ios-glyphs/30/video-call.png" alt="video-call"/>
              Online
            </div>
            <div className='col-align'>
            <img width="19" height="19" src="https://img.icons8.com/fluency-systems-filled/48/ticket.png" alt="ticket"/>
            Paid
            </div>
            </div>
          <p>Event Live Link: <a href="#">Open streaming website</a></p>
          <p style={{textAlign:"left"}}><strong>Date:</strong> Jul 31st, 2034 6:00 AM - Aug 31st, 2034 6:00 PM IST</p>
          <p>Event starts in:</p>
          <strong>3686D : 7H : 52M : 11S</strong>
        </div>
        <div className='event_btn'>

          <button>Buy Now</button>
          <a href="#!"  className="official-website">Official Website <img width="22" height="20" src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/external-share-interface-kiranshastry-lineal-kiranshastry-1.png" alt="external-share-interface-kiranshastry-lineal-kiranshastry-1"/></a>
        </div>
        <div className="hosted-by">
          <h3>HOSTED BY</h3>
          <div className="host">
            <div style={{display:"flex", alignItems:"center", gap:"5px", justifyContent:"flex-start"}}>

            <img src={eventData.organiser_image_url} alt="Host" />
            <p>Manjunath R</p>
            </div>
            <div className="event-description" dangerouslySetInnerHTML={{ __html: eventData.organiser_info }} />
            <div>
              <span>Contact US On</span>
              <div>
                <img src="https://dev.konfhub.com/img/facebook-share.svg" alt="facebook" width="29" height="29"/>
                <img src="https://dev.konfhub.com/img/twitter-pro-black.svg" alt="twitter" width="29" height="29"/>
                <img src="https://dev.konfhub.com/img/linkedin-share.svg" alt="linkedin" width="29" height="29"/>
                <img src="https://dev.konfhub.com/img/website-black.svg" alt="website-black" width="29" height="29"/>
                <img src="https://dev.konfhub.com/img/mail-share.svg" alt="mail-share" width="29" height="29"/>
                <a href="tel:+919988776655" class="jsx-46dc54a1840d89f1 me-2"><img src="https://dev.konfhub.com/img/call-share.svg
" alt="" class="phone-number" width="29" height="29"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default EventPage;
