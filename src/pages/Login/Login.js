import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import Particles from 'react-particles-js';
import Anime from 'react-anime';
import { Row, Col } from 'reactstrap';
import loginImg from '../../assets/img/loginImg.jpg';
import logo from '../../assets/img/logo.jpg';
import './Login.css';
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: ''
        }
    }

    render() {
        return (
            <div className="loginContainer">
                <Row style={{ margin: '0 auto' }}>
                    <Col xs="12" sm="12" md="8">
                        <Anime delay={(e, i) => i * 100}
                            scale={[.1, .9]}>
                            <div className="blue" />
                            <div className="green" />
                            <div className="red" />
                        </Anime>
                       {/* <Particles
                            params={{F
                                particles: {
                                    line_linked: {
                                        shadow: {
                                            enable: true,
                                            color: "#290138",
                                            blur: 5
                                        }
                                    },
                                    number: {
                                        value: 150,
                                        density: {
                                            enable: true,
                                            value_area: 1000
                                        }
                                    },
                                    color: {
                                        value: "#5E0052"
                                    },
                                    shape: {
                                        type: "circle",
                                        stroke: {
                                            width: 0,
                                            color: "#290138"
                                        },
                                        polygon: {
                                            nb_sides: 5
                                        },
                                    },
                                    opacity: {
                                        value: 0.5,
                                        random: false,
                                        anim: {
                                            enable: false,
                                            speed: 1,
                                            opacity_min: 0.1,
                                            sync: false
                                        }
                                    },
                                    size: {
                                        value: 3,
                                        random: true,
                                        anim: {
                                            enable: false,
                                            speed: 40,
                                            size_min: 0.1,
                                            sync: false
                                        }
                                    },
                                    move: {
                                        enable: true,
                                        speed: 6,
                                        direction: "none",
                                        random: false,
                                        straight: false,
                                        out_mode: "out",
                                        bounce: false,
                                        attract: {
                                            enable: false,
                                            rotateX: 600,
                                            rotateY: 1200
                                        }
                                    }
                                },
                                interactivity: {
                                    detect_on: "canvas",
                                    modes: {
                                        grab: {
                                            distance: 140,
                                            line_linked: {
                                                opacity: 1
                                            }
                                        },
                                        bubble: {
                                            distance: 400,
                                            size: 40,
                                            duration: 2,
                                            opacity: 8,
                                            speed: 3
                                        },
                                        repulse: {
                                            distance: 200,
                                            duration: 0.4
                                        },
                                        push: {
                                            particles_nb: 4
                                        },
                                        remove: {
                                            particles_nb: 2
                                        }
                                    }
                                }
                            }}
                            style={{
                                width: '100%',
                                backgroundImage: `url(${loginImg})`
                            }}
                        >

                        </Particles>*/}
                    </Col>
                    <Col xs="12" sm="12" md="4" className="loginForm">
                        <div className="loginFormContainer">
                            <img src={logo} className="logoImg" atl="App Logo" />
                            <LoginForm />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }

}

export default Login;