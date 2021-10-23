import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../action/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import HeroSection from '../HeroSection'
import Cards from './Cards';

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
        </>
    );
};

export default Home;