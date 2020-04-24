import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { AiFillFolder } from 'react-icons/ai';
import { GoGraph } from 'react-icons/go';
import { BsEnvelope, BsFolder } from 'react-icons/bs';
import { RiStickyNoteLine } from 'react-icons/ri';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './style.css';
import './style_responsive.css';
import Img_icon_left from '../../assets/icon_left_C.PNG';

export default function NavBarLeft() {
    const history = useHistory();
    const location = useLocation();
    return (

        <SideNav className="nav_bar_left"
            onSelect={(selected) => {
                const to = '/' + selected;
                if (location.pathname !== to) {
                    history.push(to);
                }
            }}
        >
            <img
                src={Img_icon_left}
                className="Img_icon_left"
            />
            <SideNav.Toggle className="Toggle" />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home" className='nav_active_icon'>
                    <NavIcon>
                        <BsFolder className="icons_nav_left" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Home
            </NavText>
                </NavItem>
                <NavItem eventKey="charts">
                    <NavIcon>
                        <GoGraph style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Charts
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts">
                    <NavIcon>
                        <BsEnvelope style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Charts
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts">
                    <NavIcon>
                        <RiStickyNoteLine style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Charts
                    </NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    )
}