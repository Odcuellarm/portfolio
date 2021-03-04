import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component{
    
    render(){
        return(
           <div className="contact-body">
               <div className="contact-grid">
                    <div>
                        <form className="form-horizontal">

                        <div className="form-group">
                            <label for="exampleFormControlInput1" className="contact-label">Name   </label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Email   </label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                                                    
                        <div className="form-group">
                            
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your text goes here"></textarea>
                        </div>
                        </form>
                    </div>
                        
                    
                    <div>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '26px', fontFamily: 'Roboto'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (720)435-0645
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '26px', fontFamily: 'Roboto'}}>
                                        <i className="fa fa-envelope-square" aria-hidden="true"/>
                                        cmendezoscar@gmail.com
                                    </ListItemContent>
                                </ListItem>
                            </List>

                        </div>
                    </div>
               </div>
           </div>
        )
    }
}

export default Contact;