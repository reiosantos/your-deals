import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../home';

const Routes = () => (
	<Router>
		<Switch>
			<Route component={App} path="/" exact />
			<Route component={App} path="*" />
		</Switch>
	</Router>
);

export default Routes;
