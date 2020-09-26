import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar'
import { categories } from './categoriesObj'

function Header() {
    var selectedId
    var category = categories[selectedId]
    var i = 0;
    var dropdowntracker;
    function overDropdown(e) {
        selectedId = e.target.id
        category = categories[selectedId]
        while (i < category.length) {
            document.getElementById('dropdown').style.visibility = 'visible'
            document.getElementById('dropdown').innerHTML += `<div id='`+category[i].title+`'class='dropdown__container'>
                <img class='dropdown__icon' src='`+process.env.PUBLIC_URL + category[i].icon+`' />
                <p class='dropdown__title'>
                    `+category[i].title+`
                </p>
            </div>`
            for (let k = 0; k < category[i].options.length; k++) {
                if (category[i]) {
                    var option = document.createElement('p')
                    option.setAttribute('class', 'option')
                    var optionContent = document.createTextNode(category[i].options[k])
                    option.appendChild(optionContent)
                    document.getElementById(category[i].title).appendChild(option)
                }
            }
            i++
        }
        }
    function exitDropDown(e) {
            document.getElementById('dropdown').innerHTML = ''
            document.getElementById('dropdown').style.visibility = 'hidden'
            i = 0
}
    return (
        <nav className='header'>
            <div className='header__topNav'>
                <div className='logo__container'>
                    <img className='logoWhite' src={process.env.PUBLIC_URL + '/images/carousell-logo-white.PNG'} />
                    <p className='line'>|</p>
                </div>
                <div className='categories'>
                    <Link className='link' to='/'><div id='Cars & Property' onMouseOver={overDropdown} onMouseOut={exitDropDown} className='category__item'>Cars & Property</div></Link>
                    <Link className='link' to='/'><div id='Fashion' onMouseOver={overDropdown} onMouseOut={exitDropDown} className='category__item'>Fashion</div></Link>
                    <Link className='link' to='/'><div id='Home & Living' onMouseOver={overDropdown} onMouseOut={exitDropDown} className='category__item'>Home & Living</div></Link>
                    <Link className='link' to='/'><div id='Mobiles & Electronics' onMouseOver={overDropdown} onMouseOut={exitDropDown} className='category__item'>Mobiles & Electronics</div></Link>
                    <Link className='link' to='/'><div id='Hobbies & Games' onMouseOver={overDropdown} onMouseOut={exitDropDown} className='category__item'>Hobbies & Games</div></Link>
                    <Link className='link' to='/'><div id='Jobs & Services' onMouseOver={overDropdown} onMouseOut={exitDropDown} className='category__item'>Jobs & Services</div></Link>
                    <Link className='link' to='/'><div id='Others' onMouseOver={overDropdown} onMouseOut={exitDropDown} className='category__item'>Others</div></Link>
                </div>
                <div className='topNav__right'>
                    <p className='right__item'>Register</p>
                    <p className='right__item'>Login</p>
                </div>
            </div>
            <div id='dropdown' className='dropdown'></div>
            <div className='header__bottomNav'>
                <img className='logoRed' src={process.env.PUBLIC_URL + '/images/carousell-logo-red.PNG'} />
                <Searchbar />
                <button type='submit' className='sellButton'>Sell</button>
            </div>
        </nav>
    )
};

export default Header;