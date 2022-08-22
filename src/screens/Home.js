import React, { Component } from 'react';
import Header from '../components/Ui/Header';
import Sidebar from '../components/Ui/Sidebar';
import Nav from '../components/Ui/Nav';
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css';
// import 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css';
import '../lib/owlcarousel/assets/owl.carousel.min.css';
import '../lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css';
import '../css/bootstrap.min.css';
import '../css/style.css';


export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid position-relative d-flex p-0">
        <Sidebar/>
        <div className="content">
        <Nav/>
        </div>

      </div>
    );
  }
}
