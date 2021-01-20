import React, { useState } from 'react';
import './css/Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Button} from "@material-ui/core"
import RoomIcon from '@material-ui/icons/Room';
import Sidebar from "./Sidebar";

function Header() {  

    const [showSidebar, setShowSidebar] = useState(false);
    const [showBorder, setShowBorder] = useState(false)
    

    const offClickSidebar= (showSidebar && (()=>setShowSidebar(false)));
    //const offClickBorder= (showBorder && (()=>setshowBorder(false)));


    return (
        <div 
        className="header" 
        onClick={offClickSidebar}>
            <div className="header__left">
                < div className="header__sidebar">{showSidebar && <Sidebar />}</div>
                 <MenuIcon className="header__menuIcon" onClick={()=>setShowSidebar(!showSidebar)}/>
        
                <img alt="" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg" />
            </div>
            <div className={`header__search ${showBorder && "header__searchBorder"}`} onClick={()=>setShowBorder(true)}>
                <RoomIcon />
                <input type="text" placeholder="What's your address?" />
            </div>
            <Button>Sign in</Button>
        </div>
    )
}

export default Header
