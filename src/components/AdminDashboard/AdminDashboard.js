import React from 'react';
import SchoolInfo from './INFO/01SchoolInfo';
import AdminNavbar from './NAVBAR/AdminNavbar';
import Footer from '../StudentProfile/Footer';
import TopandLow from './ListofTopandLow/TopandLow';
const AdminDashboard = () => {
  return (
    <main>
      <AdminNavbar></AdminNavbar>
      <SchoolInfo />
      <TopandLow />
      <Footer></Footer>
    </main>
  );
};

export default AdminDashboard;
