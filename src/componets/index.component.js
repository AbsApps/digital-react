import React, { Component } from "react";


import axios from "axios";
import TableRow from './TableRow';

export default class Index extends Component {


    constructor(props) {
        super(props);
        this.state = { products: [] };
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/product')
            .then(response => {
                // debugger;
                this.setState({ products: response.data.data });
                console.log(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow() {
        return this.state.products.map(function (object, i) {
            return <TableRow obj={object} key={i} />;
        });
    }


    render() {
        return (
            <div>
                <h3 align="center">Product List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>SKU</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}


