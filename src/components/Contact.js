import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component{
    
    render(){
        return(
           <div className="contact-body">
               <div className="contact-grid">
                    <div className='form-container'>
                        <form className="form-horizontal">
                            <div className="form-group">
                                <label for="exampleFormControlInput1" className="contact-label">Name   </label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1" className="contact-label">Email   </label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>                             
                            <div className="form-group">
                                <label for="exampleFormControlInput1" className="contact-label">Message   </label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your text goes here"></textarea>
                            </div>
                        </form>  
                    </div>
                    <div className="personal-info">
                        <div className='contact-title'>
                            <h2>Contact Me</h2>
                            <hr/> 
                        </div> 
                        <div className="phone">
                            <i className="fa fa-phone-square" aria-hidden="true"/>
                            <h3>(720)435-0645</h3>
                        </div>                              
                        
                        <div className="phone">
                            <i className="fa fa-envelope-square" aria-hidden="true"/>
                            <h4>cmendezoscar@gmail.com</h4>
                        </div> 
                    </div>
               </div>
           </div>
        )
    }
}

export default Contact;