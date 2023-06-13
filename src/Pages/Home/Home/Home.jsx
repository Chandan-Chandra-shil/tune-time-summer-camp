import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import { Helmet } from 'react-helmet-async';
import History from '../History/History';


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Tune Time | Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <History/>
      <PopularInstructor></PopularInstructor>
    </div>
  );
};

export default Home;