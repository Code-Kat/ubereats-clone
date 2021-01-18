import React from 'react';
import './css/Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from "@material-ui/core"
import RoomIcon from '@material-ui/icons/Room';


function Header() {
    

    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <img alt="" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg" />
            </div>
            <div className="header__search" >
                <RoomIcon />
                <input type="text" placeholder="What's your address?" />
            </div>
            <Button>Sign in</Button>
        </div>
    )
}

export default Header
