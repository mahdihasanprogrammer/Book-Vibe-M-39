import React, { Suspense } from 'react';
import Hero from '../../components/hero/Hero';
import AllBooks from '../../components/allBooksSection.jsx/AllBooks';


const HomePage = () => {

    return (
        <div>
          <Hero/>
          <Suspense><AllBooks/></Suspense>
        </div>
    );
};

export default HomePage;