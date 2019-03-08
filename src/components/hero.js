import { Container } from 'react-bootstrap';
import ProfileImage from "./profile-image"
import React from "react"
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Hero = () => (
    <header className="masthead bg-primary text-white text-center">

        <Container>
            <ProfileImage />
            <h1 className="text-uppercase mb-0">Joseph Henry Passineau</h1>
            <hr className="star-light" />
            <h2 className="font-weight-light mb-0">Full Stack Developer</h2>
        </Container>

    </header>
)

export default Hero
