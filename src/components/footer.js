import { Col, Container, Row } from 'react-bootstrap';

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
    <footer className="footer text-center">
        <Container>
            <Row>
                <Col md={4} className="mb-5 mb-lg-0">
                    <h4 className="text-uppercase mb-4">Location</h4>
                    <p className="lead mb-0">2215 John Daniel Drive<br/>Clark, MO 65243</p>
                </Col>
                <Col md={4} className="mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Around the Web</h4>
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                        <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                            <i className="fab fa-fw fa-facebook-f"></i>
                        </a>
                        </li>
                        <li className="list-inline-item">
                        <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                            <i className="fab fa-fw fa-google-plus-g"></i>
                        </a>
                        </li>
                        <li className="list-inline-item">
                        <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                            <i className="fab fa-fw fa-twitter"></i>
                        </a>
                        </li>
                        <li className="list-inline-item">
                        <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                            <i className="fab fa-fw fa-linkedin-in"></i>
                        </a>
                        </li>
                        <li className="list-inline-item">
                        <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                            <i className="fab fa-fw fa-dribbble"></i>
                        </a>
                        </li>
                    </ul>
                </Col>
                <Col md={4} className="mb-5 mb-lg-0">
                    <h4 className="text-uppercase mb-4">About Freelancer</h4>
                    <p className="lead mb-0">Freelance is a free to use, open source Bootstrap theme created by
                        <a href="http://startbootstrap.com">Start Bootstrap</a>.
                    </p>
                </Col>
            </Row>
        </Container>
    </footer>
)

export default Footer
