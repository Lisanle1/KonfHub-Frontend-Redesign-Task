import React from 'react';
import './Sponsors.css'
const Sponsors = ({ sponsors }) => {
  return (
    <div className="sponsors-section">
      <h2 className='sponsors_title'>{sponsors.sponsor_section_title}</h2>
      <div>
    <div dangerouslySetInnerHTML={{__html: sponsors.sponsor_section_description}}/>
      <img className='sponsors_logo' src="https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F09%2F1717977584480-2a58c92e-ac5f-4ebd-9570-d6bcfc792dc2.png&w=1920&q=75" alt="" />
      </div>
      <div className='sponsor-section-2'>
        <h2 className='sponsors_title'>SPONSOR CATEGORY</h2>
        <hr className='section-divider'/>
        <img className='sponsors_logo' src="https://dev-media.konfhub.com/sponsors/2024/June/10/1717977635909-75bb1d01-51a2-4af1-82cd-72d587192692.jpg" alt="" />
      </div>
    </div>
  );
};

export default Sponsors;
