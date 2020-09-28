import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom';

class Footer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="footer">
            <div className="container">
                <div className="row justify-content-center">             
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/solutions">Solution</Link></li>
                            <li><Link to="/resources">Resources</Link></li>
                            <li><Link to="/developer">Developer</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                          121, Clear Water Bay Road<br />
                          Clear Water Bay, Kowloon<br />
                          HONG KONG<br />
                          <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
                          <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
                          <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                             confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                            <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto">
                        <p>© 2020 Cloudflare, Inc.|Privacy Policy |Terms of Use| Disclosure |Trust & Safety| Cookie |Preferences| Trademark</p>
                    </div>
                </div>
                <div className="offset-6 offset-md-9">
                    <NavLink to="/support">Support</NavLink>|
                    <NavLink to="/support">Visitors</NavLink>|
                    <NavLink to="/support"><span className="fa fa-globe"></span>English</NavLink>
                </div>
            </div>
        </div>
        );
    }
}

export default Footer;