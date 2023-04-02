import React, { useEffect, useRef, useState } from 'react';

import './notificationTicket.css';

const NotificationTicket = ({ msg }) => {
  console.log('Notification', msg);
  const notif = useRef(null);
  const [notificationTicketVisible, setNotificationTicketVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      notif.current.classList.toggle('active');
      clearInterval(timer);
    }, 300);
    closeNotificationTicket();
  }, []);

  const closeNotificationTicket = () => {
    const timer = setInterval(() => {
      notif.current.classList.toggle('active');
      setNotificationTicketVisible(false);
      clearInterval(timer);
    }, 5000);
  };

  return (
    <>
      {notificationTicketVisible && (
        <div className='notification-ticket-container' onClick={closeNotificationTicket}>
          <div ref={notif} className={`alert ${msg.type}`}>
            {msg.text}
          </div>
        </div>
      )}
    </>
  );
};

export default NotificationTicket;
