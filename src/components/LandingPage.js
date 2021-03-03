import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { Cell, Grid } from 'react-mdl';
import profilePic from '../img/frameDarkBlue.png';

class LandingPage extends Component{
    
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src={profilePic}
                            alt="profile-pic"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Oscar Mendez</h1>
                            <hr/>
                            <h3>Front-End Web Developer</h3>
                        <div>
                                <h4>Let's create stunning products together</h4>

                                <div className="social-links"> 
                                    <div style={{marginRight: '10px'}}>
                                        <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank">
                                            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                        </a>                                    
                                    </div>                            
                                    <div style={{margin: '0 6px'}}>
                                        <a href="https://github.com/Odcuellarm" rel="noopener noreferrer" target="_blank">
                                            <i className="fa fa-github-square" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <div style={{marginLeft: '10px'}}>
                                        <a href="https://twitter.com/?lang=en" rel="noopener noreferrer" target="_blank">
                                            <i className="fa fa-twitter-square" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    
                                </div>
                            </div>                                                
                                                      
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;