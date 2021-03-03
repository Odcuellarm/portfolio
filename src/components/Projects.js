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
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{ color: 'white', 
                                        height: '176px', 
                                        background: 'url(https://cdn.pixabay.com/photo/2018/07/18/13/05/ecommerce-3546296_960_720.jpg) center / cover'}}>
                                        Ecommerce-Affinity</CardTitle>
                    <CardText>
                        Full Stack ecommerce application. Featuring user authentication, product filtering, and cart page integrated with braintree(PayPal).
                        <ul style={{listStyleType: 'none'}}> 
                            <li>RestFul API</li>
                            <li>React Hooks</li>
                            <li>jwt authentication</li>
                            <li>Braintree</li>
                        </ul>
                    </CardText>
                    <CardActions border style={{textAlign: 'center'}}>
                        <a  href={"https://github.com/Odcuellarm/affinityEcommerce"} 
                            target="_blank" 
                            style={{textDecoration: 'none',  
                                    backgroundColor: '#f44336',
                                    color: 'white',
                                    padding: '14px 25px',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    display: 'inline-block'}}>
                        See Program on GitHub</a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share'/>
                    </CardMenu>
                </Card>

                    {/* Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{ color: 'white',
                                        height: '176px',
                                        background: 'url(https://cdn.pixabay.com/photo/2014/12/16/16/19/smartphone-570507_960_720.jpg) center / cover'}}>
                                        Todo Checklist</CardTitle>
                    <CardText>
                        Complete your daily tasks using this basic Full Stack application with API routing with React, Express, and Postgres.
                        <ul style={{listStyleType: 'none'}}> 
                            <li>Node JS</li>
                            <li>Express</li>
                            <li>CRUD</li>
                            <li>Postgres</li>
                        </ul>
                    </CardText>
                    <CardActions border style={{textAlign: 'center'}}>
                        <a  href={"https://github.com/Odcuellarm/accomplishTODOlist"} 
                            target="_blank" 
                            style={{textDecoration: 'none',  
                                    backgroundColor: '#f44336',
                                    color: 'white',
                                    padding: '14px 25px',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    display: 'inline-block'}}>
                        See Program on GitHub</a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share'/>
                    </CardMenu>
                </Card>

                 {/* Project 3 */}
                 <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{ color: 'white', 
                                        height: '176px', 
                                        background: 'url(https://cdn.pixabay.com/photo/2019/04/28/09/39/still-life-4162597_960_720.jpg) center / cover'}}>
                                        Chinese Mandarin Cards</CardTitle>
                    <CardText>
                        Learn Mandarin Chinese with a set of interactive cards. This is a basic full stack application connected to a postgres DB.
                        <ul style={{listStyleType: 'none'}}> 
                            <li>Node JS</li>
                            <li>Express</li>
                            <li>CRUD</li>
                            <li>MySQL</li>
                        </ul>
                    </CardText>
                    <CardActions border style={{textAlign: 'center'}}>
                        <a  href={"https://github.com/Odcuellarm/chineseCardsApp"} 
                            target="_blank" 
                            style={{textDecoration: 'none',  
                                    backgroundColor: '#f44336',
                                    color: 'white',
                                    padding: '14px 25px',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    display: 'inline-block'}}>
                        See Program on GitHub</a>

                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share'/>
                    </CardMenu>
                </Card>

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