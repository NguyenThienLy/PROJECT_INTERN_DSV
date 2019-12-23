import React, { Component } from 'react'

import HeaderCustomer from '../headerCustomer/headerCustomer.component'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    static async getInitialProps({ req, query }) {

    }

    async componentDidMount() {

    }

    render() {
        return (
            <div>
                <HeaderCustomer />
                Homepage
            </div>
        );
    }
}

export default HomePage;