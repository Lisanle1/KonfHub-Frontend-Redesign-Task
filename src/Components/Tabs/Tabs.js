import React, { useState } from 'react';
import About from '../About/About';
import Tickets from '../Tickets/Tickets';
import Speakers from '../Speakers/Speakers';
import Workshops from '../WorkShops/WorkShops';
import Sponsors from '../Sponsors/Sponsors';
import ContactUs from '../ContactUs/ContactUs';

const Tabs = ({ eventData }) => {
  const [activeTab, setActiveTab] = useState('description');

  const renderContent = () => {
    switch (activeTab) {
      case 'description':
        return <About description={eventData.description} />;
      case 'tickets':
        return <Tickets/>;
      case 'speakers':
        return <Speakers speakers={eventData} />;
      case 'workshops':
        return <Workshops workshops={eventData} />;
      case 'sponsors':
        return <Sponsors sponsors={eventData} />;
      case 'contact':
        return <ContactUs contacts={eventData.contacts} />;
      default:
        return null;
    }
  };

  return (
    <div className="tabs">
      <nav className="tab-navigation">
        <button className={activeTab === 'description' ? 'active' : ''} onClick={() => setActiveTab('description')}>About</button>
        <button className={activeTab === 'tickets' ? 'active' : ''} onClick={() => setActiveTab('tickets')}>Tickets</button>
        <button className={activeTab === 'speakers' ? 'active' : ''} onClick={() => setActiveTab('speakers')}>This is speakers section</button>
        <button className={activeTab === 'workshops' ? 'active' : ''} onClick={() => setActiveTab('workshops')}>This is workshop section</button>
        <button className={activeTab === 'sponsors' ? 'active' : ''} onClick={() => setActiveTab('sponsors')}>This is event sponsors</button>
      </nav>
      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Tabs;
