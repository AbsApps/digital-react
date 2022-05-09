import React, { Component } from "react";

import axios from "axios";

export default class Create extends Component {

    constructor(props) {
        super(props)
        this.onChangueName = this.onChangueName.bind(this);
        this.onChangueDescription = this.onChangueDescription.bind(this);
        this.onChangueSku = this.onChangueSku.bind(this);
        this.onChanguePrice = this.onChanguePrice.bind(this);
        this.onChangueActive = this.onChangueActive.bind(this);
        this.onSubmit = this.onSubmit.bind(this);



        this.state = {
            name: '',
            description: '',
            sku: '',
            price: '',
            active: '',
            form_error: {
                active: 0,
                data: {}
            }
        }
    }




    onChangueName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangueDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangueSku(e) {
        this.setState({
            sku: e.target.value
        });
    }
    onChanguePrice(e) {
        this.setState({
            price: e.target.value
        });
    }

    onChangueActive(e) {
        this.setState({
            active: e.target.value
        });
    }


    onSubmit(e) {
        // debugger;
        e.preventDefault();

        // console.log(this.state);
        const obj = {
            name: this.state.name,
            description: this.state.description,
            sku: this.state.sku,
            price: this.state.price,
            active: this.state.active
        };

        axios.post('http://127.0.0.1:8000/api/product', obj)
            .then(function (res) {
                console.log(res.data);
            })
            .catch(function (error) {
                debugger;
                console.log(error.response);
               
            }.bind(this));

        this.setState({
            name: '',
            description: '',
            sku: '',
            price: '',
            active: ''
        })
    }



    render() {


        let error_form = this.state.form_error.active;
        const rederErrorData = () => {
            if (error_form === 1) {
                return (
                    <div className="alert alert-warning" role="alert">
                        Hay un error en el formulario
                    </div>
                )
            }
        }

        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add New Product</h3>

                {rederErrorData()}

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangueName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangueDescription}
                        />
                    </div>

                    <div className="form-group">
                        <label>SKU Code:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.sku}
                            onChange={this.onChangueSku}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.price}
                            onChange={this.onChanguePrice}
                        />
                    </div>

                    <div className="form-group">
                        <label>Active:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.active}
                            onChange={this.onChangueActive}
                        />
                    </div>


                    <div className="form-group">
                        <input type="submit" value="Save Product" className="btn btn-primary mt-3" />
                    </div>
                </form>
            </div>
        )
    }
}


