import React from 'react'
import './Home.css'
import AdSlider from './AdSlider'
import HomeAppBanner from './HomeAppBanner'
import Explore from './Explore'
import FreshFinds from './FreshFinds'

function Home(props) {
    return (
    <div className='home'>
        <div className='ad__top'>
            <small>Advertisement</small>
            <img className='ad__image' src='https://tpc.googlesyndication.com/simgad/3574568783891780556' />
        </div>
        <div className='ad__row'>
            <AdSlider />
            <HomeAppBanner />
        </div>
        <Explore />
        <FreshFinds />
    </div>)
};

export default Home;