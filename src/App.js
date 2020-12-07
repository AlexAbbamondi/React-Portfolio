import React from "react"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import {Container, Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, Button, Modal, ModalBody, ModalHeader, Row} from "reactstrap"
import './App.css';

import Footer from "./components/Footer.js"
import HomePage from "./pages/HomePage.js"
import AboutPage from "./pages/AboutPage.js"
import PortfolioPage from "./pages/PortfolioPage.js"
import ContactPage from "./pages/ContactPage.js"
import PricingContent from "./components/PricingContent"
import PricingCard from "./components/PricingCard"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
      title: "Alex Abbamondi",
      home: {
        title: "Free Your Mind",
        subTitle: "Projects that make a difference",
        text: "Click on the images below to checkout the services available"
      },
      about: {
        title: "About Us"
      },
      portfolio: {
        title: "Portfolio"
      },
      contact: {
        title: "Contact Us"
      }
    }
    this.toggleNav = this.toggleNav.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
  }

  //toggle nav on smaller screens
  toggleNav(){
    this.setState({
        isNavOpen: !this.state.isNavOpen
    })
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }

  render() {

    const Content = PricingContent.map(content => <PricingCard key={content.id} header={content.header} price={content.price} description1={content.description1} description2={content.description2} description3={content.description3} description4={content.description4}/>)

    return (
      //navigation with routing information
      <Router>
        
          
            <Navbar className="border-bottom navbar navBar" sticky="top" expand="md">
              <div className="container">
              <NavbarBrand><Link className="brand" to="/">Free Flow Designs</Link></NavbarBrand>
              <NavbarToggler onClick={this.toggleNav} className="shadow">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </NavbarToggler>
              <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav Navbar className="ml-auto">
                    <Link className="nav-link text" to="/">Home</Link>
                    <Link className="nav-link text" to="/about">About</Link>
                    <Link className="nav-link text" to="/portfolio">Portfolio</Link>
                    <Link className="nav-link text" to="/contact">Contact</Link>
                </Nav>
                <Button onClick={this.toggleModal} className="button ml-1">Pricing</Button>
                </Collapse>
                </div>
            </Navbar>
         

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/portfolio" render={() => <PortfolioPage title={this.state.portfolio.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />

          {/* popup modal for pricing */}
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal} className="text-white modal-header display-1 font-weight-bolder">Pricing</ModalHeader>
            <ModalBody>
                <Row className="justify-content-center">
                    {Content}
                </Row>
            </ModalBody>
          </Modal>

          <Footer/>


      </Router>
    );
  }
}

export default App;
