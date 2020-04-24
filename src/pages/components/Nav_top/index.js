import React from 'react';
import { Form, Image } from 'react-bootstrap';
import './style.css';
import './style_responsive.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsChevronDown, BsBell } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import Img_Avatar from '../../assets/graduate.png';
export default function NavBarTop() {
    return (
        <div className="nav_top">
            {/* <Navbar bg="white"  > */}
            <AiOutlineSearch className="icon_search" />
            <Form.Control
                type="text"
                placeholder="Search"
                className="input_text_search"
            />

            <div className="text">
                <p id="text_name">Cody Simmons</p>
                <p id="text_subName">Lecturer</p>
            </div>

            <Image src={Img_Avatar} className="icon_user_top" />
            <BsChevronDown className="icon_Chevron_top" />
            <BsBell className="icon_Bell_top" />
            <FiLogOut className="icon_Out_top" />

            <Form.Control
                type="text"
                placeholder="Search"
                className="input_text_search_mobile"
            />
            {/* </Navbar> */}
        </div>
    )
}