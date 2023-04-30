import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub,FaInstagram, FaTwitter, FaFacebook, FaYoutube, } from 'react-icons/fa';
import picture1 from "../../../dragon-news-resources/assets/qZone1.png"
import picture2 from "../../../dragon-news-resources/assets/qZone2.png"
import picture3 from "../../../dragon-news-resources/assets/qZone3.png"

const RightNav = () => {
    return (
        <div>
            <button className='btn-primary btn mb-2'><FaGoogle>Login with Google</FaGoogle>Login with Github</button>
            <button className='btn-primary btn mb-2 me-2'><FaGithub>Login with Github</FaGithub>Login with Github</button>
            <div>
                <ListGroup>
                    <ListGroup.Item><FaInstagram></FaInstagram>Instagram</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
                    <ListGroup.Item><FaFacebook></FaFacebook>Facebook</ListGroup.Item>
                    <ListGroup.Item><FaYoutube></FaYoutube>Youtube</ListGroup.Item>
                    
                </ListGroup>

                <h3 className='m-5'>List us</h3>d
                <div>
                    <img src={picture1} alt="" />
                    <img src={picture2} alt="" />
                    <img src={picture3} alt="" />
                </div>
            </div>
        </div>
        
    );
};

export default RightNav;