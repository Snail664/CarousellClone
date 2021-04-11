import React from 'react'
import './Searchbar.css'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Searchbar() {

    var selection = 'Items';

    function dropdown() {
        let dropdown = document.getElementById('searchbar__dropdown')
        if (dropdown.style.visibility === 'hidden') {
            dropdown.style.visibility ='visible'
            document.getElementById('expandMore').style.transform = 'rotate(180deg)';
        } else {
            dropdown.style.visibility = 'hidden'
            document.getElementById('expandMore').style.transform = '';
        }
    };

    function dropdownItemBottom() {
        console.log('selection is users')
        document.getElementById('title').innerHTML = 'Users' 
        document.getElementById('searchbar__dropdown').style.visibility = 'hidden'
        document.getElementById('expandMore').style.transform = '';
        return selection = 'Users'
    };

    function dropdownItemTop() {
        console.log('selection is items')
        document.getElementById('title').innerHTML = 'Items'
        document.getElementById('searchbar__dropdown').style.visibility = 'hidden'
        document.getElementById('expandMore').style.transform = '';
        return selection = 'Items'
    };

    function clickOnInput() {
        document.getElementById('searchGroup').className = 'searchGroupClicked'
    }

    function focusoutInput() {
        document.getElementById('searchGroup').className = 'searchGroup'
    }

    return (
        <div id='searchGroup' className='searchGroup'>
                <Link to='#' onClick={dropdown} className='clickable'>
                    <div className='searchSelector'>
                        <Link to='#' id='title' className='selector__title'>User</Link>
                        <ExpandMoreIcon id='expandMore' className='expandMore' />
                        <p className='line'>|</p>
                    </div>
                </Link>
                <input onClick={clickOnInput} onBlur={focusoutInput} id='searchInput' className='searchInput' placeholder='Search for an item or user...' />
                <SearchIcon className='search__icon' />

                <div id='searchbar__dropdown' className='dropdownMenu'>
                    <Link onClick={dropdownItemTop} className='clickable dropdown__itemTop' to='#'>Items</Link>
                    <Link onClick={dropdownItemBottom} className='clickable dropdown__itemBottom'>Users</Link>
                </div>        
        </div>
    )
};

export default Searchbar;