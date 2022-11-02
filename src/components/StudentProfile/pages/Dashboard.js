import React from 'react';
import Info from '../Info';
import Repos from '../Repos';
import User from '../User';
import Search from '../Search';
import Navbar from '../Navbar';
import loadingImage from '../../../images/preloader.gif';
import { StudentContext } from '../context/context';
import Footer from '../Footer';
const Dashboard = () => {
  const { isLoading } = React.useContext(StudentContext);
  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImage} className="loading-img" alt="loding" />
      </main>
    );
  }
  return (
    <main>
      <Navbar></Navbar>
      <Search />
      <Info />
      <User />
      <Repos />
      <Footer></Footer>
    </main>
  );
};

export default Dashboard;
