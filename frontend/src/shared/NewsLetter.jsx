import React, { useState } from 'react';
import './newsletter.css';
import { Container, Row, Col } from 'reactstrap';
import maleTourist from '../assets/images/abhi.jpg';
import { Navigate } from 'react-router-dom';
 
const NewsLetter = () => {
    const [email, setEmail] = useState('');
   
   

    const handleSubscribe = () => {
        // Add your subscription logic here
        console.log(`Subscribing with email: ${email}`);
        
        // Navigate to a new route (replace '/new-route' with your desired route)
         Navigate(`$/{email}`)
    };

    return (
        <section className="newsletter">
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="newsletter__content">
                            <h2>Subscribe now to get useful travelling information.</h2>
                            <div className="newsletter__input">
                                <input
                                    type="email"
                                    value={email}
                                    placeholder="Enter your email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button className="btn newsletter__btn" onClick={handleSubscribe}>
                                    Subscribe
                                </button>
                            </div>
                            <p>
                                Subscribe today and unlock a world of invaluable traveling insights delivered
                                straight to your inbox, ensuring you stay informed and inspired for your next
                                adventure!
                            </p>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="newsletter__img">
                            <img src={maleTourist} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default NewsLetter;
