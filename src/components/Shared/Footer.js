import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="footer">
            <div className="footer pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <div className="footer-social pb-4 text-center">
                                <h4 className='text-white mb-3'>Stay in touch</h4>
                                <a><i className="fab fa-facebook"></i></a>
                                <a><i className="fab fa-twitch"></i></a>
                                <a><i className="fab fa-youtube"></i></a>
                                <a><i className="fab fa-dribbble"></i></a>
                                <a><i className="fab fa-linkedin"></i></a>
                                <a><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <form className="newsletter">
                                <div className="d-flex">
                                    <input className="form-control2" placeholder="email address here" type="email" />
                                    <button className="footer-button" disabled type="">Subscribe</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-12">
                            <div className="footer-copy">
                                <div className="copy-right text-center pt-5">
                                    <p className="text-light">&copy; {year}. ArafatSarker All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;