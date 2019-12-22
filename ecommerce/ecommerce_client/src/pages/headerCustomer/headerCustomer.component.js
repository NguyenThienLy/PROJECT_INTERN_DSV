import React, { Component } from 'react'

import { api } from '../../services'
import './headerCustomer.component.scss'
import { 
    AccountCustomer, 
    Cart,
    Category,
    FastCart,
    SearchCustomer,
    SubCategory
 } from './components/'

class HeaderCustomer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    }

    async componentDidMount() {
        
    }
    render() {
        return (
            <div>
               <AccountCustomer/>
               <Cart/>
               <Category/>
               <FastCart/>
               <SearchCustomer/>
               <SubCategory/>
            </div>
        );
    }
}

export default HeaderCustomer;
