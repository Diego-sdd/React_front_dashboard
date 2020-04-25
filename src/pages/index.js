import React from 'react';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';

import { MdModeEdit, MdTimeline, MdTrendingDown } from 'react-icons/md';

import { AiOutlineTrophy } from 'react-icons/ai';
import { MdAccessTime } from 'react-icons/md';
import { RiBookLine } from 'react-icons/ri';
import { FiPlus, FiUser } from 'react-icons/fi';
import { BsChevronDown } from 'react-icons/bs';
import NavBar from './components/Nav_left';
import NavTop from './components/Nav_top';
import Graphic_Dunut from './graphic/Donut/index';
import Graphic_Column from './graphic/Column/index';
import './style.css';
import './styles_responsive.css';
import student_one from './assets/students_one.png';
import student_two from './assets/students_two.png';
export default function index() {
    return (
        <div>
            <NavBar />
            <NavTop />

            <Container fluid>
                <Row className="header">
                    <Col lg={6} >
                        <h3>Dashboard</h3>
                        <p>Mobile UX/UI Designer course</p>
                    </Col>
                    <Col lg={3} className="button_one" >
                        <Button variant="light" >
                            <MdModeEdit className="icon_GrEdit" />
                            Manage dashboard
                        </Button>
                    </Col>
                    <Col lg={3} className="button_two">
                        <Button variant="light" >
                            <FiPlus />
                            Create new dashboard
                            </Button>
                    </Col>
                </Row>
                <Row className="card_top">
                    <Col lg={3} >
                        <Card className="card">
                            <FiUser className="icon_user_card" />
                            <div className="text_card">
                                <h4>62</h4>
                                <p>Students</p>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={3} >
                        <Card className="card">
                            <MdTimeline className="icon_timeline_card" />
                            <div className="text_card">
                                <h4>6.8</h4>
                                <p>Average mark</p>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={3} >
                        <Card className="card">
                            <MdTrendingDown className="icon_trendingDown_card" />
                            <div className="text_card">
                                <h4>9 (14%)</h4>
                                <p>Underperforming students</p>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={3} >
                        <Card className="card">
                            <RiBookLine className="icon_book_card" />
                            <div className="text_card">
                                <h4>83%</h4>
                                <p>Finished homeworks</p>
                            </div>
                        </Card>
                    </Col>
                </Row>

                <Row className="deshboard">

                    {/* <Card>
                        <p>The number of applied and left students per month</p> */}
                    <Col lg={6} >
                        <Col lg={12}>

                            <Graphic_Column />

                        </Col>

                        <Row className="card_bottom">

                            <Col lg={6} >
                                <Card className="card">
                                    <AiOutlineTrophy className="icon_trophy_card" />
                                    <div className="text_card">
                                        <h4>25</h4>
                                        <p>Lections left</p>
                                    </div>
                                </Card>
                            </Col>
                            <Col lg={6} >
                                <Card className="card">
                                    <MdAccessTime className="icon_time_card" />
                                    <div className="text_card">
                                        <h4>129</h4>
                                        <p>Hours spent on lections</p>
                                    </div>
                                </Card>
                            </Col>

                        </Row>

                    </Col>
                    {/* </Card> */}
                    <Col lg={3}>
                        <Card className="card_card_students_average">
                            <div className="text_top">
                                <h6>Students by average mark</h6>
                                <div id="option_descending">
                                    <p>Descending</p>
                                    <BsChevronDown className="icon_Chevron_students" />
                                </div>
                            </div>
                            <div className="icons_sstudents">
                                <Image src={student_one} id="img"></Image>
                                <h6>Annette Watson</h6>
                                <p>9.3</p>
                            </div>
                            <div className="icons_sstudents">
                                <Image src={student_two} id="img"></Image>
                                <h6>Calvin Stwwart</h6>
                                <p>8.9</p>
                            </div>
                            <div className="icons_sstudents">
                                <Image src={student_two} id="img"></Image>
                                <h6>Calvin Stwwart</h6>
                                <p>8.9</p>
                            </div>
                            <div className="icons_sstudents">
                                <Image src={student_two} id="img"></Image>
                                <h6>Calvin Stwwart</h6>
                                <p>8.9</p>
                            </div>
                            <div className="icons_sstudents">
                                <Image src={student_two} id="img"></Image>
                                <h6>Calvin Stwwart</h6>
                                <p>8.9</p>
                            </div>
                            <div className="icons_sstudents">
                                <Image src={student_two} id="img"></Image>
                                <h6>Calvin Stwwart</h6>
                                <p>8.9</p>
                            </div>
                            <div className="icons_sstudents">
                                <Image src={student_two} id="img"></Image>
                                <h6>Calvin Stwwart</h6>
                                <p>8.9</p>
                            </div>
                        </Card>

                    </Col>
                    <Col lg={3}>
                        <Graphic_Dunut />
                    </Col>
                </Row>


            </Container>

        </div>
    )
}