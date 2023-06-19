/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Banner from './Banner/Banner';
import ChepsInfo from '../../ChefsInfo/ChepsInfo';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <ChepsInfo></ChepsInfo>
        </div>
    );
};

export default Home;