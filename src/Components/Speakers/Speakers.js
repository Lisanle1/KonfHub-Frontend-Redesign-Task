import React from 'react';
import SpeakersCard from '../Cards/SpeakersCard/SpeakersCard';
import './Speakers.css'
const Speakers = ({ speakers }) => {
  const speakerDetails=[
    {
      id:1,
      profile_url:"https://dev-media.konfhub.com/speakers/2024/June/09/1717977337424-66d3d266-64c3-4c45-a4ec-f9288d96dbc8.jpg",
      profile_name:'Bruce Wayne',
      profile_designation:"Chairman",
      profile_details:"Wayne Enterprises",
      social_media_links:[
        'https://dev.konfhub.com/img/facebook-share.svg',
        'https://dev.konfhub.com/img/twitter-pro-black.svg',
        'https://dev.konfhub.com/img/linkedin-share.svg',
        'https://dev.konfhub.com/img/website-black.svg'
      ]
    },
    {
      id:2,
      profile_url:"https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg",
      profile_name:'Dark Knight',
      profile_designation:"Batman",
      profile_details:"Gotham",
      social_media_links:[
        'https://dev.konfhub.com/img/facebook-share.svg',
        'https://dev.konfhub.com/img/twitter-pro-black.svg',
        'https://dev.konfhub.com/img/linkedin-share.svg',
        'https://dev.konfhub.com/img/website-black.svg'
      ]
    }
  ]
  return (
    <div className="speakers-section">
      <h2 className='speaker_section_title'>{speakers.speaker_section_title}</h2>
      <div dangerouslySetInnerHTML={{__html: speakers.speaker_section_description}}/>
      <SpeakersCard speakerDetails={speakerDetails}/>
    </div>
  );
};

export default Speakers;
