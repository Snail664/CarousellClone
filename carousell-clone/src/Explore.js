import React from 'react'
import './Explore.css'
import categoriesArray from './categoriesArray'

function Explore() {
    console.log(categoriesArray)
    function onStart() {
        for (let i = 0; i < categoriesArray.length; i++) {
            document.getElementById('explore__options').innerHTML += `
            <div class="option__container">
                <img class="option__icon" src="`+process.env.PUBLIC_URL + categoriesArray[i].icon+`"  />
                <p class="option__title">`+categoriesArray[i].title+`</p>
            </div>`
        }
    }
    window.addEventListener('load', onStart)
    return (
        <div className='explore'>
            <p className='explore__title'>Explore Carousell</p>
            <div id='explore__options' className='explore__options'></div>
        </div>
    )
}

export default Explore;