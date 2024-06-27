import React from 'react';
import './WorkShops.css'
import WorkShopCards from '../Cards/WorkShopsCard/WorkShopCards';
import workShopBookImage from '../../book_image.jpg'
const WorkShops = ({ workshops }) => {

  const workshopDetails=[
    {
      id:1,
      profile_url:"https://dev-media.konfhub.com/speakers/2024/June/09/1717977337424-66d3d266-64c3-4c45-a4ec-f9288d96dbc8.jpg",
      workshop_timestamp:"Jun 1st, 2034 at 10:00 AM (IST)",
      workshop_description:"How to make more money",
      workshop_topic_img_url:workShopBookImage,
      
    },
    {
      id:2,
      profile_url:"https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg",
      workshop_description:"How to fight crime",
      workshop_timestamp:"Jun 1st, 2034 at 10:00 AM (IST)",
      workshop_topic_img_url:'https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717978156489-c8a828a9-13ca-4572-b117-0483bafd34d9.jpg&w=1920&q=75',
      
    },
    {
      id:3,
      profile_url:"https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg",
      workshop_timestamp:"Jun 1st, 2034 at 10:00 AM (IST)",
      workshop_description:"This is a workshop connected to a ticket",
      workshop_topic_img_url:'https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717978363785-8225249d-f4dd-4572-826e-84093b5eb32f.jpg&w=1920&q=75',
      
    }
  ]
  return (
    <div className="workshops-section">
      <h2 className='workshop_section_title'>{workshops.workshop_section_title}</h2>
      <div dangerouslySetInnerHTML={{__html: workshops.workshop_section_description}}/>
      <WorkShopCards workshopDetails={workshopDetails}/>
    </div>
  );
};

export default WorkShops;
