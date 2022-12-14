import React, { Component } from 'react'
import img from '../../assets/imgs/user.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faDragon, faChartColumn,faUserAlt,
     faShop, faSackDollar, faHSquare, faICursor } from '@fortawesome/free-solid-svg-icons';

export default class Sidebar extends Component {
  render() {
    return (
        <div className="sidebar pe-4 pb-3">
        <nav className="navbar bg-secondary navbar-dark">
            <a href="index.html" className="navbar-brand mx-4 mb-3">
                <h3 className="text-primary"><FontAwesomeIcon className="fa fa-user-edit me-2" icon={faUserAlt}></FontAwesomeIcon>DarkPan</h3>
            </a>
            <div className="d-flex align-items-center ms-4 mb-4">
                <div className="position-relative">
                    <img className="rounded-circle" src={img} alt="" style={{width: "40px", height: "40px"}}/>
                    <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                </div>
                <div className="ms-3">
                    <h6 className="mb-0">Jhon Doe</h6>
                    <span>Admin</span>
                </div>
            </div>
            <div className="navbar-nav w-100">
                <a href="index.html" className="nav-item nav-link active"><FontAwesomeIcon className="fa fa-tachometer-alt me-2" icon={faDragon}/>Dashboard</a>
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><FontAwesomeIcon className="fa fa-tachometer-alt me-2" icon={faSackDollar} />Elements</a>
                    <div className="dropdown-menu bg-transparent border-0">
                        <a href="button.html" className="dropdown-item">Buttons</a>
                        <a href="typography.html" className="dropdown-item">Typography</a>
                        <a href="element.html" className="dropdown-item">Other Elements</a>
                    </div>
                </div>
                <a href="widget.html" className="nav-item nav-link"><FontAwesomeIcon className="fa fa-tachometer-alt me-2" icon={faCoffee} />Widgets</a>
                <a href="form.html" className="nav-item nav-link"><FontAwesomeIcon className="fa fa-tachometer-alt me-2" icon={faShop} />Forms</a>
                <a href="table.html" className="nav-item nav-link"><FontAwesomeIcon className="fa fa-tachometer-alt me-2" icon={faHSquare} />Tables</a>
                <a href="chart.html" className="nav-item nav-link"><FontAwesomeIcon className="fa fa-tachometer-alt me-2" icon={faChartColumn} />Charts</a>
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><FontAwesomeIcon className="fa fa-tachometer-alt me-2" icon={faICursor} />Pages</a>
                    <div className="dropdown-menu bg-transparent border-0">
                        <a href="signin.html" className="dropdown-item">Sign In</a>
                        <a href="signup.html" className="dropdown-item">Sign Up</a>
                        <a href="404.html" className="dropdown-item">404 Error</a>
                        <a href="blank.html" className="dropdown-item">Blank Page</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    )
  }
}
