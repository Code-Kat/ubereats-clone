import { Button } from '@material-ui/core'
import React from 'react'
import "./css/Sidebar.css";
import AppleIcon from '@material-ui/icons/Apple';

function Sidebar() {
    return (
        <div className="sidebar">
             <div className="sidebar__top">
                <Button className="sidebar__topButton">Sign in</Button>
                <p>Create a business account</p>
                <p>Add your restaurant</p>
                <p>Sign up to deliver</p>
            </div>  
             <div className="sidebar__bottom">
                 <div className="sidebar__bottomApp">
                     <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/0c6de4f0b3884eb89b28a29ecbc10d59.svg" alt=""/>
                     <p>There's more to love in the app.</p>
                 </div>
                 <div className="sidebar__bottomButtons">
                     <Button>
                         <AppleIcon className="sidebar__appleIcon"/>
                         <p>iPhone</p>
                     </Button>
                     <Button>
                        <img src="https://www.materialui.co/materialIcons/action/android_24px.svg" alt="" />
                        <p>Android</p>
                     </Button>
                 </div>
             </div>
        </div>
    )
}

export default Sidebar
