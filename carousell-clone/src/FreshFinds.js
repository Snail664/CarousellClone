import React from 'react'
import './FreshFinds.css'
import { listings } from './listingsDummyData'
import Listing from './Listing'

function FreshFinds() {
    return (
        <div className='freshfinds'>
            <p className='freshfinds__title'>Fresh Finds</p>
            <div id='listings' className='listings'>
            <Listing profilePic='defaultProfilePic.png' username={listings[2].username} thumbnail={listings[2].thumbnail} title={listings[2].title} description={listings[2].description} time='1000' />
            </div>
        </div>
        
    )
};

export default FreshFinds;