import React from 'react'
import './FreshFinds.css'
import { listings } from './listingsDummyData'

function FreshFinds() {
    function renderListings() {
        for (let i = 0; i < listings.length; i++ ) {
            const listingContainer = document.createElement('div')
            listingContainer.setAttribute('class', 'listing')

            const listingTitle = document.createElement('p')
            listingTitle.setAttribute('class', 'listing__title')
            const titleContent = document.createTextNode(listings[i].title)
            listingTitle.appendChild(titleContent)
            listingContainer.appendChild(listingTitle)


            const listingThumbnail = document.createElement('img')
            listingThumbnail.setAttribute('class', 'listing__thumbnail')
            listingThumbnail.setAttribute('src', listings[i].thumbnail)
            listingContainer.appendChild(listingThumbnail)


            const listingDescription = document.createElement('p')
            listingDescription.setAttribute('class', 'listing__description')
            const descriptionContent = document.createTextNode(listings[i].description)
            listingDescription.appendChild(descriptionContent)
            listingContainer.appendChild(listingDescription)



            const listingUsername = document.createElement('p')
            listingUsername.setAttribute('class', 'listing__username')
            const usernameContent = document.createTextNode(listings[i].username)
            listingUsername.appendChild(usernameContent)
            listingContainer.appendChild(listingUsername)

            document.getElementById('listings').appendChild(listingContainer)
        }
    }

    window.addEventListener('load', renderListings)

    return (
        <div className='freshfinds'>
            <p>Fresh Finds</p>
            <div id='listings' className='listings'>

            </div>
        </div>
        
    )
};

export default FreshFinds;