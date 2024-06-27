import React from 'react';
import './About.css'
const About = ({ description }) => {
  return (
    <div>
        <h2 className='about-event-title'>ABOUT EVENT</h2>
      <div className="event-description" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};

export default About;
