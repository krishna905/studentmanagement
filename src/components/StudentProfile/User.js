import React from 'react';
import Card from './Card';
import Notifications from './Notifications';
const User = () => {
  return (
    <section className="section">
      <div className="section-center cardandnotifications">
        <Card></Card>
        <Notifications></Notifications>
      </div>
    </section>
  );
};

export default User;
