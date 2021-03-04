import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends Component{
    
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        
                            <h2 style={{paddingTop: '1em'}}>Oscar Mendez</h2>
                            <h4 style={{color: 'gray'}}>Web Developer</h4>
                            <hr style={{borderTop: '3px solid #833fb2', width: '80%'}}/>
                                <p style={{marginRight: '14px'}}>
                                    Junior Front-End Developer with expertise in JavaScript/ES6, CSS3, familiar 
                                    with Agile methodologies and Scrum practices.  Pursuing opportunities to apply
                                    his knowledge on web development and acquire new professional skills. Willing
                                    to learn new traits, works well both independently and as part of a team.   
                                </p>

                            <h4 style={{color: 'gray'}}>Personal Information</h4>
                            <hr style={{borderTop: '3px solid #833fb2', width: '80%'}}/>
                                    <h5>Phone</h5>
                                        <p>(720) 435-0645</p>
                                    <h5>Email</h5>
                                        <p>cmendezoscar@gmail.com</p>
                                    <h5>LinkedIn</h5>
                                        <p>Oscar Mendez</p>

                            <h4 style={{color: 'gray'}}>Additional Information</h4>    
                            <hr style={{borderTop: '3px solid #833fb2', width: '80%'}}/>
                                    <p>Spanish language: Native expertise</p>
                                    <p>Visa Status: No sponsorship required</p>
                                

                    </Cell>
                    <Cell className="resume-right-col" col={8}>

                        <h3>Web Development Experience</h3>
                        <Experience
                            startYear = {"December 2020"}
                            endYear = {"February 2021"}
                            jobName = "Affinity-Ecommerce"
                            jobDescription = "RESTful ecommerce application employing a NodeJS API, with multiple functionalities such as, user registration, validation and authentication, private admin routing, filtered search, and payments with Braintree (by PayPal)."
                        />
                        <Experience
                            startYear = {"September 2020"}
                            endYear = {"October 2020"}
                            jobName = "Accomplish To do list"
                            jobDescription = "REST API application featuring basic HTTP routing with Express.js and CRUD operations on a PostgreSQL database."
                        />  
                        <Experience
                            startYear = {"May 2020"}
                            endYear = {"June 2020"}
                            jobName = "Mandarin Chinese Cards"
                            jobDescription = "REST API application performing CRUD operations to a MySQL database with UTF-8 encoding, and a local directory storing sounds."
                        />  
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h3>Education</h3>
                        <Education
                            startYear = {"2018"}
                            endYear = {"2021"}
                            schoolName = "South Western Oklahoma State University"
                            schoolDescription = "Computer Scientist – Everett Dobson School of Business and Technology."
                        />

                        <Education
                            startYear = {"2012"}
                            endYear = {"2016"}
                            schoolName = "National University of Colombia"
                            schoolDescription = "Biologist – Department of Science."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/> 
                        
                        <h3>Key Skills</h3>
                        <Grid>
                            <Cell col={4}>
                                <Skills
                                    skill = "HTML5/CSS3"
                                />
                                <Skills
                                    skill = "JavaScript/ES6"
                                />
                                <Skills
                                    skill = "ASP.NET MVC"
                                />
                            </Cell>
                            <Cell col={4}>
                                <Skills
                                    skill = "ReactJS, Redux, RequireJS"
                                />
                                <Skills
                                    skill = "NodeJS"
                                />
                                <Skills
                                    skill = "Express.js, PHP"
                                />  
                            </Cell>
                            <Cell col={4}>
                                <Skills
                                    skill = "Selenium, Cucumber"
                                /> 
                                <Skills
                                    skill = "PostgreSQL, MySQL, MongoDB"
                                /> 
                                <Skills
                                    skill = "Git, Postman, Jenkins, Docker"
                                /> 
                            </Cell>  
                             
                        </Grid>                                                                    
                        
                    </Cell>
 
                </Grid>
            </div>
        );
    }
}

export default Resume;