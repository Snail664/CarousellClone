import React from 'react'
import './Explore.css'
import categoriesArray from './categoriesArray'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.scss";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function Explore() {

    var settings = {
        slidesToShow: 6,
        slidesToScroll: 4,
        arrows: true,
        prevArrow: <ChevronLeftIcon />,
        nextArrow: <ChevronRightIcon />
    }
    return (
        <div className='explore'>
            <p className='explore__title'>Explore Carousell</p>
    <Slider {...settings} id='explore__options' className='explore__options'>{ categoriesArray.map(item => {
        return <div id={item.title} className='option__container'>
                    <div className='option__iconContainer'>
                        <img className='option__icon' src={process.env.PUBLIC_URL + item.icon} />
                    </div>
                    <div className='option__title'>{item.title}</div>
               </div>
    })}</Slider>
        </div>
    )
}

export default Explore;