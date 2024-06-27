import React from 'react'
import './SpeakersCard.css'

function SpeakersCard({ speakerDetails }) {
  return (
    <div className='speakers_container'>
      {speakerDetails?.map((speaker) => (
        <div className='speakers_card' key={speaker.id}>
          <div style={{display:"flex", flexDirection:"column",justifyContent:"flex-start"}}>
            <img className='speaker_profile_url' src={speaker.profile_url} alt={speaker.profile_name} />
            <span className='speaker_profile_name'>{speaker.profile_name}</span>
          </div>
          <p>{speaker.profile_designation}</p>
          <p className='profile_details'>{speaker.profile_details}</p>
          <div className='social_media_links'>
            {speaker.social_media_links.map((link, index) => (
              <img width={24} height={24} key={index} src={link} alt={`social-media-link-${index}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SpeakersCard
