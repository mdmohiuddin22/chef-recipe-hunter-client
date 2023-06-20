/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Banner from './Banner/Banner';
import ChepsInfo from '../../ChefsInfo/ChepsInfo';
import FeaturedChefRecipes from '../FeaturedChefRecipes/FeaturedChefRecipes';
import CookingTips from '../CookingTips/CookingTips';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <ChepsInfo></ChepsInfo>
        <FeaturedChefRecipes></FeaturedChefRecipes>
        <CookingTips></CookingTips>
        </div>
    );
};

export default Home;