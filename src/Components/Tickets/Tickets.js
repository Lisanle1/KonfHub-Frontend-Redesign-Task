// Tickets.js
import React from 'react';
import './Tickets.css'
import TicketsCard from '../Cards/TicketsCard/TicketsCard';
const Tickets = () => {
  const ticketPlanDetails = [
    {
      id: '1',
      ticket_plan_type: 'Free Plan',
      ticket_description: 'This is a ticket description. This is a free ticket. This ticket is uncategorised',
      ticket_venue: "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
      ticket_additional_heading: "This is additional venue details.",
      ticket_timestamp: 'Available Till: 31st Aug 2034, 06:00 PM IST',
      ticket_type: "FREE",
      button_type: "Register"
    },
    {
      id: '2',
      ticket_plan_type: "Paid Ticket",
      ticket_description: 'This is a ticket description. This is a paid ticket. This ticket is uncategorised.',
      ticket_venue: "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
      ticket_additional_heading: "This is additional venue details.",
      ticket_timestamp: 'Available Till: 31st Aug 2034, 06:00 PM IST',
      ticket_type: "₹1,000",
      button_type: "Register"
    },
    {
      id: '3',
      ticket_plan_type: "Donation Ticket",
      ticket_description: 'This is a ticket description. This is a free ticket. This ticket is uncategorised',
      ticket_venue: "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
      ticket_additional_heading: "This is additional venue details.",
      ticket_timestamp: 'Available Till: 31st Aug 2034, 06:00 PM IST',
      ticket_type: "Min ₹10 - Max ₹1,000",
      button_type: "Donate"
    },
    {
      id: '4',
      ticket_plan_type: "Ticket With Coupon",
      ticket_description: 'This is a ticket description. This is a paid ticket. This ticket is uncategorised. This ticket also has a coupon. Buy minimum - 1 and maximum - 1000000 and avail 10% off.',
      ticket_venue: "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
      ticket_additional_heading: "This is additional venue details.",
      ticket_timestamp: 'Available Till: 31st Aug 2034, 06:00 PM IST',
      ticket_type: "₹1,000",
      button_type: "Register"
    }

  ]
  return (
    <div className="tickets-section">
      <h2>TICKETS</h2>
      <div className="ticket_container">
        <TicketsCard ticketPlanDetails={ticketPlanDetails} />
      </div>
    </div>
  );
};

export default Tickets;
