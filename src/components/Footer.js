import React from "react"
import {Container, Row, Col} from "reactstrap"
import { Link } from "react-router-dom";

function Footer() {
    
    return(
        <footer className="site-footer">
            <Container>
                <Row className="pt-5 mb-3 text-center d-flex justify-content-center">
                <Col md="2">
                    <h6 className="title font-weight-bold">
                    <Link to="/" className="footer">Home</Link>
                    </h6>
                </Col>
                <Col md="2">
                    <h6 className="title font-weight-bold">
                    <Link to="/portfolio" className="footer">Portfolio</Link>
                    </h6>
                </Col>
                <Col md="2">
                    <h6 className="title font-weight-bold">
                    <Link to="/about" className="footer">About</Link>
                    </h6>
                </Col>
                <Col md="2">
                    <h6 className="title font-weight-bold">
                    <Link to="/contact" className="footer">Contact</Link>
                    </h6>
                </Col>
                </Row>
                <hr className="rgba-white-light" style={{ margin: "0 15%" }} />
                <Row className="d-flex text-center justify-content-center mb-md-0 mb-4">
                <Col md="8" sm="12" className="mt-5">
                    <p style={{ lineHeight: "1.7rem" }} className="footer-color">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                    quae ab illo inventore veritatis et quasi architecto beatae
                    vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur.
                    </p>
                </Col>
                </Row>
                <hr className="clearfix d-md-none" style={{ margin: "10% 15% 5%" }} />
                <Row className="pb-3">
                <Col md={12}>
                    <div className="mb-5 justify-content-center d-flex">
                        <a className="btn btn-social-icon btn-instagram mr-md-4" href="http://instagram.com/">
                        <i className="fa fa-instagram fa-lg social-instagram"/>
                        </a>{" "}

                        <a className="btn btn-social-icon btn-facebook mr-md-4" href="http://facebook.com/">
                        <i className="fa fa-facebook fa-lg social-facebook" />
                        </a>{" "}

                        <a className="btn btn-social-icon btn-twitter mr-md-4" href="http://twitter.com/">
                        <i className="fa fa-twitter fa-lg social-twitter" />
                        </a>{" "}

                        <a className="btn btn-social-icon btn-google-plus mr-md-4" href="http://google-plus.com/">
                        <i className="fa fa-google-plus fa-lg social-google" />
                        </a>{" "}

                        <a className="btn btn-social-icon btn-github" href="http://github.com/">
                        <i className="fa fa-github fa-lg social-github" />
                        </a>{" "}
                    </div>
                </Col>
                </Row>
            </Container>
            <div className="footer-copyright text-center py-3">
                &copy; {new Date().getFullYear()} Copyright: Alex Abbamondi
            </div>
        </footer>
    )
}

export default Footer