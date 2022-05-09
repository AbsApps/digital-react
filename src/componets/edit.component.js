import React, { Component } from "react";
import axios from "axios";

export default class Edit extends Component {

    constructor(props) {
        super(props)
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeSku = this.onChangeSku.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeActive = this.onChangeActive.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            description: '',
            sku: '',
            price: '',
            active: '',
        }
    }


    onSubmit(e) {
        e.preventDefault();
        const obj = {
            person_name: this.state.person_name,
            business_name: this.state.business_name,
            business_gst_number: this.state.business_gst_number
        };
        axios.post('http://localhost:4000/business/update/' + this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/index');
    }


    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }
    onChangeSku(e) {
        this.setState({
            sku: e.target.value
        })
    }
    onChangePrice(e) {
        this.setState({
            price: e.target.value
        })
    }
    onChangeActive(e) {
        this.setState({
            active: e.target.value
        })
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/product/' + this.props.match.params.id)
            .then(response => {

                let product = response.data.pop()
                this.setState({
                    name: product.name,
                    description: product.description,
                    sku: product.sku,
                    price: product.price,
                    active: product.active,
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>


                <h3 align="center">Update Product</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.name ?? ""}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.description ?? ""}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Sku:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.sku ?? ""}
                            onChange={this.onChangeSku}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.price ?? ""}
                            onChange={this.onChangePrice}
                        />
                    </div>
                    <div className="form-group">
                        <label>Active:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.active ?? ""}
                            onChange={this.onChangeActive}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit"
                            value="Update Product"
                            className="btn btn-primary mt-5" />
                    </div>
                </form>
            </div>
        )
    }
}


