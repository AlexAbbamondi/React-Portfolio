import React from "react"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import {Container, Nav, Navbar, NavbarBrand, NavbarToggler, Collapse} from "reactstrap"
import './App.css';

import Footer from "./components/Footer.js"
import HomePage from "./pages/HomePage.js"
import AboutPage from "./pages/AboutPage.js"
import PortfolioPage from "./pages/PortfolioPage.js"
import ContactPage from "./pages/ContactPage.js"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isNavOpen: false,
      title: "Alex Abbamondi",
      headerLinks: [
        {title: "Home", path: "/"},
        {title: "About", path: "/about"},
        {title: "Portfolio", path: "/portfolio"},
        {title: "Contact", path: "/contact"}
      ],
      home: {
        title: "Be Relentless",
        subTitle: "Projects that make a difference",
        text: "Checkout my projects below"
      },
      about: {
        title: "About Me"
      },
      portfolio: {
        title: "My Portfolio"
      },
      contact: {
        title: "Contact Me"
      }
    }
    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav(){
    this.setState({
        isNavOpen: !this.state.isNavOpen
    })
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="md">
            <NavbarBrand>Alex Abbamondi</NavbarBrand>
            <NavbarToggler onClick={this.toggleNav}/>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav Navbar className="ml-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/portfolio">Portfolio</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
              </Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/portfolio" render={() => <PortfolioPage title={this.state.portfolio.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />

          <Footer/>

        </Container>
      </Router>
    );
  }
}

export default App;
