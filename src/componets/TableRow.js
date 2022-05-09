


import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TableRow extends Component {

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.sku}
                </td>
                <td>
                    {this.props.obj.name}
                </td>

                <td>
                    {this.props.obj.price}
                </td>
                <td>
                    <Link to={"/edit/" + this.props.obj.id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }


}

export default TableRow;