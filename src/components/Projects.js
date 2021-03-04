import React, { Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';

class Projects extends Component{

    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className='projects-grid'>
                    {/* Project 1 */}
                <div className='card-style'>
                    <CardTitle className='card-title card-one'>Ecommerce-Affinity</CardTitle>
                    <div className='card-body'>
                        <CardText className='card-text'>
                            <span className='long-description'>
                                Full Stack ecommerce application. Featuring user authentication, product filtering, and cart page integrated with braintree(PayPal).
                                <ul style={{listStyleType: 'none'}}> 
                                    <li>RestFul API</li>
                                    <li>React Hooks</li>
                                    <li>jwt authentication</li>
                                    <li>Braintree</li>
                                </ul>
                            </span>
                            <span className='short-description'>
                                <p>Full Stack ecommerce application.</p>
                                <p>RestFul API*React Hooks*jwt Auth*Braintree</p>
                            </span>
                            
                        </CardText>
                        <CardActions className='card-btn'>
                            <a  className="btn-gogit" 
                                href={"https://github.com/Odcuellarm/affinityEcommerce"} 
                                target="_blank">
                            See Program on GitHub</a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </div>
                </div>

                    {/* Project 2 */}
                <div className='card-style'>
                    <CardTitle className='card-title card-two'>Todo Checklist</CardTitle>
                    <div className='card-body'>
                        <CardText className='card-text'>
                                Complete your daily tasks using this basic Full Stack application with API routing with React, Express, and Postgres.
                                <ul style={{listStyleType: 'none'}}> 
                                    <li>NodeJS</li>
                                    <li>Express</li>
                                    <li>CRUD</li>
                                    <li>Postgres</li>
                                </ul>
                        </CardText>
                        <CardActions className='card-btn'>
                            <a  className="btn-gogit" 
                                href={"https://github.com/Odcuellarm/accomplishTODOlist"} 
                                target="_blank">
                            See Program on GitHub</a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </div>
                </div>

                 {/* Project 3 */}
                
                    <div className='card-style'>
                        <CardTitle className='card-title card-three'>Chinese Mandarin Cards</CardTitle>
                        <div className='card-body'>
                            <CardText className='card-text'>
                                <span className='long-description'>
                                    Learn Mandarin Chinese with a set of interactive cards. This is a basic full stack application connected to a postgres DB.
                                    <ul style={{listStyleType: 'none'}}> 
                                        <li>NodeJS</li>
                                        <li>Express</li>
                                        <li>CRUD</li>
                                        <li>MySQL</li>
                                    </ul>
                                </span>
                                <span className='short-description'>
                                    <p>Mandarin Chinese study cards.</p>
                                    <p>NodeJs*Express*CRUD*MySQL</p>
                                </span>
                                
                            </CardText>
                            <CardActions className='card-btn'>
                                <a  className="btn-gogit" 
                                    href={"https://github.com/Odcuellarm/chineseCardsApp"} 
                                    target="_blank" 
                                    >
                                See Program on GitHub</a>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name='share'/>
                            </CardMenu>
                        </div>      
                    </div>
                    
                </div>
                 
            )
        }else if(this.state.activeTab === 1){
            return(
                <div><h1>This is Angular</h1></div>
            )
        }else if(this.state.activeTab === 2){
            return(
                <div><h1>This is Mongo</h1></div>
            )
        }
    }
    
    render() {
        return(
            <div className="category-tabs">
                {/*
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab : tabId })} ripple>
                        <Tab>React</Tab>
                        <Tab>Angular</Tab>
                        <Tab>MongoDB</Tab>
                    </Tabs>
                */}
                

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Projects;