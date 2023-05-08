// Ahead the website
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import React, { useContext } from 'react';
import { ColorContext } from '../../../ColorContext/darkContext';
import images from '../../../Assets/Images';


import classes from './navbar.module.scss';


function Navbar() {
    const { darkMode, dispatch } = useContext(ColorContext);

    return (
        <div className={classes.navbar}>
            <div className={classes.search}>
                <input type="text" placeholder="Search.." />

                <SearchIcon className={classes.search_icon} />
            </div>

            <div className={classes.item_lists}>
                <div className={classes.item}>
                    {!darkMode ? (
                        <DarkModeIcon
                            className={classes.item_icon}
                            onClick={() => dispatch({ type: 'TOGGLE' })}
                        />
                    ) : (
                        <LightModeIcon
                            className={classes.item_icon_white}
                            onClick={() => dispatch({ type: 'TOGGLE' })}
                        />
                    )}
                </div>
                <div className={classes.item}>
                    <img className={classes.admin_pic} src={images.portrait} alt="admin" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
