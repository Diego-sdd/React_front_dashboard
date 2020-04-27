import React, { useState, useEffect, Suspense } from 'react';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import { MdModeEdit, MdTimeline, MdTrendingDown } from 'react-icons/md';
import data from '../arquivo.json';
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
export default function Index() {
    const student = data.student;
    //const contStudent = cont.length;
    const lections = data.hr_lections;

    const [cont_homeworks, setHomeworks] = useState('');
    const [cont_underperforming, setUnderperforming] = useState('');
    const [underperforming, setAverageUnderperforming] = useState('');
    const [average_note, setAverage] = useState('');
    const [contStudent, setContStudent] = useState((Object.keys(student)).length);

    useEffect(() => {
        const homeworks = student.reduce((homeworks, students) => {
            if (students.ds_homeWorks === 1) {
                homeworks.push(students.cd_student);
            }
            return homeworks;
        }, []);

        const Underperforming = student.reduce((Underperforming, students) => {
            if (students.ds_note < 5) {
                Underperforming.push(students.cd_student);
            }
            return Underperforming;
        }, []);

        const map_ds_note = student.map(students => (
            students.ds_note
        ));
        const totalScores = map_ds_note.reduce(
            (previousScore, currentScore, index) => previousScore + currentScore,
            0);


        setAverage(totalScores / contStudent);
        setHomeworks(parseInt(homeworks.length * 100 / contStudent));
        setAverageUnderperforming(parseInt(Underperforming.length * 100 / contStudent));
        setUnderperforming(Underperforming.length);
    });

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
                                <h4>{contStudent}</h4>
                                <p>Students</p>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={3} >
                        <Card className="card">
                            <MdTimeline className="icon_timeline_card" />
                            <div className="text_card">
                                <h4>{average_note}</h4>
                                <p>Average mark</p>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={3} >
                        <Card className="card">
                            <MdTrendingDown className="icon_trendingDown_card" />
                            <div className="text_card">
                                <h4>{cont_underperforming} ({underperforming}%)</h4>
                                <p>Underperforming students</p>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={3} >
                        <Card className="card">
                            <RiBookLine className="icon_book_card" />
                            <div className="text_card">
                                <h4>{cont_homeworks}%</h4>
                                <p>Finished homeworks</p>
                            </div>
                        </Card>
                    </Col>
                </Row>

                <Row className="deshboard">
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
                                        <h4>{lections}</h4>
                                        <p>Hours spent on lections</p>
                                    </div>
                                </Card>
                            </Col>

                        </Row>
                    </Col>
                    <Col lg={3}>
                        <Card className="card_card_students_average">
                            <div className="text_top">
                                <h6>Students by average mark</h6>
                                <div id="option_descending">
                                    <p>Descending</p>
                                    <BsChevronDown className="icon_Chevron_students" />
                                </div>
                            </div>
                            {student.map(students => (
                                <div className="icons_sstudents" key={students.cd_student}>
                                    <Image src={require('./assets/' + students.nm_img + '.png')} id="img"></Image>
                                    <h6>{students.nm_student}</h6>
                                    <p>{students.ds_note}</p>
                                </div>
                            ))}
                        </Card>

                    </Col>
                    <Col lg={3}>

                        <Suspense fallback={<div>Loading...</div>}>
                            <Graphic_Dunut />
                        </Suspense>


                    </Col>
                </Row>
            </Container>

        </div >
    )
}