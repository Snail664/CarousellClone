import React from 'react'
import './Listing.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Listing(props) {
    return (
         <div className='listing'>
            <div className='listing__header'>
                <img className='header__left' src={process.env.PUBLIC_URL + '/images/' + props.profilePic} />
                <div className='header__right'>
                    <p className='listing__username'>{ props.username }</p>
                    <p className='listing__time'>{ props.time }</p>
                </div>
            </div>
            <img className='listing__thumbnail' src={props.thumbnail} />
            <p className='listing__title'>{ props.title }</p>
            <p className='listing__description'>{ props.description }</p>
            <div className='listing__footer'>
                <FavoriteBorderIcon className='listing__like' />
                <MoreVertIcon className='listing__more' />
            </div>
    </div>
    )}

export default Listing