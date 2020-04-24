import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { MdModeEdit } from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';
import NavBar from './components/Nav_left';
import NavTop from './components/Nav_top';
import './style.css';
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
            </Container>

        </div>
    )
}