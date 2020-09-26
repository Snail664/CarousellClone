import React from 'react'
import './HomeAppBanner.css'

function HomeAppBanner() {

    return (
        <div className='homeAppBanner'>
            <div className='banner__left'>
                <img className='app__icon' src='https://mweb-cdn.karousell.com/build/app-icon-a27ace5add88c6c78d4dc94f79212471.png' />
                <br />
                <p className='banner__text'>Sell in a snap, <br /> buy with a chat.</p>
                <img className='download__appstore' src='https://mweb-cdn.karousell.com/build/app-store-77b3b473cb2c3416ea75cb4093458f6d.svg' />
                <img className='download__playstore' src='https://mweb-cdn.karousell.com/build/play-store-b4ed670ad8ef426b0bd68160fdfb575b.svg' />
                <button className='download__sms'>Download via SMS</button>
            </div>
            <div className='banner__right'>
                <img className='app__image' src='https://mweb-cdn.karousell.com/build/home-app-banner-67547b16c2f068f5ae0870cd39b22c51.jpg' />
            </div>
        </div>
    )
}

export default HomeAppBanner