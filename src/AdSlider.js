import React, { component } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.scss";
import './AdSlider.css'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {Link} from 'react-router-dom'


class AdSlider extends React.Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        className: 'adSlider',
        arrows: true,
        prevArrow: <ChevronLeftIcon />,
        nextArrow: <ChevronRightIcon />
      };
      return (
          <Slider {...settings}>
            <img className='ad' src='https://media.karousell.com/media/photos/special-collections/2020/09/14/Regional_SMC-AirCon_M_(1500,_610).png' />
                <img className='ad' src='https://media.karousell.com/media/photos/special-collections/2020/08/03/property_sept_spc2_(1500,_610).png' />
                <img className='ad' src='https://media.karousell.com/media/photos/special-collections/2020/08/12/SG_CBP_Referral-2_M_(1500,_610).png' />
          </Slider>
      );
    }
  }

/*
function AdSlider() {

    return (<Slider autoplay={true} dots={true} autoplaySpeed={5000} arrows={true} pauseOnfocus={true} className='adSlider'>
                <img className='ad' src='https://media.karousell.com/media/photos/special-collections/2020/09/14/Regional_SMC-AirCon_M_(1500,_610).png' />
                <img className='ad' src='https://media.karousell.com/media/photos/special-collections/2020/08/03/property_sept_spc2_(1500,_610).png' />
                <img className='ad' src='https://media.karousell.com/media/photos/special-collections/2020/08/12/SG_CBP_Referral-2_M_(1500,_610).png' />
            </Slider>)
    
};
*/

export default AdSlider;

/*
var myIndex = 0;

    function carousel() {
        var i;
        var x = document.getElementsByClassName("ad");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}    
        x[myIndex-1].style.display = "block";  
        setTimeout(carousel, 5000);
    }

    function change(num) {
        var index = myIndex + num
        if (index < 0) {
            return myIndex = 2
        } else if (index > 2) {
            return myIndex = 0
        } else {
            return myIndex = index
        }
    }
    window.addEventListener('load', carousel)
    return (
        <div className='adSlider'>
           <img id='0' className='ad' src='https://media.karousell.com/media/photos/special-collections/2020/08/12/SG_CBP_Referral-2_M_(1500,_610).png' />
           <img id='1' className='ad' src='https://media.karousell.com/media/photos/special-collections/2020/09/14/Regional_SMC-AirCon_M_(1500,_610).png' />
           <img id='2' className='ad' src='https://media.karousell.com/media/photos/special-collections/2020/08/03/property_sept_spc2_(1500,_610).png' />
           <ChevronLeftIcon className='leftButton' />
           <ChevronRightIcon className='rightButton' />
        </div>
    )
    */