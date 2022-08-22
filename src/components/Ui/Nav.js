import React, { Component } from 'react'
import img from '../../assets/imgs/user.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTable, faBackward, faHighlighter, faHamburger } from '@fortawesome/free-solid-svg-icons';

export default class Nav extends Component {
  render() {
    return (
      <div className="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
        <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
            <h2 className="text-primary mb-0"><FontAwesomeIcon className="fa fa-user-edit" icon={faHighlighter}></FontAwesomeIcon></h2>
        </a>
        <a href="#" className="sidebar-toggler flex-shrink-0">
            <FontAwesomeIcon className="fa fa-bars" icon={faBackward}></FontAwesomeIcon>
        </a>
        <form className="d-none d-md-flex ms-4">
            <input className="form-control bg-dark border-0" type="search" placeholder="Search"/>
        </form>
        <div className="navbar-nav align-items-center ms-auto">
            <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    <FontAwesomeIcon className="fa fa-envelope me-lg-2" icon={faTable}></FontAwesomeIcon>
                    <span className="d-none d-lg-inline-flex">Message</span>
                </a>
                <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                    <a href="#" className="dropdown-item">
                        <div className="d-flex align-items-center">
                            <img className="rounded-circle" src={img} alt="" style={{width: "40px", height: "40px"}}/>
                            <div className="ms-2">
                                <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                <small>15 minutes ago</small>
                            </div>
                        </div>
                    </a>
                    <hr className="dropdown-divider"/>
                    <a href="#" className="dropdown-item">
                        <div className="d-flex align-items-center">
                            <img className="rounded-circle" src={img} alt="" style={{width: "40px", height: "40px"}}/>
                            <div className="ms-2">
                                <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                <small>15 minutes ago</small>
                            </div>
                        </div>
                    </a>
                    <hr className="dropdown-divider"/>
                    <a href="#" className="dropdown-item">
                        <div className="d-flex align-items-center">
                            <img className="rounded-circle" src={img} alt="" style={{width: "40px", height: "40px"}}/>
                            <div className="ms-2">
                                <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                <small>15 minutes ago</small>
                            </div>
                        </div>
                    </a>
                    <hr className="dropdown-divider"/>
                    <a href="#" className="dropdown-item text-center">See all message</a>
                </div>
            </div>
            <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    <FontAwesomeIcon className="fa fa-bell me-lg-2" icon={faHamburger   }></FontAwesomeIcon>
                    <span className="d-none d-lg-inline-flex">Notificatin</span>
                </a>
                <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                    <a href="#" className="dropdown-item">
                        <h6 className="fw-normal mb-0">Profile updated</h6>
                        <small>15 minutes ago</small>
                    </a>
                    <hr className="dropdown-divider"/>
                    <a href="#" className="dropdown-item">
                        <h6 className="fw-normal mb-0">New user added</h6>
                        <small>15 minutes ago</small>
                    </a>
                    <hr className="dropdown-divider"/>
                    <a href="#" className="dropdown-item">
                        <h6 className="fw-normal mb-0">Password changed</h6>
                        <small>15 minutes ago</small>
                    </a>
                    <hr className="dropdown-divider"/>
                    <a href="#" className="dropdown-item text-center">See all notifications</a>
                </div>
            </div>
            <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    <img className="rounded-circle me-lg-2" src={img} alt="" style={{width: "40px", height: "40px"}}/>
                    <span className="d-none d-lg-inline-flex">John Doe</span>
                </a>
                <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                    <a href="#" className="dropdown-item">My Profile</a>
                    <a href="#" className="dropdown-item">Settings</a>
                    <a href="#" className="dropdown-item">Log Out</a>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
