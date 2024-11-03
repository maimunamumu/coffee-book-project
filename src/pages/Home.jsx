import React from 'react';
import Banner from '../componet/Banner';
import Heading from '../componet/Heading';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../componet/Categories';



const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
          <Banner></Banner>
          <Heading title={'Browes Coffees By Category'} subtitle={'This is a subtitle.Browes coffees by category'}></Heading>
       
          <Categories categories={categories}></Categories>
          <Outlet></Outlet>
        </div>
    );
};

export default Home;