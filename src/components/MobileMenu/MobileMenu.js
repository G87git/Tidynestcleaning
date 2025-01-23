import React, { Fragment, useState, useEffect, useRef } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import { NavLink } from "react-router-dom";
import './style.css';

const menus = [
    { id: 1, title: 'Home', link: '/home' },
    { id: 2, title: 'About', link: '/about' },
    { id: 3, title: 'Pricing', link: '/pricing' },
    { id: 88, title: 'Contact', link: '/contact' }
];

const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);
    const menuRef = useRef(null);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuState(false); // Close menu if the click is outside the mobile menu
            }
        };

        // Add event listener for clicks
        document.addEventListener("mousedown", handleClickOutside);

        // Clean up the event listener on component unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`} ref={menuRef}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                {item.submenu.map((submenu, i) => (
                                                    <ListItem key={i}>
                                                        <NavLink onClick={ClickHandler} exact activeClassName="active"
                                                            to={submenu.link}>{submenu.title}</NavLink>
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <NavLink exact activeClassName="active"
                                        to={item.link}>{item.title}</NavLink>
                                }
                            </ListItem>
                        );
                    })}
                </ul>
            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    );
}

export default MobileMenu;
