// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



import Create from './componets/create.component';
import Edit from './componets/edit.component';
import Index from './componets/index.component';


class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="container">
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<Link to={'/'} className="navbar-brand">React 16 CRUD</Link>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav mr-auto">
								<li className="nav-item">
									<Link to={'/'} className="nav-link">Home</Link>
								</li>
								<li className="nav-item">
									<Link to={'/create'} className="nav-link">Create</Link>
								</li>
								<li className="nav-item">
									<Link to={'/index'} className="nav-link">Index</Link>
								</li>
							</ul>
						</div>
					</nav> <br />
					<h2>React 16 CRUD</h2> <br />
					<Switch>
						<Route exact path='/create' component={Create} />
						<Route path='/edit/:id' component={Edit} />
						<Route path='/index' component={Index} />
					</Switch>
				</div>
			</Router>
		);
	}
}



export default App;
