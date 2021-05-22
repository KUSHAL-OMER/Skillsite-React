import React from 'react';

const Footer = () => {
    return (
        <div style={{backgroundColor: '#B4A5A5', padding: '2%'}}>
            <div className="container row">
                <div className="col-12 col-md-6" style={{textAlign: 'center'}}>
                <h5><u>LINKS</u></h5>
                <ul style={{listStyle: 'none'}}>
                    <li>
                        <a style={{color: 'black', textDecoration: 'none'}} href="/">Home</a>
                    </li><br/>
                    <li>
                        <a style={{color: 'black', textDecoration: 'none'}} href="/profiles">Profiles</a>
                    </li><br/>
                    <li>
                        <a style={{color: 'black', textDecoration: 'none'}} href="/skills">Skills</a>
                    </li>
                </ul>
            </div>
            <div className="col" style={{textAlign: 'center'}}>
                <h5><u>CONTACTS</u></h5>
                <address>
                    214, Shiv Katra G.T. road, Kanpur, 208007<br/>
                    Utter Pradesh, INDIA<br/><br/>
                    <i className="fa fa-phone fa-lg"></i> +91 6386139674<br/>
                    <i className="fa fa-envelope fa-lg"></i> Skillsite.com
                </address>
                <div>
                <a className="btn btn-social-icon btn-google" href="http://www.google.com"><i className="fa fa-google-plus"></i></a>
                <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                <a className="btn btn-social-icon btn-twitter" href="https://www.twitter.com"><i className="fa fa-twitter"></i></a>
            </div>
            </div>
            </div>
        </div>);
}

export default Footer;